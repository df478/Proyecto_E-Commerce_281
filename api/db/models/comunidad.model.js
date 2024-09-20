const { Model, DataTypes, Sequelize } = require("sequelize");
const MUNICIPIO_TABLE = require("./municipio.model");

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
    field: "id_municipio",
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: MUNICIPIO_TABLE,
      key: "id_municipio",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Comunidad extends Model {
  static associate(models) {
    this.belongsTo(models.Municipio, {
      as: "municipio",
    });

    this.hasMany(models.Artesano, {
      as: "artesano",
      foreignKey: "id_comunidad",
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
