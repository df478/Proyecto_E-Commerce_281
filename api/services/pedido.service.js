const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
class PedidoService {
  constructor() {

  }
  async create(data) {
    console.log(data);
    try {
      // Buscando el carrito asociado
      const carrito = await models.Carrito.findOne({
        where: { id_carrito: data.id_carrito }
      });
      console.log(carrito);
      
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
        estado_entrega: "Pendiente"
      });
  
      // Procesando los productos del carrito y actualizando el stock
      for (const item of data.items) { // Aquí recibimos los items del carrito
        const producto = await models.Producto.findOne({
          where: { id_producto: item.id_producto }
        });
  
        if (producto) {
          if (producto.stock_producto >= item.cantidad) {
            // Reduciendo el stock del producto
            await producto.update({
              stock_producto: producto.stock_producto - item.cantidad
            });
          } else {
            throw new Error(`No hay suficiente stock para el producto ${producto.nombre}`);
          }
        } else {
          throw new Error(`Producto con ID ${item.id_producto} no encontrado`);
        }
      }
  
      // Crear la entrada en la tabla 'tiene' asociando el pedido con la notificación
      const tieneData = {
        id_pedido: nuevoPedido.id_pedido,   // Agarramos el ID del pedido recién creado
        id_notificacion: 9,                 // Asignamos el ID de notificación como 9 por defecto
        fecha_tiene: new Date()             // Fecha actual
      };
  
      const nuevaRelacion = await models.Tiene.create(tieneData);
  
      const nuevoCliente = await this.agregaCarrito(carrito.id_usuario);
      
      return {
        nuevoPedido,
        nuevaEntrega,
        nuevoCliente,
        nuevaRelacion // Devolvemos la relación creada en la tabla 'tiene'
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
    const rta = await models.Pedido.findAll(
      {
        include: [{
          model: models.Carrito,  
          as: 'carrito',
        },
      {
        model: models.Entrega,
        as: "entrega"
      }]    
      }
    );

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
        },
      ]
      },
    
      {
        model: models.Entrega,
        as: "entrega",
        include:[{
          model: models.Delivery,
          as:"delivery"
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

  // Buscar el pedido a actualizar
  const pedido = await this.findOne(id_pedido);

  console.log(cambios.estado_pedido)
  console.log(pedido.estado_pedido)
  // Si el estado del pedido está pasando a ser 'Entregado', actualizamos nro_compras del cliente
  if (cambios.estado_pedido && cambios.estado_pedido === 'Entregado' && pedido.estado_pedido !== 'Entregado') {
    // Buscar al cliente asociado al pedido
    const cliente = await models.Usuario.findOne({
      where: { id_usuario: pedido.id_usuario }
    });

    // Si el cliente existe, actualizamos su nro_compras
    if (cliente) {
      await cliente.update({
        nro_compras: cliente.nro_compras + 1
      });
      console.log("nro_compras del cliente actualizado a:", cliente.nro_compras + 1);
    }
  }

  // Actualizamos el pedido con los nuevos datos
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