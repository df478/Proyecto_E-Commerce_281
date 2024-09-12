class UsuNorAdminService {
    constructor() {
      this.usuarios = [];
      this.generate();
    }
  
    
    generate() {
      const limite = 100;
      for (let index = 0; index < limite; index++) {
        this.usuarios.push({
          id_usuario: index,
          id_usuario2: index + 1, 
        });
      }
    }
  
    
    create(data) {
      const nuevaEntrada = {
        id_usuario: data.id_usuario,
        id_usuario2: data.id_usuario2,
      };
      this.usuarios.push(nuevaEntrada);
      return nuevaEntrada;
    }
  
    
    find() {
      return this.usuarios;
    }
  
    
    findOne(id_usuario, id_usuario2) {
      return this.usuarios.find(
        item => item.id_usuario === id_usuario && item.id_usuario2 === id_usuario2
      );
    }
  
    
    update(id_usuario, id_usuario2, cambios) {
      const index = this.usuarios.findIndex(
        item => item.id_usuario === id_usuario && item.id_usuario2 === id_usuario2
      );
      if (index === -1) {
        throw new Error('Entrada no encontrada');
      }
      this.usuarios[index] = { ...this.usuarios[index], ...cambios };
      return this.usuarios[index];
    }
  
    
    delete(id_usuario, id_usuario2) {
      const index = this.usuarios.findIndex(
        item => item.id_usuario === id_usuario && item.id_usuario2 === id_usuario2
      );
      if (index === -1) {
        throw new Error('Entrada no encontrada');
      }
      this.usuarios.splice(index, 1);
      return { id_usuario, id_usuario2 };
    }
  }
  
  module.exports = UsuNorAdminService;
  