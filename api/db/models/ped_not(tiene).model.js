const { Model, DataTypes, Sequelize } = require('sequelize')

const PED_NOT_TABLE = 'ped_not'

const ped_notSchema = {
    id_pedido: {  
        type: DataTypes.INTEGER,
        references: {
            model: 'pedido',  
            key: 'id_pedido'
        },
        allowNull: false,
    },
    id_notificacion: {  
        type: DataTypes.INTEGER,
        references: {
            model: 'notificacion',  
            key: 'id_notificacion' 
        },
        allowNull: false,
    },
    fecha_ped_not: {  
        type: DataTypes.DATE,
        allowNull: false,
    }
}

class Ped_Not extends Model {
    static associate(models) {
      
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PED_NOT_TABLE,  
            modelName: 'Ped_Not',
            timestamps: false,  
        }
    }
}

module.exports = { Ped_Not, ped_notSchema,PED_NOT_TABLE}