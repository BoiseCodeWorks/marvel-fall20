export default class Ship {
  constructor(data) {
    this.name = data.name
    this.description = data.description
    this.ship = data.ship
    this.id = data.id
  }

  get Template() {
    return /*html */`
    <div class="col-6 text-center" onclick="app.crewController.setActive('${this.id}')" >
    <p>${this.name}</p>
    </div>`
  }

  get ActiveTemplate() {
    return /*html */`<div class="col-12 text-center" >
    <h3>${this.name}</h3>
    <p>${this.description}</p>
    <hr/>
    <img src="${this.ship.img}" class="w-100" alt="ship-img">
    <h4>Enlisted on the ${this.ship.name}</h4>
    </div>
    `
  }



}

