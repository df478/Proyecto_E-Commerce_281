const { faker } = require("@faker-js/faker");

class Ped_NotService {
  constructor() {
    this.ped_Not = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.ped_Not.push({
        id_pedido: index,
        id_notificacion: parseInt(Math.random() * 100), // Suponiendo que las notificaciones tienen IDs del 0 al 99
        fecha_ped_not: faker.date.recent(30).toISOString().split('T')[0],  // Fecha reciente en formato YYYY-MM-DD
      });
    }
  }

  create(data) {
    const nuevoPed_Not = {
      id_pedido: this.ped_Not.length,
      ...data,
    };
    this.ped_Not.push(nuevoPed_Not);
    return nuevoPed_Not;
  }

  find() {  
    return this.ped_Not;
  }

  findOne(id) {
    return this.ped_Not.find(item => item.id_pedido === id);
  }

  update(id, cambios) {
    const index = this.ped_Not.findIndex(item => item.id_pedido === id);
    if (index === -1) {
        throw new Error('Relación de pedido-notificación no encontrada');
    }
    this.ped_Not[index] = { ...this.ped_Not[index], ...cambios };
    return this.ped_Not[index];
  }

  delete(id) {
    const index = this.ped_Not.findIndex(item => item.id_pedido === id);
    if (index === -1) {
        throw new Error('Relación de pedido-notificación no encontrada');
    }
    this.ped_Not.splice(index, 1);
    return { id_pedido: id };
  }
}

module.exports = Ped_NotService;
