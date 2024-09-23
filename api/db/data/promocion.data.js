const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const limite = 100;

async function generate(limit) {
  let promociones = [];

  return promociones;
}

// Function to generate and export the data
async function generarPromocion() {
  const promocionData = await generate(limite);
  return promocionData;
}

// Export the function
module.exports = {
  generarPromocion,
};