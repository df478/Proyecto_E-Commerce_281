const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
class ProvinciaService {
  constructor() {}

  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoProvincia = await models.Provincia.create(nuevoData);
    return nuevoProvincia;
  }

  async find() {
    const rta = await models.Provincia.findAll();

    return rta;
  }

  async findOne(id_provincia) {
    
    const provincia = await models.Provincia.findByPk(id_provincia);
    if (!provincia) {
      throw boom.notFound("Provincia no encontrado");
    }
    return provincia;
  }

  async update(id_provincia, cambios) {
    
    console.log(id_provincia, cambios);
    
    const provincia = await this.findOne(id_provincia);
    const rta = await provincia.update(cambios);
    return rta;
  }

  async delete(id_provincia) {
    const provincia = await this.findOne(id_provincia);
    await provincia.destroy();
    return { id_provincia };
  }
}

module.exports = ProvinciaService;