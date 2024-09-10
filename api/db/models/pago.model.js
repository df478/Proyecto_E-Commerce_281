const { Model, DataTypes, Sequelize } = require('sequelize');

const PAGO_TABLE = 'pago';

const pagoSchema = {
    id_pago: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_artesano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_delivery: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_pago: {
        type: DataTypes.DATE,
        allowNull: false
    }
};

class Pago extends Model {
    static associate(models) {
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PAGO_TABLE,
            modelName: 'Pago',
            timestamps: false
        }
    }
}

module.exports = { Pago, pagoSchema, PAGO_TABLE };
