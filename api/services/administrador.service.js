const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");

class AdministradorService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password_usuario, 10);
    const nuevoData = {
      ...data,
      password_usuario: hash,
    };
    const nuevoAdministrador = await models.Administrador.create(nuevoData);
    return nuevoAdministrador;
  }

  async find() {
    const rta = await models.Administrador.findAll();
    return rta;
  }

  async findOne(id_usuario) {
    const administrador = await models.Administrador.findByPk(id_usuario);
    if (!administrador) {
      throw boom.notFound("Administrador no encontrado");
    }
    return administrador;
  }

  async findByEmail(email_usuario) {
    const administrador = await models.Administrador.findOne({
      where: { email_usuario },
    });
    if (!administrador) {
      throw boom.notFound("Administrador no encontrado");
    }
    return administrador;
  }

  async update(id_usuario, cambios) {
    console.log(id_usuario, cambios);
    
    const administrador = await this.findOne(id_usuario);
    const rta = await administrador.update(cambios);
    return rta;
  }

  async delete(id_usuario) {
    const administrador = await this.findOne(id_usuario);
    await administrador.destroy();
    return { id_usuario };
  }
}

module.exports = AdministradorService;
