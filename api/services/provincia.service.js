const { faker } = require("@faker-js/faker");

class ProvinciaService {
  constructor() {
    this.provincia = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.provincia.push({
        id_provincia: index,
        nombre_provincia: faker.location.state(),
        id_departamento: parseInt(Math.random() * 100),
      });
    }
  }

  create(data) {
    const nuevoCliente = {
      id_provincia: this.provincia.length,
      ...data,
    };
    this.provincia.push(nuevoCliente);
    return nuevoCliente;
  }

  find() {
    return this.provincia;
  }

  findOne(id_provincia) {
    return this.provincia.find((item) => item.id_provincia === id_provincia);
  }

  update(id_provincia, cambios) {
    const index = this.provincia.findIndex(
      (item) => item.id_provincia === id_provincia
    );
    if (index === -1) {
      throw new Error("Cliente no encontrado");
    }
    this.provincia[index] = { ...this.provincia[index], ...cambios };
    return this.provincia[index];
  }

  delete(id_provincia) {
    const index = this.provincia.findIndex(
      (item) => item.id_provincia === id_provincia
    );
    if (index === -1) {
      throw new Error("Cliente no encontrado");
    }
    this.provincia.splice(index, 1);
    return { id_provincia };
  }
}

module.exports = ProvinciaService;
