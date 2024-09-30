const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function generate() {
let imagenes = [];
const imagenData = [
    {
        id_producto: 1,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2024/03/261002A.webp"
    },
    {
        id_producto: 2,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/320214A.webp"
    },
    {
        id_producto: 3,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2024/03/320113A.webp"
    },
    {
        id_producto: 4,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/180202A.webp"
    },
    {
        id_producto: 5,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/260409A.webp"
    },
    {
        id_producto: 6,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/140525A.webp"
    },
    {
        id_producto: 7,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/130106A.webp"
    },
    {
        id_producto: 8,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/160206A.webp"
    },
    {
        id_producto: 9,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2024/03/300218A.webp"
    },
    {
        id_producto: 10,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/200119A.webp"
    }
];


for (const imagen of imagenData) {
    imagenes.push({
        url_imagen: imagen.url_imagen,
        id_producto: imagen.id_producto
    });
  }

  return imagenes;
}

// Function to generate and export the data
async function generarImagen() {
  const imagenData = await generate();
  return imagenData;
}

// Export the function
module.exports = {
  generarImagen,
};