const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");


async function generate() {
  let departamentos = [];

  const departamentoData = [
    { nombre_departamento: "La Paz" },
    { nombre_departamento: "Cochabamba" },
    { nombre_departamento: "Santa Cruz" },
    { nombre_departamento: "Tarija" },
    { nombre_departamento: "Potosí" },
    { nombre_departamento: "Oruro" },
    { nombre_departamento: "Beni" },
    { nombre_departamento: "Pando" },
    { nombre_departamento: "Chuquisaca" }
  ];

  // Agregar los datos de departamento a la lista de departamentos
  for (const departamento of departamentoData) {
    departamentos.push({
      nombre_departamento: departamento.nombre_departamento
    });
  }

  return departamentos;
}


// Function to generate and export the data
async function generarDepartamento() {
  const departamentoData = await generate();
  return departamentoData;
}

// Export the function
module.exports = {
  generarDepartamento,
};