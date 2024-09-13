const { faker } = require("@faker-js/faker");

class Ped_cli_delService {
  constructor() {
    this.ped_cli_del = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.ped_cli_del.push({
        id_pedido: parseInt(Math.random() * 500),
        id_cliente: parseInt(Math.random() * 500),
        id_delivery: parseInt(Math.random() * 500),
        estado_entrega: faker.helpers.arrayElements(['confirmado','en camino','entregado']),
        fecha_entrega: faker.date.past()
      });
    }
  }

  create(data) {
    const nuevoped_cli_del = {
      id_ped_cli_del: this.ped_cli_del.length,
      ...data,
    };
    this.ped_cli_del.push(nuevoped_cli_del);
    return nuevoped_cli_del;
  }

  find() {
    return this.ped_cli_del;
  }

  findOne(id_ped_cli_del) {
    return this.ped_cli_del.find((item) => item.id_ped_cli_del === id_ped_cli_del);
  }

  update(id_ped_cli_del, cambios) {
    const index = this.ped_cli_del.findIndex(
      (item) => item.id_ped_cli_del === id_ped_cli_del
    );
    if (index === -1) {
      throw new Error("ped_cli_del no encontrado");
    }
    this.ped_cli_del[index] = { ...this.ped_cli_del[index], ...cambios };
    return this.ped_cli_del[index];
  }

  delete(id_ped_cli_del) {
    const index = this.ped_cli_del.findIndex(
      (item) => item.id_ped_cli_del === id_ped_cli_del
    );
    if (index === -1) {
      throw new Error("ped_cli_del no encontrado");
    }
    this.ped_cli_del.splice(index, 1);
    return { id_ped_cli_del };
  }
}

module.exports = Ped_cli_delService;