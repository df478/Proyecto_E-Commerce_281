const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const limite = 100;

async function generate(limit) {
  let provincia = [];

  return provincia;
}

// Function to generate and export the data
async function generarProvincia() {
  const provinciaData = await generate(limite);
  return provinciaData;
}

// Export the function
module.exports = {
  generarProvincia,
};