const { Model, DataTypes, Sequelize } = require('sequelize')

const PED_CLI_DEL_TABLE = 'ped_cli_del'

const PedCliDelSchema = {
    id_pedido: {  
        type: DataTypes.INTEGER,
        references: {
            model: 'pedido',  
            key: 'id_pedido'
        },
        allowNull: false,
    },
    id_cliente: {  
        type: DataTypes.INTEGER,
        references: {
            model: 'cliente',  
            key: 'id_usuario' 
        },
        allowNull: false,
    },
    id_delivery: {  
        type: DataTypes.INTEGER,
        references: {
            model: 'delivery',  
            key: 'id_usuario' 
        },
        allowNull: false,
    },
    estado_entrega: {  
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 50]
        }
    },
    fecha_entrega: {  
        type: DataTypes.DATE,
        allowNull: false,
    }
}

class PedCliDel extends Model {
    static associate(models) {
        this.belongsTo(models.Pedido, {
            as: "pedido",
        });
        this.belongsTo(models.Cliente, {
            as: "cliente",
        });
        this.belongsTo(models.Delivery, {
            as: "delivery",
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PED_CLI_DEL_TABLE,  
            modelName: 'PedCliDel',
            timestamps: false,  
        }
    }
}

module.exports = { PedCliDel, PedCliDelSchema,PED_CLI_DEL_TABLE}