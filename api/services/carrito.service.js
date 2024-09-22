const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");
class CarritoService {
  constructor() {

  }

  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoCarrito = await models.Carrito.create(nuevoData);
    return nuevoCarrito;
  }

  async find() {
    const rta = await models.Carrito.findAll();

    return rta;
  }

  async findOne(id_carrito) {
    
    const carrito = await models.Carrito.findByPk(id_carrito);
    if (!carrito) {
      throw boom.notFound("Carrito no encontrado");
    }
    return carrito;
  }

  async update(id_carrito, cambios) {
    
    console.log(id_carrito, cambios);
    
    const carrito = await this.findOne(id_carrito);
    const rta = await carrito.update(cambios);
    return rta;
  }

  async delete(id_carrito) {
    const carrito = await this.findOne(id_carrito);
    await carrito.destroy();
    return { id_carrito };
  }
}

module.exports = CarritoService;