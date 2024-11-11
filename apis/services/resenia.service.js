const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class ReseniaService {
  constructor() {}

  async create(data) {
    const { calificacion_resenia } = data;

    if (calificacion_resenia < 1 || calificacion_resenia > 5) {
      throw boom.badRequest("La calificación debe estar entre 1 y 5.");
    }

    const nuevoData = {
      ...data,
    };
    const nuevoResenia = await models.Resenia.create(nuevoData);
    return nuevoResenia;
  }

  async find() {
    const rta = await models.Resenia.findAll();
    return rta;
  }

  async findOne(id_resenia) {
    const resenia = await models.Resenia.findByPk(id_resenia);
    if (!resenia) {
      throw boom.notFound("Resenia no encontrado");
    }
    return resenia;
  }

  async update(id_resenia, cambios) {
    const { calificacion_resenia } = cambios;

    // Validar que la calificación esté en el rango permitido
    if (calificacion_resenia !== undefined && (calificacion_resenia < 1 || calificacion_resenia > 5)) {
      throw boom.badRequest("La calificación debe estar entre 1 y 5.");
    }

    const resenia = await this.findOne(id_resenia);
    const rta = await resenia.update(cambios);
    return rta;
  }

  async delete(id_resenia) {
    const resenia = await this.findOne(id_resenia);
    await resenia.destroy();
    return { id_resenia };
  }
}

module.exports = ReseniaService;
