import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import Ship from "../Models/Ship.js";

class ShipService {
  async setActive(id) {
    let ship = ProxyState.ships.find(s => s.id == id)
    let res = await api.get("ship/" + id + "/crew")
    ship.crew = res.data
    ProxyState.activeShip = ship
    console.log(res.data);
  }


  constructor() {
    console.log("shipservice");
  }

  async getShips() {
    let res = await api.get("ship")
    console.log(res)
    ProxyState.ships = res.data.map(h => new Ship(h))
  }

  viewHero(heroId) {
  }
}

const SHIPSERVICE = new ShipService();
export default SHIPSERVICE