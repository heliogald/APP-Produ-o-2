'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      equipamentos.belongsToMany(models.clientes, {
        through: models.usuarios_roles,
        as: 'roles_do_usuario',
        foreignKey: 'equipamento_id'
      })
      equipamentos.belongsToMany(models.itens, {
        through: models.roles_permissoes,
        as: 'roles_das_permissoes',
        foreignKey: 'equipamento_id'
      })
    }
  }
  equipamentos.init({
    equipamento_id: DataTypes.UUID,
    equipamentoModelo: DataTypes.STRING,
    numeroDeSerie: DataTypes.STRING,
    dataDeLiberacao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'equipamentos',
  });
  return equipamentos;
};