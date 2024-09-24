const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const limite = 100;

async function generate(limit) {
  let comunidades = [];

  return comunidades;
}

// Function to generate and export the data
async function generarComunidad() {
  const comunidadData = await generate(limite);
  return comunidadData;
}

// Export the function
module.exports = {
  generarComunidad,
};