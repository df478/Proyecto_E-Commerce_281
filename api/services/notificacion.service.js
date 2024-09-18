const { faker } = require('@faker-js/faker');

class NotificacionService {
  constructor() {
    this.notificacion = []
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.notificacion.push({
        id_notificacion: index,
        descripcion_notificacion: faker.commerce.productDescription(),
        tipo_notificacion: faker.helpers.arrayElement(['success', 'info', 'warning', 'error'])


      });
    }
  }

  create(data) {
    const nuevoNotificacion = {
      id_notificacion: this.notificacion.length, 
      ...data,
    };
    this.notificacion.push(nuevoNotificacion);
    return nuevoNotificacion;
  }

  find() {
    return this.notificacion;
  }

  findOne(id_notificacion) {
    return this.notificacion.find(item => item.id_notificacion === id_notificacion);
  }

  update(id_notificacion, cambios) {
    const index = this.notificacion.findIndex(item => item.id_notificacion === id_notificacion);
    if (index === -1) {
      throw new Error('notificacion no encontrado');
    }
    this.notificacion[index] = { ...this.notificacion[index], ...cambios };
    return this.notificacion[index];
  }

  delete(id_notificacion) {
    const index = this.notificacion.findIndex(item => item.id_notificacion === id_notificacion);
    if (index === -1) {
      throw new Error('notificacion no encontrado');
    }
    this.notificacion.splice(index, 1);
    return { id_notificacion };
  }
}

module.exports = NotificacionService;
