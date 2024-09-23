const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class SupervisadoService {
  constructor() {}

  async create(data) {
    const nuevoSupervisado = await models.supervisado.create(data); // Crear el registro en la base de datos
    return nuevoSupervisado;
  }

  async find() {
    const supervisados = await models.supervisado.findAll(); // Obtener todos los registros
    return supervisados;
  }

  async findOne(id_supervisado) {
    const supervisado = await models.supervisado.findOne({
      where: { id_supervisado },
    }); // Buscar un registro específico por id_supervisado
    if (!supervisado) {
      throw boom.notFound("Registro de supervisado no encontrado");
    }
    return supervisado;
  }

  async update(id_supervisado, cambios) {
    const supervisado = await this.findOne(id_supervisado); // Obtener el registro existente

    // Actualizar el registro con los cambios
    const updatedSupervisado = await supervisado.update(cambios); 
    return updatedSupervisado;
  }

  async delete(id_supervisado) {
    const supervisado = await this.findOne(id_supervisado); // Obtener el registro específico

    // Eliminar el registro
    await supervisado.destroy();
    return { id_supervisado };
  }
}

module.exports = SupervisadoService;
