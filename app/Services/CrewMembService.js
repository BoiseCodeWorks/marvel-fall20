import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import CrewMember from "../Models/CrewMember.js";

class CrewMembService {
  async delist(crewId) {
    let res = await api.put("crew/" + crewId, { ship: null })
    ProxyState.activeShip.crew = ProxyState.activeShip.crew.filter(m => m.id != crewId)
    ProxyState.activeShip = ProxyState.activeShip
    this.getMembers()
  }

  setActive(id) {
    let member = ProxyState.members.find(m => m.id == id)
    ProxyState.activeCrew = member
  }

  async create(pirateInfo) {
    let res = await api.post("crew", pirateInfo)
    console.log(res)
    ProxyState.members = [...ProxyState.members, new CrewMember(res.data)]
  }

  constructor() {
    console.log("crewmembservice");
  }

  async getMembers() {
    let res = await api.get("crew")
    console.log(res)
    ProxyState.members = res.data.map(h => new CrewMember(h))
  }
  async recruit(shipId, crewId) {
    let res = await api.put("crew/" + crewId, { ship: shipId })
    console.log(res)
    ProxyState.activeCrew = new CrewMember(res.data)
    this.getMembers()
  }
}

const CREWMEMBSERVICE = new CrewMembService();
export default CREWMEMBSERVICE