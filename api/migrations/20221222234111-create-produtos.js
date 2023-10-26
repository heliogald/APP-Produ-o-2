'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      nomeCliente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      equipamentoModelo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numeroDeSerie: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataDeLiberacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      codigo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      voidd: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos')
  }
}