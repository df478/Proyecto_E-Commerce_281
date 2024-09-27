const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
class PedidoService {
  constructor() {

  }

  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoPedido = await models.Pedido.create(nuevoData);
    return nuevoPedido;
  }

  async find() {
    const rta = await models.Pedido.findAll();

    return rta;
  }

  async findOne(id_pedido) {
    
    const pedido = await models.Pedido.findByPk(id_pedido);
    if (!pedido) {
      throw boom.notFound("Pedido no encontrado");
    }
    return pedido;
  }

  async update(id_pedido, cambios) {
    
    console.log(id_pedido, cambios);
    
    const pedido = await this.findOne(id_pedido);
    const rta = await pedido.update(cambios);
    return rta;
  }

  async delete(id_pedido) {
    const pedido = await this.findOne(id_pedido);
    await pedido.destroy();
    return { id_pedido };
  }
}

module.exports = PedidoService;