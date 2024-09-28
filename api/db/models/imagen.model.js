const { Model, DataTypes, Sequelize } = require('sequelize');
const { PRODUCTO_TABLE } = require("./producto.model");


const IMAGEN_TABLE = 'imagen';
const ImagenSchema = {
    
    id_imagen: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    url_imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true 
        }
    },
    id_producto: {
        field: "id_producto",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: PRODUCTO_TABLE,
            key: "id_producto",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
}

class Imagen extends Model {
    
    static associate(models) {      
        this.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "id_producto", 
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: IMAGEN_TABLE,
            modelName: "Imagen",
            timestamps: false,
        }
    }
}

module.exports = { Imagen,ImagenSchemaSchema, IMAGEN_TABLE}