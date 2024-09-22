const { Model, DataTypes, Sequelize } = require("sequelize");

const USU_NOR_ADMIN_TABLE = "usu_nor_admin";

const UsuNorAdminSchema = {
  id_supervisado: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  id_usuario_admin: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'administrador',         
      key: 'id_usuario',         
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  id_usuario_artesano: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'artesano',         
      key: 'id_usuario',          
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  id_usuario_cliente: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'cliente',         
      key: 'id_usuario',          
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  id_usuario_delivery: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'delivery',         
      key: 'id_usuario',          
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class UsuNorAdmin extends Model {
  static associate(models) {
    
    this.belongsTo(models.Artesano, {
      as: 'artesano'
    });

    this.belongsTo(models.Cliente, {
      as: 'cliente'
    });

    this.belongsTo(models.Admintrador, {
      as: 'administrador'
    });

    this.belongsTo(models.Delivery, {
      as: 'delivery'
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