const { Model, DataTypes, Sequelize } = require('sequelize');

const PEDIDO_TABLE = 'pedido';

const pedidoSchema = {
    id_pedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_carrito: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_pedido: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado_pedido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['pendiente', 'procesado', 'enviado', 'entregado', 'cancelado']]
        }
    },
    monto_pago: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
};

class Pedido extends Model {
    static associate(models) {
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PEDIDO_TABLE,
            modelName: 'Pedido',
            timestamps: false
        }
    }
}

module.exports = { Pedido, pedidoSchema, PEDIDO_TABLE };
