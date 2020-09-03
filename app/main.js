import ApiHeroesController from "./Controllers/ApiHeroesController.js";
import MyHeroesController from "./Controllers/MyHeroesController.js";

class App {
  apiHeroesController = new ApiHeroesController();
  myHeroesController = new MyHeroesController();
}

window["app"] = new App();
