const { faker } = require('@faker-js/faker');

class ReseniaService {
  constructor() {
    this.resenias = [];
    this.generate();
  }

  
  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.resenias.push({
        id_resenia: index,
        id_usuario: parseInt(Math.random() * 500),  
        id_producto: parseInt(Math.random() * 500), 
        calificacion: Math.floor(Math.random() * 5) + 1, 
        comentario: faker.lorem.sentence(), 
      });
    }
  }

  
  create(data) {
    const nuevaResenia = {
      id_resenia: this.resenias.length, 
      ...data, 
    };
    this.resenias.push(nuevaResenia); 
    return nuevaResenia;
  }

  
  find() {
    return this.resenias;
  }

  
  findOne(id_resenia) {
    return this.resenias.find(item => item.id_resenia === id_resenia);
  }

  
  update(id_resenia, cambios) {
    const index = this.resenias.findIndex(item => item.id_resenia === id_resenia);
    if (index === -1) {
      throw new Error('Reseña no encontrada');
    }
    this.resenias[index] = { ...this.resenias[index], ...cambios }; 
    return this.resenias[index];
  }

  
  delete(id_resenia) {
    const index = this.resenias.findIndex(item => item.id_resenia === id_resenia);
    if (index === -1) {
      throw new Error('Reseña no encontrada');
    }
    this.resenias.splice(index, 1); 
    return { id_resenia };
  }
}

module.exports = ReseniaService;