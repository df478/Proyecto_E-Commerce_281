const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const limite = 100;

async function generate(limit) {
  let notificaciones = [];

  return notificaciones;
}

// Function to generate and export the data
async function generarNotificacion() {
  const notificacionData = await generate(limite);
  return notificacionData;
}

// Export the function
module.exports = {
  generarNotificacion,
};