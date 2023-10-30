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
        through: models.produto,
        as: 'equipamento_do_cliente',
        foreignKey: 'equipamento_id'
      })
      equipamentos.belongsToMany(models.itens, {
        through: models.produto,
        as: 'itens_do_equipamento',
        foreignKey: 'itens_id'
      })
    }
  }
  equipamentos.init({    
    equipamentoModelo: DataTypes.STRING,
    numeroDeSerie: DataTypes.STRING,
    dataDeLiberacao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'equipamentos',
  });
  return equipamentos;
};