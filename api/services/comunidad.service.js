const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");
class ComunidadService {
  constructor() {
  }

  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoComunidad = await models.Comunidad.create(nuevoData);
    return nuevoComunidad;
  }

  async find() {
    const rta = await models.Comunidad.findAll({
    include: [
      {
          model: models.Municipio,  
          as: "municipio",
          include:[{
            model: models.Provincia,
            as:"provincia",
            include:[{
              model: models.Departamento,
              as: "departamento"
            }]
          }]
      }
    ]});
    return rta;
  }

  async findOne(id_comunidad) {
    
    const comunidad = await models.Comunidad.findByPk(id_comunidad,{
      include: [
        {
            model: models.Municipio,  
            as: "municipio",
            include:[{
              model: models.Provincia,
              as:"provincia",
              include:[{
                model: models.Departamento,
                as: "departamento"
              }]
            }]
        },
        {
          model: models.Artesano,
          as: "artesano"
        }
      ]
    });
    if (!comunidad) {
      throw boom.notFound("Comunidad no encontrado");
    }
    return comunidad;
  }

  async update(id_comunidad, cambios) {
    
    console.log(id_comunidad, cambios);
    
    const comunidad = await this.findOne(id_comunidad);
    const rta = await comunidad.update(cambios);
    return rta;
  }

  async delete(id_comunidad) {
    const comunidad = await this.findOne(id_comunidad);
    await comunidad.destroy();
    return { id_comunidad };
  }
}

module.exports = ComunidadService;