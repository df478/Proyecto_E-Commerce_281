const { faker } = require("@faker-js/faker");

class CarritoService {
  constructor() {
    this.carrito = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.carrito.push({
        id_carrito: index
      });
    }
  }

  create(data) {
    const nuevocarrito = {
      id_carrito: this.carrito.length,
      ...data,
    };
    this.carrito.push(nuevocarrito);
    return nuevocarrito;
  }

  find() {
    return this.carrito;
  }

  findOne(id_carrito) {
    return this.carrito.find((item) => item.id_carrito === id_carrito);
  }

  update(id_carrito, cambios) {
    const index = this.carrito.findIndex(
      (item) => item.id_carrito === id_carrito
    );
    if (index === -1) {
      throw new Error("carrito no encontrado");
    }
    this.carrito[index] = { ...this.carrito[index], ...cambios };
    return this.carrito[index];
  }

  delete(id_carrito) {
    const index = this.carrito.findIndex(
      (item) => item.id_carrito === id_carrito
    );
    if (index === -1) {
      throw new Error("carrito no encontrado");
    }
    this.carrito.splice(index, 1);
    return { id_carrito };
  }
}

module.exports = CarritoService;