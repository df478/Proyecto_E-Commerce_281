const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class EntregaService {
  constructor() {}

  async create(data) {
    const nuevoEntrega = await models.Entrega.create(data); // Crear el registro en la base de datos
    return nuevoEntrega;
  }

  async find() {
    const entregas = await models.Entrega.findAll(); // Obtener todos los registros
    return entregas;
  }

  async findOne(id_entrega) {
    const entrega = await models.Entrega.findByPk(id_entrega,{
      include:[
        {
          model:models.Cliente,
          as: "cliente"
        },
        {
          model:models.Pedido,
          as: "pedido"
        ,
        include:[{
          model:models.Carrito,
          as: "carrito",
          include:[{
            model:models.Aniade,
            as:"aniade",
            include: [{
              model:models.Producto,
              as: "producto",
              include:[{
                model: models.Artesano,
                as: "artesano",
                include:[{
                  model: models.Comunidad,
                  as:"comunidad",
                  include:[{
                    model:models.Municipio,
                    as:"municipio",
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }); // Buscar un registro específico por id_entrega
    if (!entrega) {
      throw boom.notFound("Registro de entrega no encontrado"); // Ajuste en el mensaje de error
    }
    return entrega;
  }
  
  async update(id_entrega, cambios) {
    // Obtener el registro existente de la entrega
    const entrega = await this.findOne(id_entrega);
    if (!entrega) {
        throw new Error('La entrega no existe.');
    }

    // Obtener el pedido relacionado con la entrega
    const pedido = await models.Pedido.findOne({
        where: { id_pedido: entrega.id_pedido }, // Asumiendo que `id_pedido` está en el modelo de entrega
    });
    if (!pedido) {
        throw new Error('El pedido relacionado no existe.');
    }

    // Verificar si el estado de la entrega está cambiando a 'Entregado'
    if (cambios.estado_entrega && cambios.estado_entrega === 'Entregado' && entrega.estado_entrega !== 'Entregado') {
        // Buscar al cliente asociado con esta entrega
        const cliente = await models.Cliente.findOne({
            where: { id_usuario: entrega.id_cliente },
        });

        // Si el cliente existe, actualizar su nro_compras
        if (cliente) {
            await cliente.update({
                nro_compras: cliente.nro_compras + 1,
            });
            console.log("nro_compras del cliente actualizado a:", cliente.nro_compras);
        }

    }

    await pedido.update({
      estado_pedido: 'Entregado',
      });
      console.log('Estado del pedido actualizado a "Entregado".');
    // Actualizar el registro de la entrega con los cambios
    const updatedEntrega = await entrega.update(cambios);

    return updatedEntrega;
}

  
  async delete(id_entrega) {
    const entrega = await this.findOne(id_entrega); // Obtener el registro específico

    // Eliminar el registro
    await entrega.destroy();
    return { id_entrega };
  }
}

module.exports = EntregaService;
