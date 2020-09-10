import shipService from "../Services/ShipService.js"
import { ProxyState } from "../AppState.js";

function _draw() {
  let template = ""
  let ships = ProxyState.ships
  ships.forEach(h => template += h.Template)
  document.getElementById("ships").innerHTML = template
}

function _drawActive() {
  if (ProxyState.activeShip) {
    document.getElementById("active").innerHTML = ProxyState.activeShip.ActiveTemplate
  } else document.getElementById("active").innerHTML = ""

}

export default class ShipController {
  constructor() {
    console.log("hello from Shipcontrroller");
    ProxyState.on("ships", _draw)
    ProxyState.on("activeShip", _drawActive)
    this.getShips()
  }

  getShips() {
    try {
      shipService.getShips()
    } catch (error) {
      console.error(error)
    }
  }
  setActive(id) {
    try {
      shipService.setActive(id)
      // apiHeroesService.viewHero(heroId)
    } catch (error) {
      console.error(error)
    }
  }
}