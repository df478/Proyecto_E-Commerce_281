const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");
class PromocionService {
  constructor() {
  }

  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoPromocion = await models.Promocion.create(nuevoData);
    return nuevoPromocion;
  }

  async find() {
    const rta = await models.Promocion.findAll();

    return rta;
  }

  async findOne(id_promocion) {
    
    const promocion = await models.Promocion.findByPk(id_promocion);
    if (!promocion) {
      throw boom.notFound("Promocion no encontrado");
    }
    return promocion;
  }

  async update(id_promocion, cambios) {
    
    console.log(id_promocion, cambios);
    
    const promocion = await this.findOne(id_promocion);
    const rta = await promocion.update(cambios);
    return rta;
  }

  async delete(id_promocion) {
    const promocion = await this.findOne(id_promocion);
    await promocion.destroy();
    return { id_promocion };
  }
}

module.exports = PromocionService;