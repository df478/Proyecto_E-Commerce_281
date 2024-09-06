const { Departamento, DepartamentoSchema } = require('./departamento.model')

function setUpModels(sequelize) {
    Departamento.init(DepartamentoSchema, Departamento.config(sequelize));
}

module.exports = { setUpModels };