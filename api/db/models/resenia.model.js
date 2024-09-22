const { Model, DataTypes, Sequelize } = require("sequelize");
const { CLIENTE_TABLE } = require("./cliente.model");
const { PRODUCTO_TABLE } = require("./producto.model");

const RESENIA_TABLE = "resenia";

const ReseniaSchema = {
  id_resenia: {
    allowNull: false,
    autoIncrement: true,         
    primaryKey: true,
    type: DataTypes.INTEGER,
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
  id_usuario: {
    field: "id_usuario",
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
        model: CLIENTE_TABLE,
        key: "id_usuario",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  descripcion_resenia: {
    type: DataTypes.TEXT,        
    allowNull: true,             
  },
  fecha_resenia: {
    type: DataTypes.DATEONLY,    
    allowNull: true,             
  },
};

class Resenia extends Model {
  static associate(models) {
    
    this.belongsTo(models.Producto, {
      as: 'producto'
    });

    this.belongsTo(models.Cliente, {
      as: 'cliente'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RESENIA_TABLE,
      modelName: "Resenia",
      timestamps: false,          
    };
  }
}

module.exports = { Resenia, ReseniaSchema, RESENIA_TABLE };
