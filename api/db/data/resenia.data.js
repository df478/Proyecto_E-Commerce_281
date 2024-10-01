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
      id_producto: 2,
      id_usuario: 3,
      descripcion_resenia: "Muy satisfecho con mi compra.",
      fecha_resenia: "2023-09-03",
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
      id_producto: 2,
      id_usuario: 6,
      descripcion_resenia: "Interesante, pero falta más detalle.",
      fecha_resenia: "2023-09-06",
    },
    {
      id_producto: 4,
      id_usuario: 7,
      descripcion_resenia: "Simplemente maravilloso, un gran trabajo.",
      fecha_resenia: "2023-09-07",
    },
    {
      id_producto: 5,
      id_usuario: 8,
      descripcion_resenia: "Muy bonito, lo usaré con frecuencia.",
      fecha_resenia: "2023-09-08",
    },
    {
      id_producto: 1,
      id_usuario: 9,
      descripcion_resenia: "Llegó tarde, pero la calidad es buena.",
      fecha_resenia: "2023-09-09",
    },
    {
      id_producto: 2,
      id_usuario: 10,
      descripcion_resenia: "No me gustó mucho, esperaba más.",
      fecha_resenia: "2023-09-10",
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
