const { Departamento, DepartamentoSchema } = require("./departamento.model");
const { Provincia, ProvinciaSchema } = require("./provincia.model");

const { Cliente, ClienteSchema } = require("./cliente.model");
const { Artesano, ArtesanoSchema } = require("./artesano.model");
const { Delivery, DeliverySchema } = require("./delivery.model");
const { Administrador, AdministradorSchema } = require("./administrador.model");
const { Municipio, MunicipioSchema } = require("./municipio.model");
const { Comunidad, ComunidadSchema  } = require("./comunidad.model");
const { Promocion,PromocionSchema } = require("./promocion.model");
const { Producto, ProductoSchema } = require("./producto.model");
const { Resenia, ReseniaSchema } = require("./resenia.model");
const { Carrito, CarritoSchema } = require("./carrito.model");
const { Pedido, pedidoSchema } = require("./pedido.model");
const { Notificacion, notificacionSchema } = require("./notificacion.model");
const { Tiene, TieneSchema } = require("./tiene.model");
const { Supervisado, SupervisadoSchema } = require("./supervisado.model");
const { Entrega, EntregaSchema } = require("./entrega.model");
const { Aniade, AniadeSchema } = require("./aniade.model");
const { Pago, PagoSchema } = require("./pago.model");

function setUpModels(sequelize) {
  Departamento.init(DepartamentoSchema, Departamento.config(sequelize));
  Provincia.init(ProvinciaSchema, Provincia.config(sequelize));
  Municipio.init(MunicipioSchema, Municipio.config(sequelize));
  Comunidad.init(ComunidadSchema, Comunidad.config(sequelize));

  Artesano.init(ArtesanoSchema, Artesano.config(sequelize));
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Delivery.init(DeliverySchema, Delivery.config(sequelize));
  Administrador.init(AdministradorSchema, Administrador.config(sequelize));

  Promocion.init(PromocionSchema, Promocion.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  Resenia.init(ReseniaSchema, Resenia.config(sequelize));

  Carrito.init(CarritoSchema, Carrito.config(sequelize));
  Pedido.init(pedidoSchema, Pedido.config(sequelize));
  Pago.init(PagoSchema, Pago.config(sequelize));
  Notificacion.init(notificacionSchema, Notificacion.config(sequelize));
  Tiene.init(TieneSchema, Tiene.config(sequelize));
  Entrega.init(EntregaSchema, Entrega.config(sequelize));
  Supervisado.init(SupervisadoSchema, Supervisado.config(sequelize));
  Aniade.init(AniadeSchema, Aniade.config(sequelize));



  Departamento.associate(sequelize.models);
  Provincia.associate(sequelize.models);
  Municipio.associate(sequelize.models);
  Comunidad.associate(sequelize.models);
  Artesano.associate(sequelize.models);
  Cliente.associate(sequelize.models);
  Delivery.associate(sequelize.models);
  Administrador.associate(sequelize.models);
  Promocion.associate(sequelize.models);
  Producto.associate(sequelize.models);
  Resenia.associate(sequelize.models);
  Carrito.associate(sequelize.models);
  Pedido.associate(sequelize.models);
  Pago.associate(sequelize.models);
  Notificacion.associate(sequelize.models);
  Tiene.associate(sequelize.models);
  Entrega.associate(sequelize.models);
  Supervisado.associate(sequelize.models);
  Aniade.associate(sequelize.models);

}

module.exports = { setUpModels };
