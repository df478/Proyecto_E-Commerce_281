const { Model, DataTypes, Sequelize } = require('sequelize');

const CLIENTE_TABLE = 'cliente';

const ClienteSchema = {
    id_usuario: {
        llowNull: false,
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
            len: [8, 200]
        }
    },
    recovery_token: {
        field: 'recovery_token',
        allowNull: true,
        type: DataTypes.STRING,
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
        
        this.hasMany(models.Resenia, {
            as: "resenia",
            foreignKey: "id_cliente",
        });
        this.hasMany(models.Entrega, {
            as: "entrega",
            foreignKey: 'id_cliente'
        });
        this.hasMany(models.Aniade, {
            as: "aniade",
            foreignKey: "id_cliente",
        });
        this.hasMany(models.Pago, {
            as: "pago",
            foreignKey: 'id_cliente'
        });
        this.hasMany(models.Supervisado, {
            as: "supervisado",
            foreignKey: 'id_cliente'
        });
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
