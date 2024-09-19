const { faker } = require('@faker-js/faker');

class PedidoService {
  constructor() {
    this.pedidos = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.pedidos.push({
        id_pedido: index,
        id_carrito: parseInt(Math.random() * 500),
        fecha_pedido: faker.date.past(),
        estado_pedido: faker.helpers.arrayElement(['pendiente', 'procesado', 'enviado', 'entregado', 'cancelado']),
        monto_pago: parseFloat(faker.commerce.price()),
      });
    }
  }

  create(data) {
    const nuevoPedido = {
      id_pedido: this.pedidos.length,
      ...data,
    };
    this.pedidos.push(nuevoPedido);
    return nuevoPedido;
  }

  find() {
    return this.pedidos;
  }

  findOne(id_pedido) {
    return this.pedidos.find(item => item.id_pedido === parseInt(id_pedido));
  }

  update(id_pedido, cambios) {
    const index = this.pedidos.findIndex(item => item.id_pedido === parseInt(id_pedido));
    if (index === -1) {
      throw new Error('Pedido no encontrado');
    }
    
    this.pedidos[index] = { ...this.pedidos[index], ...cambios };
    return this.pedidos[index];
  }

  delete(id_pedido) {
    const index = this.pedidos.findIndex(item => item.id_pedido === parseInt(id_pedido));
    if (index === -1) {
      throw new Error('Pedido no encontrado');
    }
    this.pedidos.splice(index, 1);
    return { id_pedido };
  }
}

module.exports = PedidoService;
