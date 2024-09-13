const { faker } = require("@faker-js/faker");

class AdministradorService {
  constructor() {
    this.administrador = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.clientes.push({
        id_usuario: index,
        nombre_usuario: faker.person.fullName(),
        email_usuario: faker.internet.email(),
        password_usuario: faker.internet.password(),
      });
    }
  }

  create(data) {
    const nuevoCliente = {
      id_usuario: this.administrador.length,
      ...data,
    };
    this.administrador.push(nuevoCliente);
    return nuevoCliente;
  }

  find() {
    return this.administrador;
  }

  findOne(id_usuario) {
    return this.administrador.find((item) => item.id_usuario === id_usuario);
  }

  update(id_usuario, cambios) {
    const index = this.administrador.findIndex(
      (item) => item.id_usuario === id_usuario
    );
    if (index === -1) {
      throw new Error("Cliente no encontrado");
    }
    this.administrador[index] = { ...this.administrador[index], ...cambios };
    return this.administrador[index];
  }

  delete(id_usuario) {
    const index = this.administrador.findIndex(
      (item) => item.id_usuario === id_usuario
    );
    if (index === -1) {
      throw new Error("Cliente no encontrado");
    }
    this.administrador.splice(index, 1);
    return { id_usuario };
  }
}

module.exports = AdministradorService;
