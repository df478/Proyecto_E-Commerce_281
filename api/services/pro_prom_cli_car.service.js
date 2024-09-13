const { faker } = require("@faker-js/faker");

class ProPromCliCarService {
  constructor() {
    this.aniade = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.clientes.push({
        id_producto: parseInt(Math.random() * 500),
        id_carrito: parseInt(Math.random() * 500),
        id_cliente: parseInt(Math.random() * 500),
        cantidad: parseInt(Math.random() * 500),
      });
    }
  }

  create(data) {
    const nuevoAniade = {
      ...data,
    };
    this.aniade.push(nuevoAniade);
    return nuevoAniade;
  }

  find() {
    return this.aniade;
  }

  findOne(id_producto, id_carrito, id_cliente) {
    return this.administrador.find(
      (item) =>
        item.id_producto === id_producto &&
        item.id_carrito === id_carrito &&
        item.id_cliente === id_cliente
    );
  }

  update(id_producto, id_carrito, id_cliente, cambios) {
    const index = this.administrador.findIndex(
      (item) =>
        item.id_producto === id_producto &&
        item.id_carrito === id_carrito &&
        item.id_cliente === id_cliente
    );
    if (index === -1) {
      throw new Error("Cliente no encontrado");
    }
    this.administrador[index] = { ...this.administrador[index], ...cambios };
    return this.administrador[index];
  }

  delete(id_producto, id_carrito, id_cliente) {
    const index = this.administrador.findIndex(
      (item) =>
        item.id_producto === id_producto &&
        item.id_carrito === id_carrito &&
        item.id_cliente === id_cliente
    );
    if (index === -1) {
      throw new Error("Añadido no encontrado");
    }
    this.aniade.splice(index, 1);
    return { id_producto, id_carrito, id_cliente };
  }
}

module.exports = ProPromCliCarService;
