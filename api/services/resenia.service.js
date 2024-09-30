const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
class ReseniaService {
  constructor() {}

  async create(data) {
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
    
    console.log(id_resenia, cambios);
    
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