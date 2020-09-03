import { sandboxApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import Hero from "../Models/Hero.js";

class MyHeroesService {
  constructor() {
    console.log("hello from myheroesservice");
  }
  async recruitHero() {
    ProxyState.activeHero.health = 10
    let res = await sandboxApi.post("", ProxyState.activeHero)
    console.log(res)
    ProxyState.activeHero = null
    ProxyState.myHeroes = [...ProxyState.myHeroes, new Hero(res.data.data)]
  }
  async getMyHeroes() {
    let res = await sandboxApi.get()
    console.log(res)
    ProxyState.myHeroes = res.data.data.map(h => new Hero(h))
  }
  viewHero(heroId) {
    let hero = ProxyState.myHeroes.find(h => h.id == heroId)
    ProxyState.activeHero = hero
  }
  async fireHero(id) {
    let res = await sandboxApi.delete(id)
    console.log(res)
    ProxyState.activeHero = null
    let index = ProxyState.myHeroes.findIndex(h => h.id == id)
    ProxyState.myHeroes.splice(index, 1)
    ProxyState.myHeroes = ProxyState.myHeroes
  }
  async addHp() {
    let hero = ProxyState.activeHero
    hero.health++
    await sandboxApi.put(ProxyState.activeHero.id, hero)
    ProxyState.activeHero = ProxyState.activeHero
  }
}

const MYHEROESSERVICE = new MyHeroesService()
export default MYHEROESSERVICE