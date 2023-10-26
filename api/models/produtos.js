'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {
    static associate(models) {
      
    }
  }
  produtos.init({
    nomeCliente: DataTypes.STRING,
    equipamentoModelo: DataTypes.STRING,
    numeroDeSerie: DataTypes.STRING,
    dataDeLiberacao: DataTypes.DATE,
    codigo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    voidd: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'produtos',
  })
  return produtos
}