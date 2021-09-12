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
  return { recipeNames: values };
}

module.exports = {
  listNames,
}