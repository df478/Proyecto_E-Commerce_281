const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");
class NotificacionService {
  constructor() {

  }
  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoNotificacion = await models.Notificacion.create(nuevoData);
    return nuevoNotificacion;
  }

  async find() {
    const rta = await models.Notificacion.findAll();

    return rta;
  }

  async findOne(id_notificacion) {
    
    const notificacion = await models.Notificacion.findByPk(id_notificacion);
    if (!notificacion) {
      throw boom.notFound("Notificacion no encontrado");
    }
    return notificacion;
  }

  async update(id_notificacion, cambios) {
    
    console.log(id_notificacion, cambios);
    
    const notificacion = await this.findOne(id_notificacion);
    const rta = await notificacion.update(cambios);
    return rta;
  }

  async delete(id_notificacion) {
    const notificacion = await this.findOne(id_notificacion);
    await notificacion.destroy();
    return { id_notificacion };
  }
}

module.exports = NotificacionService;