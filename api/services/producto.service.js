const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");
class ProductoService {
  constructor() {

  }

  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoProducto = await models.Producto.create(nuevoData);
    return nuevoProducto;
  }

  async find() {
    const rta = await models.Producto.findAll();

    return rta;
  }

  async findOne(id_producto) {
    
    const producto = await models.Producto.findByPk(id_producto);
    if (!producto) {
      throw boom.notFound("Producto no encontrado");
    }
    return producto;
  }

  async update(id_producto, cambios) {
    
    console.log(id_producto, cambios);
    
    const producto = await this.findOne(id_producto);
    const rta = await producto.update(cambios);
    return rta;
  }

  async delete(id_producto) {
    const producto = await this.findOne(id_producto);
    await producto.destroy();
    return { id_producto };
  }
}

module.exports = ProductoService;