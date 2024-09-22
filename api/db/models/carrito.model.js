const { Model, DataTypes, Sequelize } = require('sequelize')

const CARRITO_TABLE = 'carrito'

const CarritoSchema = {
    id_carrito: {  
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
}

class Carrito extends Model {
    static associate(models) {
        this.hasOne(models.Pedido, {
            as: "pedido",
            foreignKey: "id_carrito",
        });
        this.hasMany(models.ProPromCliCar, {
            as: "ProPromCliCar",
            foreignKey: "id_carrito",
        });
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

module.exports = { Carrito, CarritoSchema, CARRITO_TABLE }
