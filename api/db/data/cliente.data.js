const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

let clientes = [];
const limite = 100;
async function generate(limit) {
  for (let index = 0; index < limite; index++) {
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
}
console.log(generate(limite));

