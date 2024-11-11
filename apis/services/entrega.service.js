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
    const entrega = await this.findOne(id_entrega); // Obtener el registro existente

    // Actualizar el registro con los cambios
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
