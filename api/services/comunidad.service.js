const { faker } = require('@faker-js/faker');

class ComunidadService {
  constructor() {
    this.comunidades = [];
    this.generate();
  }

  
  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.comunidades.push({
        id_comunidad: index,
        nombre_comunidad: faker.location.state(), 
      });
    }
  }

  
  create(data) {
    const nuevaComunidad = {
      id_comunidad: this.comunidades.length, 
      ...data, 
    };
    this.comunidades.push(nuevaComunidad); 
    return nuevaComunidad;
  }

  
  find() {
    return this.comunidades;
  }

  
  findOne(id_comunidad) {
    return this.comunidades.find(item => item.id_comunidad === id_comunidad);
  }

  
  update(id_comunidad, cambios) {
    const index = this.comunidades.findIndex(item => item.id_comunidad === id_comunidad);
    if (index === -1) {
      throw new Error('Comunidad no encontrada');
    }
    this.comunidades[index] = { ...this.comunidades[index], ...cambios }; 
    return this.comunidades[index];
  }

 
  delete(id_comunidad) {
    const index = this.comunidades.findIndex(item => item.id_comunidad === id_comunidad);
    if (index === -1) {
      throw new Error('Comunidad no encontrada');
    }
    this.comunidades.splice(index, 1);
    return { id_comunidad };
  }
}

module.exports = ComunidadService;