const { faker } = require('@faker-js/faker');

class MunicipioService {
  constructor() {
    this.municipios = [];
    this.generate();
  }
  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.municipios.push({
        id_municipio: index,
        nombre_municipio: faker.location.state(),
        id_provincia: parseInt(Math.random() * 100), 
      });
    }
  }
  create(data) {
    const nuevoMunicipio = {
      id_municipio: this.municipios.length, 
      ...data, 
    };
    this.municipios.push(nuevoMunicipio); 
    return nuevoMunicipio;
  }
  find() {
    return this.municipios;
  }
  findOne(id_municipio) {
    return this.municipios.find(item => item.id_municipio === id_municipio);
  }

  update(id_municipio, cambios) {
    const index = this.municipios.findIndex(item => item.id_municipio === id_municipio);
    if (index === -1) {
      throw new Error('Municipio no encontrado');
    }
    this.municipios[index] = { ...this.municipios[index], ...cambios }; 
    return this.municipios[index];
  }

  delete(id_municipio) {
    const index = this.municipios.findIndex(item => item.id_municipio === id_municipio);
    if (index === -1) {
      throw new Error('Municipio no encontrado');
    }
    this.municipios.splice(index, 1); 
    return { id_municipio };
  }
}

module.exports = MunicipioService;
