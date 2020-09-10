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
    ${this.Crew}
</div>
    `
  }
  get Crew() {
    console.log(this.crew)
    if (this.crew.length == 1 && this.captain != undefined) {
      return `<h4>This ship is currently captained by ${this.captain.name}</h4>
      <p> No crew currently on ship</p>`
    } else if (this.crew.length < 1) {
      return `<p> No crew currently on ship</p>`
    } else if (this.captain != undefined) {

      let template = `<h4>This ship is currently captained by ${this.captain.name}</h4>`
      template += "<p> The ships mates are "
      this.crew.forEach(m => {
        if (m.name != this.captain.name) {

          template += m.name + `<i class="fa fa-trash" aria-hidden="true" onclick="app.crewController.delist('${m.id}')"></i>  / `
        }
      })
      template += "</p>"
      return template
    }
    let template = ``
    template += "<p> The ships mates are "
    this.crew.forEach(m => {
      template += m.name + `<i class="fa fa-trash" aria-hidden="true" onclick="app.crewController.delist('${m.id}')"></i>  / `
    })
    template += "</p>"
    return template

  }



}

