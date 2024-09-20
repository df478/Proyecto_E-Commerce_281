const { Departamento, DepartamentoSchema } = require('./departamento.model');
const { Provincia, ProvinciaSchema } = require('./provincia.model');

const { Cliente, ClienteSchema} = require('./cliente.model');


function setUpModels(sequelize) {
    Departamento.init(DepartamentoSchema, Departamento.config(sequelize));
    Provincia.init(ProvinciaSchema, Provincia.config(sequelize));
    Cliente.init(ClienteSchema, Cliente.config(sequelize));

    Departamento.associate(sequelize.models);
    Provincia.associate(sequelize.models);
}

module.exports = { setUpModels };