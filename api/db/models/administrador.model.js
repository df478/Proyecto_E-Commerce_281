const { Model, DataTypes, Sequelize } = require("sequelize");

const ADMINISTRADOR_TABLE = "administrador";
const AdministradorSchema = {
  id_usuario: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 50],
    },
  },
  email_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 20],
    },
  },
};

class Administrador extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: ADMINISTRADOR_TABLE,
      modelName: "Administrador",
      timestamps: false,
    };
  }
}

module.exports = { Administrador, AdministradorSchema, ADMINISTRADOR_TABLE };
