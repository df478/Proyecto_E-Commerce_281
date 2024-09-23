const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const limite = 100;

async function generate(limit) {
  let producto = [];

  return producto;
}

// Function to generate and export the data
async function generarProducto() {
  const productoData = await generate(limite);
  return productoData;
}

// Export the function
module.exports = {
  generarProducto,
};