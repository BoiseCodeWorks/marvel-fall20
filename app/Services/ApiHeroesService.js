import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import Hero from "../Models/Hero.js";

class ApiHeroesService {


  constructor() {
    console.log("api heroes service");
  }

  async getHeroes() {
    let res = await api.get()
    console.log(res)
    ProxyState.apiHeroes = res.data.data.results.map(h => new Hero(h))
  }

  viewHero(heroId) {
    let hero = ProxyState.apiHeroes.find(h => h.id == heroId)
    ProxyState.activeHero = hero
  }
}

const APIHEROESSERVICE = new ApiHeroesService();
export default APIHEROESSERVICE