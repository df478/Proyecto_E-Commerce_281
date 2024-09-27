const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");

class ArtesanoService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password_usuario, 10);
    const nuevoData = {
      ...data,
      password_usuario: hash,
    };
    const nuevoArtesano = await models.Artesano.create(nuevoData);
    return nuevoArtesano;
  }

  async find() {
    const rta = await models.Artesano.findAll();
    return rta;
  }

  async findOne(id_usuario) {
    const artesano = await models.Artesano.findByPk(id_usuario,
      {
        include: [{
          association: 'comunidad',
          include: ["municipio"]
        }]
      }
    );
    if (!artesano) {
      throw boom.notFound("Artesano no encontrado");
    }
    return artesano;
    

  }

  async findByEmail(email_usuario) {
    const artesano = await models.Artesano.findOne({
      where: { email_usuario },
    });
    if (!artesano) {
      throw boom.notFound("Artesano no encontrado");
    }
    return artesano;
  }

  async update(id_usuario, cambios) {
    console.log("paso :D");

    console.log(id_usuario, cambios);
    
    const artesano = await this.findOne(id_usuario);
    const rta = await artesano.update(cambios);
    return rta;
  }

  async delete(id_usuario) {
    const artesano = await this.findOne(id_usuario);
    await artesano.destroy();
    return { id_usuario };
  }
}

module.exports = ArtesanoService;
