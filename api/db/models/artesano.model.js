const { Model, DataTypes, Sequelize } = require('sequelize');

const ARTESANO_TABLE = 'artesano';
const ArtesanoSchema = {
    
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
            isIn: [['artesano']]
        }
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calificacion: {
        type: DataTypes.INTEGER,
        defaultValue: 10,
        validate: {
            min: 1
        }
    },
    id_comunidad: {
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Comunidad",
            key: "id_comunidad",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    }
}

class Artesano extends Model {
    
    static associate(models) {
        this.belongsTo(models.Comunidad, {
            as: "comunidad",
            foreignKey: "id_comunidad",
        });
        this.hasMany(models.Producto, {
            as: "producto",
            foreignKey: "id_usuario",
        });
        this.hasMany(models.Producto, {
            as: "pago",
            foreignKey: "id_usuario",
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ARTESANO_TABLE,
            modelName: 'Artesano',
            timestamps: false,
        }
    }
}

module.exports = { Artesano,ArtesanoSchema,ARTESANO_TABLE}