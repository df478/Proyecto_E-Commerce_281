const { faker } = require("@faker-js/faker");

class ProPromCliCarService {
  constructor() {
    this.aniade = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.aniade.push({
        id_producto: parseInt(Math.random() * 500), 
        id_carrito: parseInt(Math.random() * 500),
        id_cliente: parseInt(Math.random() * 500),
        cantidad: parseInt(Math.random() * 100) + 1, 
      });
    }
  }

  create(data) {
    if (!data.id_producto || !data.id_carrito || !data.id_cliente || !data.cantidad) {
      throw new Error("Datos incompletos para crear un nuevo añadido");
    }
    
    const nuevoAniade = {
      id_producto: data.id_producto,
      id_carrito: data.id_carrito,
      id_cliente: data.id_cliente,
      cantidad: data.cantidad,
    };
    this.aniade.push(nuevoAniade);
    return nuevoAniade;
  }

  find() {
    return this.aniade;
  }

  findOne(id_producto, id_carrito, id_cliente) {
    return this.aniade.find(
      (item) =>
        item.id_producto === parseInt(id_producto) &&
        item.id_carrito === parseInt(id_carrito) &&
        item.id_cliente === parseInt(id_cliente)
    );
  }

  update(id_producto, id_carrito, id_cliente, cambios) {
    const index = this.aniade.findIndex(
      (item) =>
        item.id_producto === parseInt(id_producto) &&
        item.id_carrito === parseInt(id_carrito) &&
        item.id_cliente === parseInt(id_cliente)
    );
    if (index === -1) {
      throw new Error("Añadido no encontrado");
    }
    this.aniade[index] = { ...this.aniade[index], ...cambios };
    return this.aniade[index];
  }

  delete(id_producto, id_carrito, id_cliente) {
    const index = this.aniade.findIndex(
      (item) =>
        item.id_producto === parseInt(id_producto) &&
        item.id_carrito === parseInt(id_carrito) &&
        item.id_cliente === parseInt(id_cliente)
    );
    if (index === -1) {
      throw new Error("Añadido no encontrado");
    }
    this.aniade.splice(index, 1);
    return { id_producto, id_carrito, id_cliente };
  }
}

module.exports = ProPromCliCarService;
