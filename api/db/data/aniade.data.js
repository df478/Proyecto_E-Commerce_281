const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function generate() {
  let aniades = [];
  const aniadeData = [
    { id_carrito: 1, cantidad: 2, id_producto: 1 },
    { id_carrito: 1, cantidad: 5, id_producto: 2 },
    { id_carrito: 1, cantidad: 3, id_producto: 3 },
    
    { id_carrito: 2, cantidad: 4, id_producto: 4 },
    { id_carrito: 2, cantidad: 6, id_producto: 5 },
    { id_carrito: 2, cantidad: 1, id_producto: 6 },
    
    { id_carrito: 3, cantidad: 8, id_producto: 7 },
    { id_carrito: 3, cantidad: 2, id_producto: 8 },
    { id_carrito: 3, cantidad: 4, id_producto: 9 },
    
    { id_carrito: 4, cantidad: 7, id_producto: 10 },
    { id_carrito: 4, cantidad: 3, id_producto: 1 },
    { id_carrito: 4, cantidad: 5, id_producto: 2 },
    
    { id_carrito: 5, cantidad: 6, id_producto: 3 },
    { id_carrito: 5, cantidad: 1, id_producto: 4 },
    { id_carrito: 5, cantidad: 2, id_producto: 5 },
    
    { id_carrito: 6, cantidad: 9, id_producto: 6 },
    { id_carrito: 6, cantidad: 4, id_producto: 7 },
    { id_carrito: 6, cantidad: 3, id_producto: 8 },
    
    { id_carrito: 7, cantidad: 6, id_producto: 9 },
    { id_carrito: 7, cantidad: 5, id_producto: 10 },
    { id_carrito: 7, cantidad: 2, id_producto: 1 },
    
    { id_carrito: 8, cantidad: 8, id_producto: 2 },
    { id_carrito: 8, cantidad: 2, id_producto: 3 },
    { id_carrito: 8, cantidad: 7, id_producto: 4 },
    
    { id_carrito: 9, cantidad: 4, id_producto: 5 },
    { id_carrito: 9, cantidad: 1, id_producto: 6 },
    { id_carrito: 9, cantidad: 3, id_producto: 7 },
    
    { id_carrito: 10, cantidad: 5, id_producto: 8 },
    { id_carrito: 10, cantidad: 9, id_producto: 9 },
    { id_carrito: 10, cantidad: 2, id_producto: 10 },
    
    { id_carrito: 11, cantidad: 7, id_producto: 1 },
    { id_carrito: 11, cantidad: 3, id_producto: 2 },
    { id_carrito: 11, cantidad: 8, id_producto: 3 },
    
    { id_carrito: 12, cantidad: 2, id_producto: 4 },
    { id_carrito: 12, cantidad: 5, id_producto: 5 },
    { id_carrito: 12, cantidad: 1, id_producto: 6 },
    
    { id_carrito: 13, cantidad: 9, id_producto: 7 },
    { id_carrito: 13, cantidad: 3, id_producto: 8 },
    { id_carrito: 13, cantidad: 2, id_producto: 9 },
    
    { id_carrito: 14, cantidad: 6, id_producto: 10 },
    { id_carrito: 14, cantidad: 5, id_producto: 1 },
    { id_carrito: 14, cantidad: 4, id_producto: 2 },
    
    { id_carrito: 15, cantidad: 8, id_producto: 3 },
    { id_carrito: 15, cantidad: 2, id_producto: 4 },
    { id_carrito: 15, cantidad: 9, id_producto: 5 },
    
    { id_carrito: 16, cantidad: 4, id_producto: 6 },
    { id_carrito: 16, cantidad: 7, id_producto: 7 },
    { id_carrito: 16, cantidad: 3, id_producto: 8 },
    
    { id_carrito: 17, cantidad: 1, id_producto: 9 },
    { id_carrito: 17, cantidad: 5, id_producto: 10 },
    { id_carrito: 17, cantidad: 2, id_producto: 1 },
    
    { id_carrito: 18, cantidad: 9, id_producto: 2 },
    { id_carrito: 18, cantidad: 6, id_producto: 3 },
    { id_carrito: 18, cantidad: 7, id_producto: 4 },
    
    { id_carrito: 19, cantidad: 4, id_producto: 5 },
    { id_carrito: 19, cantidad: 1, id_producto: 6 },
    { id_carrito: 19, cantidad: 5, id_producto: 7 },
    
    { id_carrito: 20, cantidad: 3, id_producto: 8 },
    { id_carrito: 20, cantidad: 8, id_producto: 9 },
    { id_carrito: 20, cantidad: 2, id_producto: 10 },
    
    { id_carrito: 21, cantidad: 5, id_producto: 1 },
    { id_carrito: 21, cantidad: 7, id_producto: 2 },
    { id_carrito: 21, cantidad: 9, id_producto: 3 },
    
    { id_carrito: 22, cantidad: 4, id_producto: 4 },
    { id_carrito: 22, cantidad: 6, id_producto: 5 },
    { id_carrito: 22, cantidad: 3, id_producto: 6 },
    
    { id_carrito: 23, cantidad: 8, id_producto: 7 },
    { id_carrito: 23, cantidad: 2, id_producto: 8 },
    { id_carrito: 23, cantidad: 9, id_producto: 9 },
    
    { id_carrito: 24, cantidad: 6, id_producto: 10 },
    { id_carrito: 24, cantidad: 3, id_producto: 1 },
    { id_carrito: 24, cantidad: 7, id_producto: 2 },
    
    { id_carrito: 25, cantidad: 1, id_producto: 3 },
    { id_carrito: 25, cantidad: 5, id_producto: 4 },
    { id_carrito: 25, cantidad: 6, id_producto: 5 },
    
    { id_carrito: 26, cantidad: 4, id_producto: 6 },
    { id_carrito: 26, cantidad: 2, id_producto: 7 },
    { id_carrito: 26, cantidad: 9, id_producto: 8 },
    
    { id_carrito: 27, cantidad: 8, id_producto: 9 },
    { id_carrito: 27, cantidad: 5, id_producto: 10 },
    { id_carrito: 27, cantidad: 3, id_producto: 1 },
    
    { id_carrito: 28, cantidad: 7, id_producto: 2 },
    { id_carrito: 28, cantidad: 6, id_producto: 3 },
    { id_carrito: 28, cantidad: 4, id_producto: 4 },
    
    { id_carrito: 29, cantidad: 1, id_producto: 5 },
    { id_carrito: 29, cantidad: 2, id_producto: 6 },
    { id_carrito: 29, cantidad: 9, id_producto: 7 },
    
    { id_carrito: 30, cantidad: 5, id_producto: 8 },
    { id_carrito: 30, cantidad: 4, id_producto: 9 },
    { id_carrito: 30, cantidad: 3, id_producto: 10 }
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