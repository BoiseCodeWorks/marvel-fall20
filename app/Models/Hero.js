export default class Hero {
  constructor({ name, id, description, thumbnail, img, _id, user, health }) {
    this.name = name
    this.description = description || "Unknown Backstory"
    this.id = id || _id
    this.img = img || thumbnail.path + "." + thumbnail.extension
    this.sandboxHero = false
    this.health = health
    if (user) {
      this.sandboxHero = true
    }
    //NOTE swap out value if bad img
    if (this.img == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
      this.img = "https://avatars1.githubusercontent.com/u/52214801?s=460&u=5deaacb38faed350d6066139b350bc0d631fcbd7&v=4"
    }
    //NOTE IF NEED TO DRILL DOWN 3 LAYERS
    // if (thumbnail && thumbnail.path && thumbnail.path["value-input"]) {
    //   this.img = thumbnail.path.value
    // }
  }

  get Template() {
    return `<div class="card col-12">
                                <div class="card-body d-flex flex-direction-column">
                                    <img class="listImg" src="${this.img}" alt="">
                                    <p class="card-text my-auto  pl-3">${this.name}</p>
                                    ${this.viewButton}
                        </div>
              </div>`
  }

  get viewButton() {
    if (this.sandboxHero) {
      return `<button class="btn btn-warning m-auto" onclick="app.myHeroesController.viewHero('${this.id}')"> View </button>`
    } return `<button class="btn btn-info m-auto" onclick="app.apiHeroesController.viewHero('${this.id}')"> View </button>`
  }

  get activeTemplate() {
    return `<div class="card col-12 text-center">
                                <img class="card-img-top" src="${this.img}" alt="">
                                <div class="card-body">
                                ${this.healthTemplate}
                                    <h4 class="card-title">${this.name}</h4>
                                    <p class="card-text">${this.description}</p>
                                    ${this.activeButton}
                                </div>
                            </div>`
  }

  get activeButton() {
    if (this.sandboxHero) {
      return ` <button class="btn btn-danger" onclick="app.myHeroesController.fireHero('${this.id}')"> Fire </button>`
    } return ` <button class="btn btn-success" onclick="app.myHeroesController.recruitHero()"> Recruit </button>`
  }

  get healthTemplate() {
    if (this.sandboxHero) {
      return `${this.health} <i class="fa fa-plus" aria-hidden="true" onclick="app.myHeroesController.addHp()"></i> `
    } else return ``
  }

}

//SANDBOX SCHEMA
// description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! "
// img: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg"
// name: "A-Bomb (HAS)"
// user: "tim"
// __v: 0
// _id: "5f5122495175ba00179bf354"

//MARVEL API SCHEMA
// comics: { available: 12, collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/comics", items: Array(12), returned: 12 }
// description: ""
// events: { available: 1, collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/events", items: Array(1), returned: 1 }
// id: 1011334
// modified: "2014-04-29T14:18:17-0400"
// name: "3-D Man"
// resourceURI: "http://gateway.marvel.com/v1/public/characters/1011334"
// series: { available: 3, collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/series", items: Array(3), returned: 3 }
// stories: { available: 21, collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/stories", items: Array(20), returned: 20 }
// thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784", extension: "jpg" }
// urls: (3)[{ … }, { … }, { … }]