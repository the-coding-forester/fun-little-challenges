const service = require("./service");

//Validation Middleware
const recipeExists = async (req, res, next) => {
  const { recipeName } = req.params;
  const recipe = await service.listIngredients(recipeName);

  if (recipe) {
    return next();
  }
  next(res.status(201).json({}));
}

//CRUD Functions

const listNames = async (req, res) => {
  const data = await service.listNames;
  res.status(200).json({ data });
}

const listIngredients = async (req, res) => {
  const data = await service.listIngredients(recipeName);
  res.status(200).json({ data });
}

module.exports = {
  listNames,
  listIngredients: [
    recipeExists,
    listIngredients,
  ],
}