export default class Ship {
  constructor(data) {
    this.name = data.name
    this.captain = data.captain
    this.id = data.id
    this.img = data.img
    this.crew = []
  }

  get Template() {
    return `
    <div class="col-6 text-center" onclick="app.shipController.setActive('${this.id}')">
    <p>${this.name}</p>
    </div>
    `
  }
  get ActiveTemplate() {
    return `
    <div class="col-12 text-center" >
    <h3>${this.name}</h3>
    <img src="${this.img}" class="w-100" alt="ship-img">
    <h4>This ship is currently captained by ${this.captain.name}</h4>
    ${this.Crew}
</div>
    `
  }
  get Crew() {
    console.log(this.crew)
    let template = ""
    if (this.crew.length < 1 || this.crew.length == 1 && this.captain) {
      return "No crew currently on ship"
    }
    template = "<p> The ships mates are "
    this.crew.forEach(m => {
      if (m.name != this.captain.name) {

        template += m.name + `<i class="fa fa-trash" aria-hidden="true" onclick="app.crewController.delist('${m.id}')"></i>  / `
      }
    })
    template += "</p>"
    return template

  }



}

