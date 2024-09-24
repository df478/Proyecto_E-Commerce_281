const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class AniadeService {
  constructor() {}

  async create(data) {
    const nuevoAniade = await models.aniade.create(data); // Crear el registro en la base de datos
    return nuevoAniade;
  }

  async find() {
    const aniades = await models.aniade.findAll(); // Obtener todos los registros
    return aniades;
  }

  async findOne(id_aniade) {
    const aniades = await models.aniade.findOne({
      where: { id_aniade },
    }); // Buscar un registro específico por id_aniade
    if (!aniades) {
      throw boom.notFound("Registro de aniade no encontrado");
    }
    return aniades;
  }

  async update(id_aniade, cambios) {
    const aniade = await this.findOne(id_aniade); // Obtener el registro existente

    if (!aniade) {
      throw boom.notFound("Añadido no encontrado");
    }

    const updatedAniade = await aniade.update(cambios); // Actualizar el registro con los cambios
    return updatedAniade;
  }

  async delete(id_aniade) {
    const aniade = await this.findOne(id_aniade); // Obtener el registro específico

    if (!aniade) {
      throw boom.notFound("Añadido no encontrado");
    }

    await aniade.destroy(); // Eliminar el registro
    return { id_aniade };
  }
}

module.exports = AniadeService;