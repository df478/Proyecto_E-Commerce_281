const { Model, DataTypes, Sequelize } = require('sequelize');
const { CARRITO_TABLE } = require("./carrito.model");

const PEDIDO_TABLE = 'pedido';

const pedidoSchema = {
    id_pedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_carrito: {
        field: "id_carrito",
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,  
        references: {
            model: CARRITO_TABLE,
            key: 'id_carrito'
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    fecha_pedido: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado_pedido: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pendiente",
        validate: {
            isIn: [['Pendiente', 'En preparacion', 'En camino', 'Entregado', 'Cancelado']]
        }
    },
    monto_pago: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    tipo_de_pedido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['estandar','rapido','recoger de tienda','gratuito']]
        }
    }
};

class Pedido extends Model {
    static associate(models) {
        
        this.belongsTo(models.Carrito, {
            as: 'carrito',
            foreignKey: "id_carrito"
        });
        this.hasOne(models.Pago, {
            as: "pago",
            foreignKey: "id_pedido",
        });
        
        this.hasMany(models.Tiene, {
            as: "tiene",
            foreignKey: "id_pedido",
        });
        
        this.hasMany(models.Entrega, {
            as: "entrega",
            foreignKey: "id_pedido",
        });

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
