import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Hero from "./Models/Hero.js"

class AppState extends EventEmitter {
  /**@type {Hero[]} */
  apiHeroes = []
  /**@type {Hero} */
  activeHero = null
  /**@type {Hero[]} */
  myHeroes = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
