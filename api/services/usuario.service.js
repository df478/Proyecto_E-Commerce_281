const { faker } = require('@faker-js/faker');

class UsuarioService {
  constructor() {
    this.usuarios = [];
    this.generate();
  }

  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.usuarios.push({
        id_usuario: index,
        nombre_usuario: faker.person.fullName(),
        email_usuario: faker.internet.email(),
        password_usuario: faker.internet.password(),
        tipo_usuario: faker.helpers.arrayElement(['usuario_normal', 'administrador']),
        fecha_registro: faker.date.past(),
        nro_compras: parseInt(Math.random() * 100),
      });
    }
  }

  create(data) {
    const nuevoUsuario = {
      id_usuario: this.usuarios.length,
      ...data,
    };
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  find() {
    return this.usuarios;
  }

  findOne(id_usuario) {
    return this.usuarios.find(item => item.id_usuario === id_usuario);
  }

  update(id_usuario, cambios) {
    const index = this.usuarios.findIndex(item => item.id_usuario === id_usuario);
    if (index === -1) {
      throw new Error('Usuario no encontrado');
    }
    this.usuarios[index] = { ...this.usuarios[index], ...cambios };
    return this.usuarios[index];
  }

  delete(id_usuario) {
    const index = this.usuarios.findIndex(item => item.id_usuario === id_usuario);
    if (index === -1) {
      throw new Error('Usuario no encontrado');
    }
    this.usuarios.splice(index, 1);
    return { id_usuario };
  }
}

module.exports = UsuarioService;
