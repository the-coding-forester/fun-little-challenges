const router = require("express").Router();
const controller = require("./controller");
const methodNotAllowed = require("./errors/methodNotAllowed");

router
  .route("/recipes")
  .get(controller.listNames)
  .all(methodNotAllowed);

router
  .route("/recipes/details/:recipeName")
  .get(controller.listIngredients)
  .all(methodNotAllowed);