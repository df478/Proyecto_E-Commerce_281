const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");


async function generate() {
  let carritos = [];
  
  const carritosData = [
    {
        id_usuario:1
    },
    {
        id_usuario:2
    },
    {
        id_usuario:3
    },
    {
        id_usuario:4
    },
    {
        id_usuario:5
    },
    {
        id_usuario:6
    },
    {
        id_usuario:7
    },
    {
        id_usuario:8
    },
    {
        id_usuario:9
    },
    {
        id_usuario:10
    },
    {
        id_usuario:11
    },
    {
        id_usuario:12
    },
    {
        id_usuario:13
    },
    {
        id_usuario:14
    },
    {
        id_usuario:15
    },
    {
        id_usuario:16
    },
    {
        id_usuario:17
    },
    {
        id_usuario:18
    },
    {
        id_usuario:19
    },
    {
        id_usuario:20
    },
    {
        id_usuario:21
    },
    {
        id_usuario:22
    },
    {
        id_usuario:23
    },
    {
        id_usuario:24
    },
    {
        id_usuario:25
    },
    {
        id_usuario:26
    },
    {
        id_usuario:27
    },
    {
        id_usuario:28
    },
    {
        id_usuario:29
    },
    {
        id_usuario:30
    }
  ];

  for (const carrito of carritosData) {
    carritos.push({
      id_usuario: carrito.id_usuario
    });
  }
  return carritos;
}

// Function to generate and export the data
async function generarCarrito() {
  const carritoData = await generate();
  return carritoData;
}

// Export the function
module.exports = {
  generarCarrito,
};

