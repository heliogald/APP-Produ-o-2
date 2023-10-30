const { v4: uuidv4 } = require("uuid");
const database = require("../models");


class ItemService {
  async cadastrarItens(dto) {
    const item = await database.itens.findOne({
      where: {
        voidd: dto.voidd,
      },
    });

    if (item) {
      throw new Error("Item já cadastrado!");
    }

    try {
      const newItem = await database.itens.create({
        id: uuidv4(),
        codigo: dto.codigo,
        descricao: dto.descricao,
        quantidade: dto.quantidade,
        voidd: dto.voidd
      });

      return newItem;
    } catch (error) {
      console.error("Message error ", error.message);
      throw error;
    }
  }

  async buscarTodosItens() {
    const item = await database.itens.findAll();

    return item;
  }

  async buscarItemPorId(id) {
    const item = await database.itens.findOne({
      where: {
        id: id,
      },
    });
    if (!item) {
      throw new Error("Item informado não cadastrado!");
    }

    return item;
  }
  async deletarItemPorId(id) {
    const item = await database.itens.findOne({
      where: {
        id: id,
      },
    });
    if (!item) {
      throw new Error("Item informado não cadastrado!");
    }
    try {
      await database.itens.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }

  async editarItem(dto) {
    const item = await database.itens.findOne({
      where: {
        id: dto.id,
      },
    });
    if (!item) {
      throw new Error("Item informado não cadastrado");
    }
    try {
      item.codigo = dto.codigo,
      item.descricao = dto.descricao,
      item.quantidade = dto.quantidade,
      item.voidd = dto.voidd

      await item.save();

      return await item.reload();
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }
}

module.exports = ItemService;
