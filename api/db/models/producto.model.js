const { Model, DataTypes, Sequelize } = require('sequelize')

const PRODUCTO_TABLE = 'producto'

const productoSchema = {
    id_producto: {  
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_artesano: {  
        type: DataTypes.INTEGER,
        references: {
            model: 'artesano',  
            key: 'id_artesano'  
        },
        allowNull: false,
    },
    id_promocion: {  
        type: DataTypes.INTEGER,
        references: {
            model: 'promocion',  
            key: 'id_promocion'  
        },
        allowNull: false,  
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
        type: DataTypes.STRING,
        allowNull: false,  
    },
    stock_producto: {  
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

class Producto extends Model {
    static associate(models) {
        
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

module.exports = { Producto, productoSchema, PRODUCTO_TABLE };
