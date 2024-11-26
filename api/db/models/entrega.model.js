const { Model, DataTypes, Sequelize } = require('sequelize')
const { PEDIDO_TABLE } = require("./pedido.model");
const { CLIENTE_TABLE } = require("./cliente.model");
const { DELIVERY_TABLE } = require("./delivery.model");

const ENTREGA_TABLE = 'entrega'

const EntregaSchema = {
    id_entrega: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    }, 
    id_pedido: {  
        field: "id_pedido",
        allowNull: false, // Cambiado a false
        type: DataTypes.INTEGER,
        references: {
            model: PEDIDO_TABLE,
            key: "id_pedido",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", // Cambiado a CASCADE
    },
    id_cliente: {  
        field: "id_cliente",
        allowNull: false, // Cambiado a false
        type: DataTypes.INTEGER,
        references: {
            model: CLIENTE_TABLE,
            key: "id_usuario",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", // Cambiado a CASCADE
    },
    id_delivery: {  
        field: "id_delivery",
        allowNull: true, // Cambiado a false
        type: DataTypes.INTEGER,
        references: {
            model: DELIVERY_TABLE,
            key: "id_usuario",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", // Cambiado a CASCADE
        defaultValue: null,  
    },    
    estado_entrega: {  
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [3, 50]
        },
        defaultValue: "Pendiente",
    },
    fecha_entrega: {  
        type: DataTypes.DATE,
        allowNull: true,
    },
    cliente_confirm: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,  
    },
    delivery_confirm: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,  
    }
}

class Entrega extends Model {
    static associate(models) {
        this.belongsTo(models.Pedido, {
            as: "pedido",
            foreignKey: "id_pedido",
        });
        this.belongsTo(models.Cliente, {
            as: "cliente",
            foreignKey: 'id_cliente'
        });
        this.belongsTo(models.Delivery, {
            as: "delivery",
            foreignKey: 'id_delivery'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ENTREGA_TABLE,  
            modelName: 'Entrega',
            timestamps: false,  
        }
    }
}

module.exports = { Entrega, EntregaSchema,ENTREGA_TABLE}