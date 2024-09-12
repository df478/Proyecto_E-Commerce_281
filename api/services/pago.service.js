const { faker } = require('@faker-js/faker');

class PagoService {
  constructor() {
    this.pagos = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.pagos.push({
        id_pago: index,
        id_pedido: parseInt(Math.random() * 500),
        id_artesano: parseInt(Math.random() * 500),
        id_cliente: parseInt(Math.random() * 500),
        id_delivery: parseInt(Math.random() * 500),
        fecha_pago: faker.date.past(),
      });
    }
  }

  create(data) {
    const nuevoPago = {
      id_pago: this.pagos.length, 
      ...data,
    };
    this.pagos.push(nuevoPago);
    return nuevoPago;
  }

  find() {
    return this.pagos;
  }

  findOne(id_pago) {
    return this.pagos.find(item => item.id_pago === id_pago);
  }

  update(id_pago, cambios) {
    const index = this.pagos.findIndex(item => item.id_pago === id_pago);
    if (index === -1) {
      throw new Error('Pago no encontrado');
    }
    this.pagos[index] = { ...this.pagos[index], ...cambios };
    return this.pagos[index];
  }

  delete(id_pago) {
    const index = this.pagos.findIndex(item => item.id_pago === id_pago);
    if (index === -1) {
      throw new Error('Pago no encontrado');
    }
    this.pagos.splice(index, 1);
    return { id_pago };
  }
}

module.exports = PagoService;
