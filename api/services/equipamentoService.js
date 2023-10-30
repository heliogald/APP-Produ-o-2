const { v4: uuidv4 } = require("uuid");
const database = require("../models");

class EquipamentoService {
  async cadastrarEquipamento(dto) {
    const equipamento = await database.equipamentos.findOne({
      where: {
        numeroDeSerie: dto.numeroDeSerie,
      },
    });
    if (equipamento) {
      throw new Error("Equipameto já cadastrado!");
    }
    try {
      const newEquipamento = await database.equipamentos.create({
        id: uuidv4(),
        equipamentoModelo: dto.equipamentoModelo,
        numeroDeSerie: dto.numeroDeSerie,
        dataDeLiberacao: dto.dataDeLiberacao,
      });
      return newEquipamento;
    } catch (error) {
      console.log("Message error: ", error.message);
      throw error;
    }
  }

  async buscarTodosEquipamento() {
    const equipamento = await database.equipamentos.findAll();

    return equipamento;
  }

  async buscarEquipamentoPorId(id) {
    const equipamento = await database.equipamentos.findOne({
      where: {
        id: id,
      },
    });
    if (!equipamento) {
      throw new Error("Equipamento informado não cadastrado!");
    }

    return equipamento;
  }

  async deletarEquipamentoPorId(id) {
    const equipamento = await database.equipamentos.findOne({
      where: {
        id: id,
      },
    });
    if (!equipamento) {
      throw new Error("Equipamento informado não cadastrado!");
    }
    try {
      await database.equipamentos.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }

  async editarEquipamento(dto) {
    const equipamento = await database.equipamentos.findOne({
      where: {
        id: dto.id,
      },
    });
    if (!equipamento) {
      throw new Error("Equipamento informado não cadastrado");
    }
    try {
      equipamento.equipamentoModelo = dto.equipamentoModelo,
      equipamento.numeroDeSerie = dto.numeroDeSerie,
      equipamento.dataDeLiberacao = dto.dataDeLiberacao      

      await equipamento.save();

      return await equipamento.reload();
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }
}

module.exports = EquipamentoService;
