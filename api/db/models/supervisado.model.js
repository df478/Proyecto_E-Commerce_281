const { Model, DataTypes, Sequelize } = require("sequelize");
const { ADMINISTRADOR_TABLE } = require("./administrador.model");
const { ARTESANO_TABLE } = require("./artesano.model");
const { CLIENTE_TABLE } = require("./cliente.model");
const { DELIVERY_TABLE } = require("./delivery.model");

const SUPERVISADO_TABLE = "supervisado";

const SupervisadoSchema = {
  id_supervisado: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  id_usuario_admin: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: ADMINISTRADOR_TABLE,         
      key: 'id_usuario',         
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  id_usuario_artesano: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: ARTESANO_TABLE,         
      key: 'id_usuario',          
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  id_usuario_cliente: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: CLIENTE_TABLE,         
      key: 'id_usuario',          
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  id_usuario_delivery: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: DELIVERY_TABLE,         
      key: 'id_usuario',          
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Supervisado extends Model {
  static associate(models) {
    
    this.belongsTo(models.Artesano, {
      as: 'artesano',
    });

    this.belongsTo(models.Cliente, {
      as: 'cliente',
    });

    this.belongsTo(models.Administrador, {
      as: 'administrador',
    });

    this.belongsTo(models.Delivery, {
      as: 'delivery',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SUPERVISADO_TABLE,
      modelName: "Supervisado",
      timestamps: false,          
    };
  }
}

module.exports = { Supervisado, SupervisadoSchema, SUPERVISADO_TABLE };
