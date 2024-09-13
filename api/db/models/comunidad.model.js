const { Model, DataTypes, Sequelize } = require("sequelize");

const COMUNIDAD_TABLE = "comunidad";

const ComunidadSchema = {
  id_comunidad: {
    allowNull: false,
    autoIncrement: true,     
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre_comunidad: {
    type: DataTypes.STRING(100), 
    allowNull: true,             
  },
  id_municipio: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'municipios',       
      key: 'id_municipio',       
    }
  },
};

class Comunidad extends Model {
  static associate(models) {

    
    this.belongsTo(models.Municipio, {
      foreignKey: 'id_municipio',
      as: 'municipio'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMUNIDAD_TABLE,
      modelName: "Comunidad",
      timestamps: false,         
    };
  }
}

module.exports = { Comunidad, ComunidadSchema, COMUNIDAD_TABLE };