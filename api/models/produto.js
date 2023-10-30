'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class produto extends Model {
    static associate(models) {

    }
  }
  produto.init({
    equipamento_id: DataTypes.UUID,
    iten_id: DataTypes.UUID
    
  }, {
    sequelize,
    modelName: 'produto',
  })
  return produto
}