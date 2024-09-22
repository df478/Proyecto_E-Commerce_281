const { Model, DataTypes, Sequelize } = require('sequelize');
const { ARTESANO_TABLE } = require("./artesano.model");
const { CLIENTE_TABLE } = require("./cliente.model");
const { DELIVERY_TABLE } = require("./delivery.model");
const { PEDIDO_TABLE } = require("./pedido.model");


const PAGO_TABLE = 'pago';

const PagoSchema = {
    id_pago: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_pedido: {
        field: "id_pedido",
        allowNull: true,
        unique : true,
        type: DataTypes.INTEGER,
        references: {
            model: PEDIDO_TABLE,
            key: "id_pedido",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    id_artesano: {
        field: "id_artesano",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: ARTESANO_TABLE,
            key: "id_usuario",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    id_cliente: {  
        field: "id_cliente",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: CLIENTE_TABLE,
            key: "id_usuario",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    id_delivery: {  
        field: "id_delivery",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: DELIVERY_TABLE,
            key: "id_usuario",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    fecha_pago: {
        type: DataTypes.DATE,
        allowNull: false
    }
};

class Pago extends Model {
    static associate(models) {
        this.belongsTo(models.Pedido,{
            as: 'pedido',
        });
        this.belongsTo(models.Artesano, {
            as: 'artesano'
        });

        this.belongsTo(models.Cliente, {
            as: 'cliente'
        });

        this.belongsTo(models.Delivery, {
            as: 'delivery'
        });
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

module.exports = { Pago, PagoSchema, PAGO_TABLE };
