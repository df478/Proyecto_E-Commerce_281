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
      stock_producto: 10,
      categoria_producto: "Decoración",
      peso_producto: 0.5, // Peso en kg
      
          largo_producto: 36,
          ancho_producto: 5,
          alto_producto: 10, // Ajusta según el tamaño real
      envio_gratuito: -1 // 1 para sí, 0 para no
  },
  {
      id_artesano: 2,
      id_promocion: null,
      nombre_producto: "Bandeja Tallada con alas Misionales",
      precio_producto: 100,
      descripcion_producto: "Elegante bandeja tallada a mano en madera de cedro, una obra de arte única creada por artesanos de San Miguel de Velasco.",
      stock_producto: 20,
      categoria_producto: "Muebles",
      peso_producto: 1.2, // Peso en kg
      
          largo_producto: 40,
          ancho_producto: 30,
          alto_producto: 5, // Ajusta según el tamaño real
      envio_gratuito: -1 // 1 para sí, 0 para no
  },
  {
      id_artesano: 3,
      id_promocion: null,
      nombre_producto: "Arbol toborochi con base, tamaño mediano",
      precio_producto: 160,
      descripcion_producto: "Toborochi con base, tallado en madera cedro y pintado a mano.",
      stock_producto: 5,
      categoria_producto: "Decoración",
      peso_producto: 2.5, // Peso en kg
      
          largo_producto: 25,
          ancho_producto: 25,
          alto_producto: 70, // Ajusta según el tamaño real
      envio_gratuito: -1 // 1 para sí, 0 para no
  },
  {
      id_artesano: 4,
      id_promocion: null,
      nombre_producto: "Baul Pintado Pequeño",
      precio_producto: 85,
      descripcion_producto: "Baul Pintado en madera y recuerda que todas las creaciones de Artecampo son piezas únicas debido a la naturaleza de nuestro proceso de producción.",
      stock_producto: 15,
      categoria_producto: "Muebles",
      peso_producto: 1.8, // Peso en kg
      
          largo_producto: 30,
          ancho_producto: 20,
          alto_producto: 15, // Ajusta según el tamaño real
      envio_gratuito: -1 // 1 para sí, 0 para no
  },
  {
      id_artesano: 5,
      id_promocion: null,
      nombre_producto: "Muñeca de chala Crucenia",
      precio_producto: 35,
      descripcion_producto: "Muñeca realizada en chala de maíz teñida.",
      stock_producto: 10,
      categoria_producto: "Juguetes",
      peso_producto: 0.3, // Peso en kg
      
          largo_producto: 20,
          ancho_producto: 15,
          alto_producto: 25, // Ajusta según el tamaño real
      envio_gratuito: -1 // 1 para sí, 0 para no
  },{
        id_artesano: 6,
        id_promocion: null,
        nombre_producto: "Adorno Tallado 3 Modelos De Pajaritos.",
        precio_producto: 155,
        descripcion_producto: "Adorno tallado en madera cedro y pintado a mano.",
        stock_producto: 20,
        categoria_producto: "Decoración",
        peso_producto: 0.4, // Peso en kg
        
            largo_producto: 15,
            ancho_producto: 10,
            alto_producto: 20, // Ajusta según el tamaño real
        envio_gratuito: -1 // 1 para sí, 0 para no
    },
    {
        id_artesano: 7,
        id_promocion: null,
        nombre_producto: "Angel Tallado Redondo Pequeño",
        precio_producto: 50,
        descripcion_producto: "Adorno tallado en madera cedro y pintado a mano.",
        stock_producto: 11,
        categoria_producto: "Decoración",
        peso_producto: 0.6, // Peso en kg
        
            largo_producto: 10,
            ancho_producto: 10,
            alto_producto: 15, // Ajusta según el tamaño real
        envio_gratuito: -1 // 1 para sí, 0 para no
    },
    {
        id_artesano: 8,
        id_promocion: null,
        nombre_producto: "Azucarera Cerámica Tentayape mediano",
        precio_producto: 36,
        descripcion_producto: "Piezas de cerámica realizadas con la técnica prehispánica de los rollos de arcilla y decoradas con pigmentos naturales.",
        stock_producto: 12,
        categoria_producto: "Cerámica",
        peso_producto: 0.8, // Peso en kg
        
            largo_producto: 12,
            ancho_producto: 12,
            alto_producto: 10 ,// Ajusta según el tamaño real
        envio_gratuito: -1 // 1 para sí, 0 para no
    },
    {
        id_artesano: 9,
        id_promocion: null,
        nombre_producto: "Bombonera de cerámica",
        precio_producto: 100,
        descripcion_producto: "Bombonera de cerámica pintada a mano.",
        stock_producto: 14,
        categoria_producto: "Cerámica",
        peso_producto: 1.0, // Peso en kg
        
            largo_producto: 15,
            ancho_producto: 15,
            alto_producto: 10 ,// Ajusta según el tamaño real
        envio_gratuito: -1 // 1 para sí, 0 para no
    },
    {
        id_artesano: 10,
        id_promocion: null,
        nombre_producto: "Bombonera Jipijapa tapa de madera Mediana",
        precio_producto: 95,
        descripcion_producto: "Bombonera Tejido en palma Jipijapa tapa de madera.",
        stock_producto: 11,
        categoria_producto: "Artesanía",
        peso_producto: 1.5, // Peso en kg
        
            largo_producto: 20,
            ancho_producto: 20,
            alto_producto: 15, // Ajusta según el tamaño real
        envio_gratuito: -1 // 1 para sí, 0 para no
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
      categoria_producto: producto.categoria_producto,
      peso_producto: producto.peso_producto,
      largo_producto: producto.largo_producto,
      ancho_producto: producto.ancho_producto,
      alto_producto: producto.alto_producto,
      envio_gratuito: producto.envio_gratuito
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