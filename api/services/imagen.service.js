const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class ImagenService {
  constructor() {}

  async create(data) {
    const nuevoData = {
        ...data,
      };
    const nuevaImagen = await models.Imagen.create(nuevoData);
    return nuevaImagen;
  }

  async find() {
    const rta = await models.Imagen.findAll();
    return rta;
  }

  async findOne(id_imagen) {
    const imagen = await models.Imagen.findByPk(id_imagen);
    if (!imagen) {
      throw boom.notFound("Imagen no encontrado");
    }
    return imagen;
  }
  async update(id_imagen, cambios) {
    
    console.log(id_imagen, cambios);
    
    const imagen = await this.findOne(id_imagen);
    const rta = await imagen.update(cambios);
    return rta;
  }
  async delete(id_imagen) {
    const imagen = await this.findOne(id_imagen);
    await imagen.destroy();
    return { id_imagen };
  }
}

module.exports = ImagenService;
