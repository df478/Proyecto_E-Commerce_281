const { Model, DataTypes, Sequelize } = require("sequelize");
const { PRODUCTO_TABLE } = require("./producto.model");
const { CARRITO_TABLE } = require("./carrito.model");
//const { CLIENTE_TABLE } = require("./cliente.model");

const ANIADE_TABLE = "aniade";
const AniadeSchema = {
  id_aniade: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
},
  id_producto: {
    field: "id_producto",
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
        model: PRODUCTO_TABLE,
        key: "id_producto",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  id_carrito: {
    field: "id_carrito",
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
        model: CARRITO_TABLE,
        key: "id_carrito",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  /*id_cliente: {
    field: "id_cliente",
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
        model: CLIENTE_TABLE,
        key: "id_usuario",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },*/
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  artesano_confirm: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,  
  },
  delivery_confirm: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,  
  }
  
};

class Aniade extends Model {
  static associate(models) {
    
    this.belongsTo(models.Producto, {
        as: "producto",
        foreignKey: "id_producto"
    });
    this.belongsTo(models.Carrito, {
        as: "carrito",
        foreignKey: "id_carrito"
    });
    /*this.belongsTo(models.Cliente, {
        as: "cliente",
        foreignKey: "id_cliente"
    });*/
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ANIADE_TABLE,
      modelName: "Aniade",
      timestamps: false,
    };
  }
}

module.exports = { Aniade, AniadeSchema, ANIADE_TABLE };
