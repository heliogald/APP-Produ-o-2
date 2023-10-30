const EquipamentoService = require("../services/equipamentoService");
const ClienteController = require("./clientesController");
const equipamentoService = new EquipamentoService();

class EquipamentosController {
  static async cadastrarEquipamento(req, res) {
    const { equipamentoModelo, numeroDeSerie, dataDeLiberacao } = req.body;

    try {
      const equipamento = await equipamentoService.cadastrarEquipamento({
        equipamentoModelo,
        numeroDeSerie,
        dataDeLiberacao,
      });
      res.status(200).json(equipamento);
    } catch (error) {
      console.log("Message error: ", error.mesaage);
      res.status(400).send({ message: error.message });
    }
  }

  static async buscarTodosEquipamento(req, res) {
    const equipamento = await equipamentoService.buscarTodosEquipamento();

    res.status(200).json(equipamento);
  }

  static async buscarEquipamentoPorId(req, res) {
    try {
      const { id } = req.params;
      const equipamento = await equipamentoService.buscarEquipamentoPorId(id);
      res.status(200).json(equipamento);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }

  static async deletarEquipamentoPorId(req, res) {
    const { id } = req.params;
    try {
      await equipamentoService.deletarEquipamentoPorId(id);
      res.status(200).send({ message: "Equipamento deletado com sucesso!" });
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }

  static async editarEquipamento(req, res) {
    const { id } = req.params;
    const { equipamentoModelo, numeroDeSerie, dataDeLiberacao } = req.body;
    try {
      const equipamento = await equipamentoService.editarEquipamento({
        id,
        equipamentoModelo,
        numeroDeSerie,
        dataDeLiberacao
      })
      res.status(200).json(equipamento);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.mesaage });
    }
  }
}

module.exports = EquipamentosController;
