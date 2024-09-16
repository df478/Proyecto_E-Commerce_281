const { Model, DataTypes, Sequelize } = require('sequelize')

const PROMOCION_TABLE = 'promocion'

const promocionSchema = {
    id_promocion: {  
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    descuento_promocion: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
    },
    fecha_ini: {  
        type: DataTypes.DATEONLY, 
        allowNull: false,  
    },
    fecha_fin: {  
        type: DataTypes.DATEONLY, 
        allowNull: false,  
    },
    nombre_promocion: {  
        type: DataTypes.STRING,
        allowNull: false,  
    }
}

class Promocion extends Model {
    static associate(models) {
        // Una promoción tiene muchos productos (1 : n)
        this.hasMany(models.Producto, {
            foreignKey: 'id_promocion',
            as: 'producto'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PROMOCION_TABLE,
            modelName: 'Promocion',
            timestamps: false,
        }
    }
}

module.exports = { Promocion, promocionSchema, PROMOCION_TABLE }
