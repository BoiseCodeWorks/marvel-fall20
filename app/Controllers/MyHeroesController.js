import myHeroesService from "../Services/MyHeroesService.js"
import { ProxyState } from "../AppState.js";

function _drawMyHeroes() {
  let template = ""
  let heroes = ProxyState.myHeroes
  heroes.forEach(h => template += h.Template)
  document.getElementById("my-heroes").innerHTML = template
}

export default class MyHeroesController {
  constructor() {
    console.log("myheroescontroller");
    this.getMyHeroes()
    ProxyState.on("myHeroes", _drawMyHeroes)
  }

  recruitHero() {
    try {
      myHeroesService.recruitHero()
    } catch (error) {
      console.error(error);
    }
  }

  getMyHeroes() {
    try {
      myHeroesService.getMyHeroes()
    } catch (error) {
      console.error(error);
    }

  }

  viewHero(heroId) {
    myHeroesService.viewHero(heroId)
  }

  fireHero(id) {
    try {
      myHeroesService.fireHero(id)
    } catch (error) {
      console.error(error);
    }

  }

  addHp() {
    try {
      myHeroesService.addHp();
    } catch (error) {
      console.error(error);
    }
  }
}