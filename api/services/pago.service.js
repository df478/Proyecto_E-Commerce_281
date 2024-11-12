const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
class PagoService {
  constructor() {

  }

  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoPago = await models.Pago.create(nuevoData);
    return nuevoPago;
  }

  async find() {
    const rta = await models.Pago.findAll();

    return rta;
  }

  async findOne(id_pago) {
    
    const pago = await models.Pago.findByPk(id_pago);
    if (!pago) {
      throw boom.notFound("Pago no encontrado");
    }
    return pago;
  }

  async update(id_pago, cambios) {
    
    console.log(id_pago, cambios);
    
    const pago = await this.findOne(id_pago);
    const rta = await pago.update(cambios);
    return rta;
  }

  async delete(id_pago) {
    const pago = await this.findOne(id_pago);
    await pago.destroy();
    return { id_pago };
  }
}

module.exports = PagoService;