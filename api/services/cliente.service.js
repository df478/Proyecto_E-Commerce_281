const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

class ClienteService {
  constructor() {
    this.clientes = [];
    this.generate();
  }

  async generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      const hash =  await bcrypt.hash(faker.internet.password(), 10);

      this.clientes.push({
        id_usuario: index,
        nombre_usuario: faker.person.fullName(),
        email_usuario: faker.internet.email(),
        password_usuario: hash,
        tipo_usuario: faker.helpers.arrayElement(['cliente']),
        fecha_registro: faker.date.past(),
        nro_compras: parseInt(Math.random() * 100),
      });
    }
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);

    const nuevoCliente = {
      id_usuario: this.clientes.length,
      ...data,
      password_usuario: hash
    };
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  find() {
    return this.clientes;
  }

  findOne(id_usuario) {
    return this.clientes.find(item => item.id_usuario == parseInt(id_usuario));
  }

  findByEmail(email) {
    return this.clientes.find(item => item.email === email);
  }

  update(id_usuario, cambios) {
    const index = this.clientes.findIndex(item => item.id_usuario === parseInt(id_usuario));
    if (index === -1) {
      throw new Error('Cliente no encontrado');
    }
    this.clientes[index] = { ...this.clientes[index], ...cambios };
    return this.clientes[index];
  }

  delete(id_usuario) {
    const index = this.clientes.findIndex(item => item.id_usuario === parseInt(id_usuario));
    if (index === -1) {
      throw new Error('Cliente no encontrado');
    }
    this.clientes.splice(index, 1);
    return { id_usuario };
  }
}

module.exports = ClienteService;
