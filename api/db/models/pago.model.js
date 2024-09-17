const { Model, DataTypes, Sequelize } = require('sequelize');

const PAGO_TABLE = 'pago';

const PagoSchema = {
    id_pago: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pedido',
            key: 'id_pedido'
        }
    },
    id_artesano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'artesano',
            key: 'id_artesano'
        }
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cliente',
            key: 'id_cliente'
        }
    },
    id_delivery: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'delivery',
            key: 'id_delivery'
        }
    },
    fecha_pago: {
        type: DataTypes.DATE,
        allowNull: false
    }
};

class Pago extends Model {
    static associate(models) {
        
        this.belongsTo(models.Pedido, {
            foreignKey: 'id_pedido',
            as: 'pedido'
        });

        this.belongsTo(models.Artesano, {
            foreignKey: 'id_artesano',
            as: 'artesano'
        });

        this.belongsTo(models.Cliente, {
            foreignKey: 'id_cliente',
            as: 'cliente'
        });

        this.belongsTo(models.Delivery, {
            foreignKey: 'id_delivery',
            as: 'delivery'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PAGO_TABLE,
            modelName: 'Pago',
            timestamps: false
        }
    }
}

module.exports = { Pago, PagoSchema, PAGO_TABLE };
