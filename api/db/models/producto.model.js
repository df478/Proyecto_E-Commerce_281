const { Model, DataTypes, Sequelize } = require('sequelize')
const { PROMOCION_TABLE } = require("./promocion.model");
const { ARTESANO_TABLE } = require("./artesano.model");
const { ARTESANO_TABLE } = require("./imagen.model");


const PRODUCTO_TABLE = 'producto'

const ProductoSchema = {
    id_producto: {  
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_artesano: {  
        field: "id_artesano",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: ARTESANO_TABLE,
            key: "id_usuario",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    id_promocion: {  
        field: "id_promocion",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: PROMOCION_TABLE,
            key: "id_promocion",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    nombre_producto: {  
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio_producto: {  
        type: DataTypes.DECIMAL(10, 2),  
        allowNull: false,
    },
    descripcion_producto: {  
        type: DataTypes.TEXT,
        allowNull: false,  
    },
    stock_producto: {  
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    url_producto: {
        type: DataTypes.STRING,
        allowNull: false, // Hace que el campo sea obligatorio
        validate: {
            isUrl: true // Valida que el formato sea una URL
        }
    }
}

class Producto extends Model {
    static associate(models) {
        // Una promoción tiene muchos productos (1 : n)
        this.belongsTo(models.Promocion, {
            as: 'promocion',
            foreignKey: "id_promocion"
        });
        // Una artesano tiene muchos productos (1 : n)
        this.belongsTo(models.Artesano, {
            as: 'artesano',
            foreignKey: "id_artesano"
        });
        this.hasMany(models.Resenia, {
            as: "resenia",
            foreignKey: "id_producto",
        });
        this.hasMany(models.Aniade, {
            as: "aniade",
            foreignKey: "id_producto",
        });
        this.hasMany(models.Imagen, {
            as: "imagen",
            foreignKey: "id_producto",
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTO_TABLE,  
            modelName: 'Producto',
            timestamps: false, 
        }
    }
}

module.exports = { Producto, ProductoSchema, PRODUCTO_TABLE };
