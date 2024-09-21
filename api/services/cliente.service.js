const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");

class ClienteService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password_usuario, 10);
    const nuevoData = {
      ...data,
      password_usuario: hash,
    };
    const nuevoCliente = await models.Cliente.create(nuevoData);
    return nuevoCliente;
  }

  async find() {
    const rta = await models.Cliente.findAll();
    return rta;
  }

  async findOne(id_usuario) {
    const cliente = await models.Cliente.findByPk(id_usuario);
    if (!rta) {
      throw boom.notFound("Cliente no encontrado");
    }
    return cliente;
  }

  async findByEmail(email) {
    const cliente = await models.Cliente.findOne({
      where: { email },
    });
    if (!rta) {
      throw boom.notFound("Cliente no encontrado");
    }
    return cliente;
  }

  async update(id_usuario, cambios) {
    const cliente = await this.findOne(id_usuario);
    const rta = await cliente.update(cambios);
    return rta;
  }

  async delete(id_usuario) {
    const cliente = await this.findOne(id_usuario);
    await cliente.destroy();
    return { id_usuario };
  }
}

module.exports = ClienteService;
