const { Model, DataTypes, Sequelize } = require('sequelize');

const CLIENTE_TABLE = 'cliente';

const ClienteSchema = {
    id_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 50]
        }
    },
    email_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 20]
        }
    },
    tipo_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['cliente']]
        }
    },
    fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false
    },
    nro_compras: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0
        }
    }
};

class Cliente extends Model {
    static associate(models) {
        this.hasMany()
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CLIENTE_TABLE,
            modelName: 'Cliente',
            timestamps: false
        }
    }
}

module.exports = { Cliente, ClienteSchema, CLIENTE_TABLE };
