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
    },
    {
      id_artesano: 3,
      id_promocion: null,
      nombre_producto: "Arbol toborochi con base, tamaño mediano",
      precio_producto: 160,
      descripcion_producto: "Toborochi con base, tallado en madera cedro y pintado a mano.",
      url_producto: "https://artecampo.com.bo/wp-content/uploads/2024/03/320113A.webp",
      stock_producto: 5
  },
  {
    id_artesano: 4,
    id_promocion: null,
    nombre_producto: "Baul Pintado Pequeño",
    precio_producto: 85,
    descripcion_producto: "Baul Pintado en madera y recuerda que todas las creaciones de Artecampo son piezas únicas debido a la naturaleza de nuestro proceso de producción.",
    url_producto: "https://artecampo.com.bo/wp-content/uploads/2023/12/180202A.webp",
    stock_producto: 15
  },
  {
  id_artesano: 5,
  id_promocion: null,
  nombre_producto: "Muñeca de chala Crucenia",
  precio_producto: 35,
  descripcion_producto: "Muñeca realizada en chala de maíz teñida.",
  url_producto: "https://artecampo.com.bo/wp-content/uploads/2023/12/260409A.webp",
  stock_producto: 10
  },
  {
  id_artesano: 6,
  id_promocion: null,
  nombre_producto: "Adorno Tallado 3 Modelos De Pajaritos.",
  precio_producto: 155,
  descripcion_producto: "Adorno tallado en madera cedro y pintado a mano.",
  url_producto: "https://artecampo.com.bo/wp-content/uploads/2023/12/140525A.webp",
  stock_producto: 20
  },
  {
  id_artesano: 7,
  id_promocion: null,
  nombre_producto: "Angel Tallado Redondo Pequeño",
  precio_producto: 50,
  descripcion_producto: "Adorno tallado en madera cedro y pintado a mano",
  url_producto: "https://artecampo.com.bo/wp-content/uploads/2023/12/130106A.webp",
  stock_producto: 11
  },
  {
  id_artesano: 8,
  id_promocion: null,
  nombre_producto: "Azucarera Cerámica Tentayape mediano",
  precio_producto: 36,
  descripcion_producto: "Piezas de cerámica realizadas con la técnica prehispánica de los rollos de arcilla y decoradas con pigmentos naturales.",
  url_producto: "https://artecampo.com.bo/wp-content/uploads/2023/12/160206A.webp",
  stock_producto: 12
  },
  {
  id_artesano: 9,
  id_promocion: null,
  nombre_producto: "Bombonera de cerámica",
  precio_producto: 100,
  descripcion_producto: "Bombonera de cerámica pintada a mano.",
  url_producto: "https://artecampo.com.bo/wp-content/uploads/2024/03/300218A.webp",
  stock_producto: 14
  },
  {
  id_artesano: 10,
  id_promocion: null,
  nombre_producto: "Bombonera Jipijapa tapa de madera Mediana",
  precio_producto: 95,
  descripcion_producto: "Bombonera Tejido en palma Jipijapa tapa de madera",
  url_producto: "https://artecampo.com.bo/wp-content/uploads/2023/12/200119A.webp",
  stock_producto: 11
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