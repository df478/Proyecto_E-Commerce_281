const { Model, DataTypes, Sequelize } = require('sequelize')

const NOTIFICACION_TABLE = 'notificacion'

const notificacionSchema = {
    id_notificacion: {  
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    descripcion_notificacion: {  
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_notificacion: {  
        type: DataTypes.STRING,
        allowNull: false,
    }
}

class Notificacion extends Model {
    static associate(models) {
        this.hasMany(models.Tiene, {
            as: "tiene",
            foreignKey: "id_notificacion",
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: NOTIFICACION_TABLE,  
            modelName: 'Notificacion',
            timestamps: false,  
        }
    }
}

module.exports = { Notificacion, notificacionSchema, NOTIFICACION_TABLE }
