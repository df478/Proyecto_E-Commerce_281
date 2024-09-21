const { Model, DataTypes, Sequelize } = require("sequelize");

const PRO_PROM_CLI_CAR_TABLE = "pro_prom_cli_car";
const ProPromCliCarSchema = {
  id_producto: {
    allowNull: false,
    references: {
        model: 'producto',
        key: 'id_producto'
    },
    type: DataTypes.INTEGER,
  },
  id_carrito: {
    allowNull: false,
    references: {
        model: 'carrito',
        key: 'id_carrito'
    },
    type: DataTypes.INTEGER,
  },
  id_cliente: {
    allowNull: false,
    references: {
        model: 'cliente',
        key: 'id_usuario'
    },
    type: DataTypes.INTEGER,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

class ProPromCliCar extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRO_PROM_CLI_CAR_TABLE,
      modelName: "ProPromCliCar",
      timestamps: false,
    };
  }
}

module.exports = { ProPromCliCar, ProPromCliCarSchema, PRO_PROM_CLI_CAR_TABLE };
