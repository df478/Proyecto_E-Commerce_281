const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const limite = 100;

async function generate(limit) {
  let clientes = [];
  for (let index = 0; index < limit; index++) {
    const hash = await bcrypt.hash(faker.internet.password(), 10);
    
    clientes.push({
      id_usuario: index,
      nombre_usuario: faker.person.fullName(),
      email_usuario: faker.internet.email(),
      password_usuario: hash,
      tipo_usuario: faker.helpers.arrayElement(["cliente"]),
      fecha_registro: faker.date.past(),
      nro_compras: parseInt(Math.random() * 100),
    });
  }
  return clientes;
}

// Function to generate and export the data
async function generateAndExport() {
  const clienteData = await generate(limite);
  return clienteData;
}

// Export the function
module.exports = {
  generateAndExport,
};

// Usage example (optional)
if (require.main === module) {
  (async () => {
    const clienteData = await generateAndExport();
    console.log(clienteData);
  })();
}
