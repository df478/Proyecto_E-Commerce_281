const { Model, DataTypes, Sequelize } = require('sequelize')

const PED_CLI_DEL_TABLE = 'ped_cli_del'

const Ped_cli_delSchema = {
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
            key: 'id_cliente' 
        },
        allowNull: false,
    },
    id_delivery: {  
        type: DataTypes.INTEGER,
        references: {
            model: 'delivery',  
            key: 'id_delivery' 
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

class Ped_Cli_Del extends Model {
    static associate(models) {
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PED_CLI_DEL_TABLE,  
            modelName: 'Ped_Cli_Del',
            timestamps: false,  
        }
    }
}

module.exports = { Ped_Cli_Del, Ped_cli_delSchema,PED_CLI_DEL_TABLE}