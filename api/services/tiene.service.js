const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class TieneService {
  constructor() {}

  async create(data) {
    const nuevoTiene = await models.tiene.create(data); // Crear el registro en la base de datos
    return nuevoTiene;
  }

  async find() {
    const tienes = await models.tiene.findAll(); // Obtener todos los registros
    return tienes;
  }

  async findOne(id_tiene) {
    const tiene = await models.tiene.findOne({
      where: { id_tiene },
    }); // Buscar un registro específico por id_tiene
    if (!tiene) {
      throw boom.notFound("Registro de pedido-tiene no encontrado");
    }
    return tiene;
  }

  async update(id_tiene, cambios) {
    const tiene = await this.findOne(id_tiene); // Obtener el registro existente

    // Actualizar el registro con los cambios
    const updatedTiene = await tiene.update(cambios);
    return updatedTiene;
  }

  async delete(id_tiene) {
    const tiene = await this.findOne(id_tiene); // Obtener el registro específico

    // Eliminar el registro
    await tiene.destroy();
    return { id_tiene };
  }
}

module.exports = TieneService;
