const { Model, DataTypes, Sequelize } = require("sequelize");

const USU_NOR_ADMIN_TABLE = "usu_nor_admin";

const UsuNorAdminSchema = {
  id_usuario: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios',         
      key: 'id_usuario',         
    }
  },
  id_usuario2: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios',         
      key: 'id_usuario',          
    }
  },
};

class UsuNorAdmin extends Model {
  static associate(models) {
    
    this.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario1'
    });

    this.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario2',
      as: 'usuario2'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USU_NOR_ADMIN_TABLE,
      modelName: "UsuNorAdmin",
      timestamps: false,          
    };
  }
}

module.exports = { UsuNorAdmin, UsuNorAdminSchema, USU_NOR_ADMIN_TABLE };