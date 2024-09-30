const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
class DepartamentoService {
  constructor() {}

  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoDepartamento = await models.Departamento.create(nuevoData);
    return nuevoDepartamento;
  }

  async find() {
    const rta = await models.Departamento.findAll();

    return rta;
  }

  async findOne(id_departamento) {
    
    const departamento = await models.Departamento.findByPk(id_departamento);
    if (!departamento) {
      throw boom.notFound("Departamento no encontrado");
    }
    return departamento;
  }

  async update(id_departamento, cambios) {
    
    console.log(id_departamento, cambios);
    
    const departamento = await this.findOne(id_departamento);
    const rta = await departamento.update(cambios);
    return rta;
  }

  async delete(id_departamento) {
    const departamento = await this.findOne(id_departamento);
    await departamento.destroy();
    return { id_departamento };
  }
}

module.exports = DepartamentoService;