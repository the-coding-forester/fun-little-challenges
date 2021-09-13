const dataFile = require("./data.json");

/* expected return for listNames:
{
  "recipeNames":
    [
      "scrambledEggs",
      "garlicPasta",
      "chai"
    ]
}
*/
const listNames = () => {
  const values = [];
  dataFile.recipes.forEach(recipe => {
    values.push(recipe.name);
  });
  return { "recipeNames": values };
}

/* expected return for listIngredients (if recipe exists):
{
  "details":
    {
      "ingredients": [
        "500mL water",
        "100g spaghetti",
        "25mL olive oil",
        "4 cloves garlic",
        "Salt"
      ],
      "numSteps":5
    }
}
*/
const listIngredients = (recipeName) => {
  const ingredients = [];
  let steps = dataFile.recipes[recipeName].instructions.length;
  dataFile.recipes[recipeName].ingredients.forEach(ingredient => {
    ingredients.push(ingredient);
  })
  return { "details": { "ingredients": ingredients, "numSteps": steps } }
}

module.exports = {
  listNames,
  listIngredients,
}