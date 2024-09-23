const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const limite = 100;

async function generate(limit) {
  let municipio = [];

  return municipio;
}

// Function to generate and export the data
async function generarMunicipio() {
  const municipioData = await generate(limite);
  return municipioData;
}

// Export the function
module.exports = {
  generarMunicipio,
};