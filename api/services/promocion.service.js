const { faker } = require('@faker-js/faker');

class PromocionService {
  constructor() {
    this.promociones = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
        this.promociones.push({
        id_promocion: index,
        nombre_promocion: faker.commerce.productName(),
        descuento_promocion: parseFloat(faker.number.float({ min: 5, max: 50, precision: 0.01 })).toFixed(1), // Discounts between 5% and 50%
        fecha_ini: faker.date.past().toISOString().split('T')[0],
        fecha_fin: faker.date.future().toISOString().split('T')[0],
      });
    }
  }

  create(data) {
    const nuevaPromocion = {
      id_promocion: this.promociones.length,
      ...data,
    };
    this.promociones.push(nuevaPromocion);
    return nuevaPromocion;
  }

  find() {
    return this.promociones;
  }

  findOne(id_promocion) {
    return this.promociones.find(item => item.id_promocion == id_promocion);
  }

  update(id_promocion, cambios) {
    const index = this.promociones.findIndex(item => item.id_promocion == id_promocion);
    if (index == -1) {
      throw new Error('Promoción no encontrada');
    }
    this.promociones[index] = { ...this.promociones[index], ...cambios };
    return this.promociones[index];
  }

  delete(id_promocion) {
    const index = this.promociones.findIndex(item => item.id_promocion == id_promocion);
    if (index == -1) {
      throw new Error('Promoción no encontrada');
    }
    this.promociones.splice(index, 1);
    return { id_promocion };
  }
}

module.exports = PromocionService;
