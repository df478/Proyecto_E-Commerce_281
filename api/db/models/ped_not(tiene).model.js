const { Model, DataTypes } = require('sequelize');

const PED_NOT_TABLE = 'pedNot'; //nombre de la tabla

const PedNotSchema = {
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
};

class PedNot extends Model {
    // No es necesario definir asociaciones en el método associate aquí
    static associate(models) {
        // Las asociaciones se definen en los modelos que utilizan esta tabla intermedia
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PED_NOT_TABLE,  
            modelName: 'PedNot', // Nombre del modelo exportado
            timestamps: false,  
        };
    }
}

module.exports = { PedNot, PedNotSchema, PED_NOT_TABLE };
