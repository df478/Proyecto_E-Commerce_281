const { faker, ar } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function generate() {
  let artesanos = [];

  const artesanosData = [
    {
      nombre_usuario: "Miguel Velasco",
      email_usuario: "miguelVelasco@gmail.com",
      password_usuario: "*Miguel1*",
      tipo_usuario: "artesano",
      especialidad: "tallado de madera",
      calificacion: 10,
      celular:74075124,
      id_comunidad: 2
    },
    {
      nombre_usuario: "Lucas Pato",
      email_usuario: "lucasPato@gmail.com",
      password_usuario: "*LucasP1*",
      tipo_usuario: "artesano",
      especialidad: "alfarero",
      calificacion: 0,
      celular:67541587,
      id_comunidad: 2
    },
    {
      nombre_usuario: "Ana Torres",
      email_usuario: "anaTorres@gmail.com",
      password_usuario: "*AnaT1*",
      tipo_usuario: "artesano",
      especialidad: "tejido de canasta",
      calificacion: 9,
      celular:78945615,
      id_comunidad: 1
    },
    {
      nombre_usuario: "Juan Perez",
      email_usuario: "juanP@gmail.com",
      password_usuario: "*JuanP2*",
      tipo_usuario: "artesano",
      especialidad: "cerámica",
      calificacion: 8,
      celular:68745892,
      id_comunidad: 3
    },
    {
      nombre_usuario: "Elena Rojas",
      email_usuario: "elenaR@gmail.com",
      password_usuario: "*ElenaR3*",
      tipo_usuario: "artesano",
      especialidad: "joyería",
      calificacion: 7,
      celular:78246103,
      id_comunidad: 1
    },
    {
      nombre_usuario: "Jose Mendoza",
      email_usuario: "joseM@gmail.com",
      password_usuario: "*JoseM4*",
      tipo_usuario: "artesano",
      especialidad: "forja",
      calificacion: 6,
      celular:78452874,
      id_comunidad: 2
    },
    {
      nombre_usuario: "Laura Sanchez",
      email_usuario: "lauraS@gmail.com",
      password_usuario: "*LauraS5*",
      tipo_usuario: "artesano",
      especialidad: "pintura",
      calificacion: 10,
      celular:78459815,
      id_comunidad: 3
    },
    {
      nombre_usuario: "Carlos Lopez",
      email_usuario: "carlosL@gmail.com",
      password_usuario: "*CarlosL6*",
      tipo_usuario: "artesano",
      especialidad: "marquetería",
      calificacion: 5,
      celular:78477562,
      id_comunidad: 2
    },
    {
      nombre_usuario: "Teresa Jimenez",
      email_usuario: "teresaJ@gmail.com",
      password_usuario: "*TeresaJ7*",
      tipo_usuario: "artesano",
      especialidad: "encuadernación",
      calificacion: 9,
      celular:78495612,
      id_comunidad: 1
    },
    {
      nombre_usuario: "Roberto Garcia",
      email_usuario: "robertoG@gmail.com",
      password_usuario: "*RobertoG8*",
      tipo_usuario: "artesano",
      especialidad: "vidrio soplado",
      calificacion: 8,
      celular:68745178,
      id_comunidad: 3
    }
  ];

  for (const artesano of artesanosData) {
    const hash = await bcrypt.hash(artesano.password_usuario, 10);
    artesanos.push({
      nombre_usuario: artesano.nombre_usuario,
      email_usuario: artesano.email_usuario,
      password_usuario: hash,
      tipo_usuario: artesano.tipo_usuario,
      especialidad: artesano.especialidad,
      calificacion: artesano.calificacion,
      celular: artesano.celular,
      id_comunidad: artesano.id_comunidad
    });
  }
  return artesanos
}

// Function to generate and export the data
async function generarArtesano() {
  const artesanoData = await generate();
  return artesanoData;
}

// Export the function
module.exports = {
    generarArtesano,
};