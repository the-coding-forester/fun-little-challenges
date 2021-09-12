const service = require("./service");

//Validation Middleware


//CRUD Functions

const listNames = async (req, res) => {
  const data = await service.listNames;
  res.status(200).json({ data })
}

module.exports = {
  listNames,
}