const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
class PedidoService {
  constructor() {

  }
  async create(data) {
    console.log(data)
    try {
        // Buscando el carrito asociado
        const carrito = await models.Carrito.findOne({
            where: { id_carrito: data.id_carrito }
        });
        console.log(carrito)
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
            id_cliente: carrito.id_usuario,
            estado_entrega: "En preparación" 
        });

        const nuevoCliente = await this.agregaCarrito(carrito.id_usuario);
        return {
            nuevoPedido,
            nuevaEntrega,
            nuevoCliente
        };
    } catch (error) {
        console.error("Error al crear el pedido:", error);
        throw new Error("Error al crear el pedido: " + error.message);
    }
}

async agregaCarrito(id_usuario) {
  const nuevoData = {
    id_usuario: id_usuario
  };
  const carritoExistente = await models.Carrito.findOne({
    where: { id_usuario: id_usuario }
  }); 
  if (carritoExistente) {
    await carritoExistente.update({ id_usuario: null });
  }
  const nuevoCarrito = await models.Carrito.create(nuevoData);
  
  return nuevoCarrito;
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
//*********************  contacto de delivery ****************************
async ObtenerProductoPedido(id_pedido) {
  const contacto = await models.Pedido.findByPk(id_pedido,
    {
      include: [{
        model: models.Carrito,  
        as: 'carrito',
        include:[{
          model: models.Aniade,
          as:"aniade",
          include:[{
            model:models.Producto,
            as:"producto"
          }]
        }]
      }]    
    });
  if (!contacto) {
    throw boom.notFound("contacto no encontrado");
  }
  return contacto;
}
//************************************************************************************
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