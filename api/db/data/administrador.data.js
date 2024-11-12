const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function generate() {
  let admins = [];
  
  const administradorData = [
    {
      nombre_usuario: "Miguel Limachi",
      email_usuario: "miguelLimachi@gmail.com",
      password_usuario: "*Miguel1*"
    },
    {
      nombre_usuario: "Juan Quispe",
      email_usuario: "juanQuispe@gmail.com",
      password_usuario: "*JuanQ1*"
    },
    {
      nombre_usuario: "Oscar Perez",
      email_usuario: "oscarPerez@gmail.com",
      password_usuario: "*OscarP1*"
    }
  ];

  for (const administrador of administradorData) {
    const hash = await bcrypt.hash(administrador.password_usuario, 10);
    admins.push({
      nombre_usuario: administrador.nombre_usuario,
      email_usuario: administrador.email_usuario,
      password_usuario: hash
    });
  }
  return admins
}

// Function to generate and export the data
async function generarAdministrador() {
  const administradorData = await generate();
  return administradorData;
}

// Export the function
module.exports = {
    generarAdministrador,
};