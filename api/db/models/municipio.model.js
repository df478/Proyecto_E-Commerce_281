const { Model, DataTypes, Sequelize } = require("sequelize");

const MUNICIPIO_TABLE = "municipio";

const MunicipioSchema = {
  id_municipio: {
    allowNull: false,
    autoIncrement: true,       
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre_municipio: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
        len: [3, 50]
    }        
  },
  id_provincia: {
    type: DataTypes.INTEGER,
    allowNull: true,             
    references: {
      model: 'provincias',       
      key: 'id_provincia',       
    }
  },
};

class Municipio extends Model {
  static associate(models) {

    this.belongsTo(models.Provincia, {
      foreignKey: 'id_provincia',
      as: 'provincia'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MUNICIPIO_TABLE,
      modelName: "Municipio",
      timestamps: false,          
    };
  }
}

module.exports = { Municipio, MunicipioSchema, MUNICIPIO_TABLE };