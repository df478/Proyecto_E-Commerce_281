const { Departamento, DepartamentoSchema } = require("./departamento.model");
const { Provincia, ProvinciaSchema } = require("./provincia.model");

const { Cliente, ClienteSchema } = require("./cliente.model");
const { Artesano, ArtesanoSchema } = require("./artesano.model");
const { Delivery, DeliverySchema } = require("./delivery.model");
const { Administrador, AdministradorSchema } = require("./administrador.model");
const { Municipio, MunicipioSchema } = require("./municipio.model");
const { Comunidad, ComunidadSchema  } = require("./comunidad.model");

function setUpModels(sequelize) {
  Departamento.init(DepartamentoSchema, Departamento.config(sequelize));
  Provincia.init(ProvinciaSchema, Provincia.config(sequelize));
  Municipio.init(MunicipioSchema, Municipio.config(sequelize));
  Comunidad.init(ComunidadSchema, Comunidad.config(sequelize));

  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Artesano.init(ArtesanoSchema, Artesano.config(sequelize));
  Delivery.init(DeliverySchema, Delivery.config(sequelize));
  Administrador.init(AdministradorSchema, Administrador.config(sequelize));

  Departamento.associate(sequelize.models);
  Provincia.associate(sequelize.models);
  Municipio.associate(sequelize.models);
  Comunidad.associate(sequelize.models);
  Artesano.associate(sequelize.models)
}

module.exports = { setUpModels };
