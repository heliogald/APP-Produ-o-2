'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      itens.belongsToMany(models.equipamentos, {
        through: models.produto,
        as: 'itens_do_equipamento',
        foreignKey: 'equipamento_id'
      })
      itens.belongsToMany(models.clientes, {
        through: models.produto,
        as: 'itens_do_ciente',
        foreignKey: 'itens_id'
      })
    }
  }
  itens.init({    
    codigo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    voidd: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'itens',
  });
  return itens;
};