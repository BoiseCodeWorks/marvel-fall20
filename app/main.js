import CrewController from "./Controllers/CrewController.js";
import ShipController from "./Controllers/ShipController.js";


class App {
  crewController = new CrewController();
  shipController = new ShipController();
}

window["app"] = new App();
