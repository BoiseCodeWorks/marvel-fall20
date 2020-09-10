import crewMembService from "../Services/CrewMembService.js"
import { ProxyState } from "../AppState.js";

function _draw() {
  let template = ""
  let members = ProxyState.members
  members.forEach(h => template += h.Template)
  document.getElementById("crew").innerHTML = template
}

function _drawActive() {
  if (ProxyState.activeCrew) {
    document.getElementById("active").innerHTML = ProxyState.activeCrew.ActiveTemplate
  } else document.getElementById("active").innerHTML = ""

}

export default class CrewController {
  constructor() {
    console.log("hello from crewcontrroller");
    ProxyState.on("members", _draw)
    ProxyState.on("activeCrew", _drawActive)

    this.getMembers()
  }

  getMembers() {
    try {
      crewMembService.getMembers()
    } catch (error) {
      console.error(error)
    }
  }
  setActive(id) {
    try {
      console.log(id);
      crewMembService.setActive(id)
      // apiHeroesService.viewHero(heroId)
    } catch (error) {
      console.error(error)
    }
  }
}