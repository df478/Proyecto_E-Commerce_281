const { Model, DataTypes, Sequelize } = require('sequelize');
const DEPARTAMENTO_TABLE = 'departamento';
const DepartamentoSchema = {
    id_depto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    }, 
    ndepto: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: [3, 50]
        }
    }
}

class Departamento extends Model {
    static associate(models) {
        this.hasMany(
            models.Provincia,
            {
                as:'provincia',
                foreignKey: 'id_depto'
            }
        )
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: DEPARTAMENTO_TABLE,
            modelName: 'Departamento',
            timestamps: false,
        }
    }
}

module.exports = { Departamento, DepartamentoSchema, DEPARTAMENTO_TABLE}