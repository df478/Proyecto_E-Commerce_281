const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
class PedidoService {
  constructor() {

  }
  async create(data) {
    try {
        // Buscando el carrito asociado
        const carrito = await models.Carrito.findOne({
            where: { id_carrito: data.id_carrito }
        });

        // Verificando si el carrito existe
        if (!carrito) {
            throw new Error("El carrito no existe");
        }

        // Verificando si ya existe un pedido activo para este carrito
        const pedidoExistente = await models.Pedido.findOne({
            where: {
                id_carrito: carrito.id_carrito
            }
        });

        if (pedidoExistente) {
            throw new Error("Ya existe un pedido activo para este carrito.");
        }

        // Creando el pedido
        const nuevoData = {
            id_carrito: carrito.id_carrito,
            fecha_pedido: data.fecha_pedido,
            estado_pedido: data.estado_pedido,
            monto_pago: data.monto_pago,
            tipo_de_pedido: data.tipo_de_pedido
        };

        const nuevoPedido = await models.Pedido.create(nuevoData);

        // Creando la entrega
        const nuevaEntrega = await models.Entrega.create({
            id_pedido: nuevoPedido.id_pedido,
            estado_entrega: "En preparación" // Cambia a un valor apropiado según tu lógica
        });

        return {
            nuevoPedido,
            nuevaEntrega,
        };
    } catch (error) {
        console.error("Error al crear el pedido:", error);
        throw new Error("Error al crear el pedido: " + error.message);
    }
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