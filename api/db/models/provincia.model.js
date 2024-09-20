const { Model, DataTypes, Sequelize } = require("sequelize");
const { DEPARTAMENTO_TABLE } = require("./departamento.model");

const PROVINCIA_TABLE = "provincia";
const ProvinciaSchema = {
  id_provincia: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre_provincia: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  id_depto: {
    field: "id_depto",
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: DEPARTAMENTO_TABLE,
      key: "id_depto",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Provincia extends Model {
  static associate(models) {
    this.belongsTo(models.Departamento, {
      as: "departamento",
    });

    this.hasMany(
      models.Municipio,
      {
          as:'municipio',
          foreignKey: 'id_municipio'
      }
  )

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PROVINCIA_TABLE,
      modelName: "Provincia",
      timestamps: false,
    };
  }
}

module.exports = { Provincia, ProvinciaSchema, PROVINCIA_TABLE };
