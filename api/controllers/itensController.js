const ItemService = require("../services/itemService");
const itemService = new ItemService();

class ItemController  {
  static async cadastrarItens(req, res) {
    const { codigo, descricao, quantidade, voidd } = req.body;

    try {
      const item = await itemService.cadastrarItens({
        codigo,
        descricao, 
        quantidade, 
        voidd
      });
      res.status(200).json(item);
    } catch (error) {
      console.log("Message error: ", error.mesaage);
      res.status(400).send({ message: error.message });
    }
  }

  static async buscarTodosItens(req, res) {
    const item = await itemService.buscarTodosItens();

    res.status(200).json(item);
  }

  static async buscarItemPorId(req, res) {
    try {
      const { id } = req.params;
      const item = await itemService.buscarItemPorId(id);
      res.status(200).json(item);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }
  
  static async deletarItemPorId(req, res) {
    const { id } = req.params;
    try {
      await itemService.deletarItemPorId(id);
      res.status(200).send({ message: "Item deletado com sucesso!" });
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }

  static async editarItem(req, res) {
    const { id } = req.params;
    const { codigo, descricao, quantidade, voidd } = req.body;
    try {
      const item = await itemService.editarItem({
        id,
        codigo, 
        descricao, 
        quantidade, 
        voidd
      })
      res.status(200).json(item);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.mesaage });
    }
  }
}

module.exports = ItemController;
