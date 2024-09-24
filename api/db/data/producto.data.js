const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");


async function generate() {
  let productos = [];
  const productoData = [
    {
        id_artesano: 1,
        id_promocion: null,
        nombre_producto: "Canasta Palma Sunkha Mediano",
        precio_producto: 25,
        descripcion_producto: "Este quiboro es una pieza única tejida a mano por artesanas de Vallegrande, utilizando fibra natural de palma zunjka. Su diseño artesanal y su material natural lo convierten en un objeto decorativo y funcional. Con medidas de 36 cm x 5 cm, es perfecto para llevar pequeños objetos o como elemento decorativo.",
        url_producto: "https://artecampo.com.bo/wp-content/uploads/2024/03/261002A.webp",
        stock_producto: 10
    },
    {
        id_artesano: 2,
        id_promocion: null,
        nombre_producto: "Bandeja Tallada con alas Misionales",
        precio_producto: 100,
        descripcion_producto: "Elegante bandeja tallada a mano en madera de cedro, una obra de arte única creada por artesanos de San Miguel de Velasco.",
        url_producto: "https://artecampo.com.bo/wp-content/uploads/2023/12/320214A.webp",
        stock_producto: 20
    }
  ];

  for (const producto of productoData) {
    productos.push({
      id_artesano: producto.id_artesano,
      id_promocion: producto.id_promocion,
      nombre_producto: producto.nombre_producto,
      precio_producto: producto.precio_producto,
      descripcion_producto: producto.descripcion_producto,
      stock_producto: producto.stock_producto,
      url_producto:producto.url_producto
    });
  }

  return productos;
}

// Function to generate and export the data
async function generarProducto() {
  const productoData = await generate();
  return productoData;
}

// Export the function
module.exports = {
  generarProducto,
};