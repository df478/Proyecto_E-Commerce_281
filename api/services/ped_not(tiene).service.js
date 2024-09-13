const { faker } = require('@faker-js/faker');

class PedNotService {
  constructor() {
    this.pedNot = [];
    this.generate();
  }

  generate() {
    const limite = 1000;
    for (let index = 0; index < limite; index++) {
      this.pedNot.push({
        id_pedido: faker.number.int({ min: 1, max: 1000 }), // Assuming id_pedido is an integer FK
        id_notificacion: faker.number.int({ min: 1, max: 1000 }), // Assuming id_notificacion is an integer FK
        fecha_ped_not: faker.date.recent(),
      });
    }
  }

  create(data) {
    const nuevoPedNot = {
      id_pedido: data.id_pedido,
      id_notificacion: data.id_notificacion,
      fecha_ped_not: data.fecha_ped_not || faker.date.recent(),
    };
    this.pedNot.push(nuevoPedNot);
    return nuevoPedNot;
  }

  find() {
    return this.pedNot;
  }

  findOne(id_pedido, id_notificacion) {
    return this.pedNot.find(
      (item) => item.id_pedido === id_pedido && item.id_notificacion === id_notificacion
    );
  }

  update(id_pedido, id_notificacion, cambios) {
    const index = this.pedNot.findIndex(
      (item) => item.id_pedido === id_pedido && item.id_notificacion === id_notificacion
    );
    if (index === -1) {
      throw new Error('Registro de pedido-notificación no encontrado');
    }
    this.pedNot[index] = { ...this.pedNot[index], ...cambios };
    return this.pedNot[index];
  }

  delete(id_pedido, id_notificacion) {
    const index = this.pedNot.findIndex(
      (item) => item.id_pedido === id_pedido && item.id_notificacion === id_notificacion
    );
    if (index === -1) {
      throw new Error('Registro de pedido-notificación no encontrado');
    }
    this.pedNot.splice(index, 1);
    return { id_pedido, id_notificacion };
  }
}

module.exports = PedNotService;
