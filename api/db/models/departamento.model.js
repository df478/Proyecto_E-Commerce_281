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
    }
}

class Departamento extends Model {
    static associate(models) {

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