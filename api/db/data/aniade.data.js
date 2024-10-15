const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function generate() {
  let aniades = [];
  const aniadeData = [

    
  ];
    for (const aniade of aniadeData) {
      aniades.push({
        id_carrito : aniade.id_carrito,
        cantidad: aniade.cantidad,
        id_producto: aniade.id_producto
      });
    }
  return aniades;
}

// Function to generate and export the data
async function generarAniade() {
  const aniadeData = await generate();
  return aniadeData;
}

// Export the function
module.exports = {
  generarAniade,
};