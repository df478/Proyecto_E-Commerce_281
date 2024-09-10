const { Model, DataTypes, Sequelize } = require('sequelize')

const CARRITO_TABLE = 'carrito'

const carritoSchema = {
    id_carrito: {  
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
}

class Carrito extends Model {
    static associate(models) {
        
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CARRITO_TABLE,  
            modelName: 'Carrito',
            timestamps: false,  
        }
    }
}

module.exports = { Carrito, carritoSchema, CARRITO_TABLE }
