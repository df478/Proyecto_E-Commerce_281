const { Model, DataTypes, Sequelize } = require('sequelize')
const { CLIENTE_TABLE } = require("./cliente.model");
const CARRITO_TABLE = 'carrito'

const CarritoSchema = {
    id_carrito: {  
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_usuario: {
        field: "id_usuario",
        allowNull: true,
        unique: true,  // Esto asegura que un cliente solo tenga un carrito
        type: DataTypes.INTEGER,
        references: {
            model: CLIENTE_TABLE,
            key: "id_usuario",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
       
      },
}

class Carrito extends Model {
    static associate(models) {
        this.hasOne(models.Pedido, {
            as: "pedido",
            foreignKey: "id_carrito",
        });
        this.hasMany(models.Aniade, {
            as: "aniade",
            foreignKey: "id_carrito",
        });
        this.belongsTo(models.Cliente, {
            as: 'cliente',
            foreignKey: "id_usuario"
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
