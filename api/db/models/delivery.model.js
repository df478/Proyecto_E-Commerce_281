const { Model, DataTypes, Sequelize } = require("sequelize");

const DELIVERY_TABLE = "delivery";

const DeliverySchema = {
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
      len: [8, 200],
    },
  },
  recovery_token: {
    field: "recovery_token",
    allowNull: true,
    type: DataTypes.STRING,
  },
  tipo_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [["delivery"]],
    },
  },
  estado_delivery: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "inactivo",
    validate: {
      len: [3, 50],
    },
  },
  celular: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
        len: [8, 15],       
        isNumeric: true   
    }
  },
};

class Delivery extends Model {
    static associate(models) {
        this.hasMany(models.Pago, {
            as: "pago",
            foreignKey: 'id_delivery'
        });
        this.hasMany(models.Entrega, {
            as: "entrega",
            foreignKey: 'id_delivery'
        });
        this.hasMany(models.Supervisado, {
            as: "supervisado",
            foreignKey: 'id_delivery'
        });
    }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DELIVERY_TABLE,
      modelName: "Delivery",
      timestamps: false,
    };
  }
}

module.exports = { Delivery, DeliverySchema, DELIVERY_TABLE };
