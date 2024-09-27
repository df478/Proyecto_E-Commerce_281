const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
class MunicipioService {
  constructor() {

  }

  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoMunicipio = await models.Municipio.create(nuevoData);
    return nuevoMunicipio;
  }

  async find() {
    const rta = await models.Municipio.findAll();

    return rta;
  }

  async findOne(id_municipio) {
    
    const municipio = await models.Municipio.findByPk(id_municipio);
    if (!municipio) {
      throw boom.notFound("Municipio no encontrado");
    }
    return municipio;
  }

  async update(id_municipio, cambios) {
    
    console.log(id_municipio, cambios);
    
    const municipio = await this.findOne(id_municipio);
    const rta = await municipio.update(cambios);
    return rta;
  }

  async delete(id_municipio) {
    const municipio = await this.findOne(id_municipio);
    await municipio.destroy();
    return { id_municipio };
  }
}

module.exports = MunicipioService;