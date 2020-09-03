import apiHeroesService from "../Services/ApiHeroesService.js"
import { ProxyState } from "../AppState.js";

function _draw() {
  let template = ""
  let heroes = ProxyState.apiHeroes
  heroes.forEach(h => template += h.Template)
  document.getElementById("api-heroes").innerHTML = template
}

function _drawActive() {
  if (ProxyState.activeHero) {
    document.getElementById("active-hero").innerHTML = ProxyState.activeHero.activeTemplate
  } else document.getElementById("active-hero").innerHTML = ""
}

export default class ApiHeroesController {
  constructor() {
    console.log("hello from apiheroescontrroller");
    ProxyState.on("apiHeroes", _draw)
    ProxyState.on("activeHero", _drawActive)
    this.getHeroes()
  }

  getHeroes() {
    try {
      apiHeroesService.getHeroes()
    } catch (error) {
      console.error(error)
    }
  }
  viewHero(heroId) {
    try {
      apiHeroesService.viewHero(heroId)
    } catch (error) {
      console.error(error)
    }
  }
}