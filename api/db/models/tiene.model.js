const { Model, DataTypes } = require('sequelize');
const { NOTIFICACION_TABLE} = require("./notificacion.model");
const { PEDIDO_TABLE } = require("./pedido.model");

const TIENE_TABLE = 'tiene'; //nombre de la tabla

const TieneSchema = {
    id_pedido: {  
        field: "id_pedido",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: PEDIDO_TABLE,
            key: "id_pedido",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    id_notificacion: {
        field: "id_notificacion",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: NOTIFICACION_TABLE,
            key: "id_notificacion",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    },
    fecha_tiene: {  
        type: DataTypes.DATE,
        allowNull: false,
    }
};

class Tiene extends Model {
    static associate(models) {
        
        this.belongsTo(models.Notificacion, {
            as: "notificacion",
        });
        this.belongsTo(models.Pedido, {
            as: "pedido",
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TIENE_TABLE,  
            modelName: 'Tiene', // Nombre del modelo exportado
            timestamps: false,  
        };
    }
}

module.exports = { Tiene, TieneSchema, TIENE_TABLE };
