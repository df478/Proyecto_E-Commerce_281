const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const limite = 100;

async function generate(limit) {
  let departamentos = [];

  return departamentos;
}

// Function to generate and export the data
async function generarDepartamento() {
  const departamentoData = await generate(limite);
  return departamentoData;
}

// Export the function
module.exports = {
  generarDepartamento,
};