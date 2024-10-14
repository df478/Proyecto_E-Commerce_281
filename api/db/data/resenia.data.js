const { faker } = require("@faker-js/faker");

async function generateResenias() {
  let resenias = [];

  const reseniasData = [
    {
      id_producto: 1,
      id_usuario: 1,
      descripcion_resenia: "Excelente calidad, muy recomendable.",
      fecha_resenia: "2023-09-01",
    },
    {
      id_producto: 1,
      id_usuario: 2,
      descripcion_resenia: "Un producto bueno, aunque podría mejorar.",
      fecha_resenia: "2023-09-02",
    },
    {
      id_producto: 1,
      id_usuario: 9,
      descripcion_resenia: "Llegó tarde, pero la calidad es buena.",
      fecha_resenia: "2023-09-09",
    },
    {
      id_producto: 2,
      id_usuario: 3,
      descripcion_resenia: "Muy satisfecho con mi compra.",
      fecha_resenia: "2023-09-03",
    },
    {
      id_producto: 2,
      id_usuario: 6,
      descripcion_resenia: "Interesante, pero falta más detalle.",
      fecha_resenia: "2023-09-06",
    },
    {
      id_producto: 2,
      id_usuario: 10,
      descripcion_resenia: "No me gustó mucho, esperaba más.",
      fecha_resenia: "2023-09-10",
    },
    {
      id_producto: 3,
      id_usuario: 4,
      descripcion_resenia: "No cumplió con mis expectativas.",
      fecha_resenia: "2023-09-04",
    },
    {
      id_producto: 3,
      id_usuario: 5,
      descripcion_resenia: "La calidad es impresionante, me encantó.",
      fecha_resenia: "2023-09-05",
    },
    {
      id_producto: 3,
      id_usuario: 11,
      descripcion_resenia: "No vale el precio, esperaba mucho más.",
      fecha_resenia: "2023-09-11",
    },
    {
      id_producto: 4,
      id_usuario: 7,
      descripcion_resenia: "Simplemente maravilloso, un gran trabajo.",
      fecha_resenia: "2023-09-07",
    },
    {
      id_producto: 4,
      id_usuario: 12,
      descripcion_resenia: "Lo recomiendo mucho, superó mis expectativas.",
      fecha_resenia: "2023-09-12",
    },
    {
      id_producto: 4,
      id_usuario: 13,
      descripcion_resenia: "Bien, pero podría mejorar en ciertos aspectos.",
      fecha_resenia: "2023-09-13",
    },
    {
      id_producto: 5,
      id_usuario: 8,
      descripcion_resenia: "Muy bonito, lo usaré con frecuencia.",
      fecha_resenia: "2023-09-08",
    },
    {
      id_producto: 5,
      id_usuario: 14,
      descripcion_resenia: "Me ha sido muy útil, lo recomiendo.",
      fecha_resenia: "2023-09-14",
    },
    {
      id_producto: 5,
      id_usuario: 15,
      descripcion_resenia: "Cumple su función, pero hay mejores opciones.",
      fecha_resenia: "2023-09-15",
    },
    {
      id_producto: 6,
      id_usuario: 16,
      descripcion_resenia: "Excelente inversión, lo volvería a comprar.",
      fecha_resenia: "2023-09-16",
    },
    {
      id_producto: 6,
      id_usuario: 17,
      descripcion_resenia: "No me gustó tanto como esperaba, pero es aceptable.",
      fecha_resenia: "2023-09-17",
    },
    {
      id_producto: 6,
      id_usuario: 18,
      descripcion_resenia: "El producto llegó dañado, mal servicio.",
      fecha_resenia: "2023-09-18",
    },
    {
      id_producto: 7,
      id_usuario: 19,
      descripcion_resenia: "Sencillamente perfecto, justo lo que buscaba.",
      fecha_resenia: "2023-09-19",
    },
    {
      id_producto: 7,
      id_usuario: 20,
      descripcion_resenia: "Lo volvería a comprar, muy satisfecho.",
      fecha_resenia: "2023-09-20",
    },
    {
      id_producto: 7,
      id_usuario: 21,
      descripcion_resenia: "Regular, cumple pero sin destacar.",
      fecha_resenia: "2023-09-21",
    },
    {
      id_producto: 8,
      id_usuario: 22,
      descripcion_resenia: "No era lo que esperaba, me arrepiento de comprarlo.",
      fecha_resenia: "2023-09-22",
    },
    {
      id_producto: 8,
      id_usuario: 23,
      descripcion_resenia: "Sorprendentemente bueno por el precio.",
      fecha_resenia: "2023-09-23",
    },
    {
      id_producto: 8,
      id_usuario: 24,
      descripcion_resenia: "Funciona como lo esperado, sin problemas.",
      fecha_resenia: "2023-09-24",
    },
    {
      id_producto: 9,
      id_usuario: 25,
      descripcion_resenia: "No lo recomiendo, es de baja calidad.",
      fecha_resenia: "2023-09-25",
    },
    {
      id_producto: 9,
      id_usuario: 26,
      descripcion_resenia: "Bastante útil para lo que necesitaba.",
      fecha_resenia: "2023-09-26",
    },
    {
      id_producto: 9,
      id_usuario: 27,
      descripcion_resenia: "Muy satisfecho con la compra, lo recomiendo.",
      fecha_resenia: "2023-09-27",
    },
    {
      id_producto: 10,
      id_usuario: 28,
      descripcion_resenia: "El envío fue rápido, pero el producto es promedio.",
      fecha_resenia: "2023-09-28",
    },
    {
      id_producto: 10,
      id_usuario: 29,
      descripcion_resenia: "Sorprendido por la calidad, lo recomiendo mucho.",
      fecha_resenia: "2023-09-29",
    },
    {
      id_producto: 10,
      id_usuario: 30,
      descripcion_resenia: "No lo volvería a comprar, muy decepcionante.",
      fecha_resenia: "2023-09-30",
    },
  ];

  for (const resenia of reseniasData) {
    resenias.push({
      id_producto: resenia.id_producto,
      id_usuario: resenia.id_usuario,
      descripcion_resenia: resenia.descripcion_resenia,
      fecha_resenia: resenia.fecha_resenia,
    });
  }

  return resenias;
}

// Función para generar y exportar los datos de reseñas
async function generarResenias() {
  const reseniaData = await generateResenias();
  return reseniaData;
}

// Exporta la función
module.exports = {
    generarResenias,
};
