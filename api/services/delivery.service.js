const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");

class DeliveryService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password_usuario, 10);
    const nuevoData = {
      ...data,
      password_usuario: hash,
    };
    const nuevoDelivery = await models.Delivery.create(nuevoData);
    return nuevoDelivery;
  }

  async find() {
    const rta = await models.Delivery.findAll();
    return rta;
  }

  async findOne(id_usuario) {
    const delivery = await models.Delivery.findByPk(id_usuario);
    if (!delivery) {
      throw boom.notFound("Delivery no encontrado");
    }
    return delivery;
  }

  async findByEmail(email_usuario) {
    const delivery = await models.Delivery.findOne({
      where: { email_usuario },
    });
    if (!delivery) {
      throw boom.notFound("Delivery no encontrado");
    }
    return delivery;
  }

  async update(id_usuario, cambios) {
    console.log(id_usuario, cambios);
    
    const delivery = await this.findOne(id_usuario);
    const rta = await delivery.update(cambios);
    return rta;
  }

  async delete(id_usuario) {
    const delivery = await this.findOne(id_usuario);
    await delivery.destroy();
    return { id_usuario };
  }
}

module.exports = DeliveryService;
