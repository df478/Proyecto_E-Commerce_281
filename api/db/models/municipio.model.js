const { Model, DataTypes, Sequelize } = require("sequelize");
const { PROVINCIA_TABLE } = require("./provincia.model");

const MUNICIPIO_TABLE = "municipio";

const MunicipioSchema = {
  id_municipio: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER(11),
  },
  nombre_municipio: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: [3, 50],
    },
  },
  id_provincia: {
    field: "id_provincia",
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: PROVINCIA_TABLE,
      key: "id_provincia",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Municipio extends Model {
  static associate(models) {
    this.belongsTo(models.Provincia, {
      as: "provincia",
    });

    this.hasMany(models.Comunidad, {
      as: "comunidad",
      foreignKey: "id_municipio",
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
