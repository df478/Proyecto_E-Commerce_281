const { Model, DataTypes, Sequelize } = require("sequelize");

const RESENIA_TABLE = "resenia";

const ReseniaSchema = {
  id_resenia: {
    allowNull: false,
    autoIncrement: true,         
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: true,             
    references: {
      model: 'productos',        
      key: 'id_producto',        
    }
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: true,             
    references: {
      model: 'clientes',         
      key: 'id_cliente',         
    }
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
      foreignKey: 'id_producto',
      as: 'producto'
    });

    this.belongsTo(models.Cliente, {
      foreignKey: 'id_cliente',
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
