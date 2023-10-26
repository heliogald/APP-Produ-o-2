const { v4: uuidv4 } = require("uuid");
const database = require("../models");

class ProdutoService {
  async cadastrarProduto(dto) {
    const produto = await database.produtos.findOne({
      where: {
        nomeCliente: dto.nomeCliente,
      },
    });

    if (produto) {
      throw new Error("Produto já cadastrado");
    }

    try {
      const newProduto = await database.produtos.create({
        id: uuidv4(),
        nomeCliente: dto.nomeCliente,
        equipamentoModelo: dto.equipamentoModelo,
        numeroDeSerie: dto.numeroDeSerie,
        dataDeLiberacao: dto.dataDeLiberacao,
        codigo: dto.codigo,
        descricao: dto.descricao,
        quantidade: dto.quantidade,
        voidd: dto.voidd,
      });

      return newProduto;
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }

  async buscarTodosProdutos() {
    const produtos = await database.produtos.findAll();

    return produtos;
  }

  async buscarProdutoPorId(id) {
    const produto = await database.produtos.findOne({
      where: {
        id: id,
      },
    });

    if (!produto) {
      throw new Error("Produto informado não cadastrado!");
    }

    return produto;
  }

  async deletarProdutoPorId(id) {
    const produto = await database.produtos.findOne({
      where: {
        id: id,
      },
    });

    if (!produto) {
      throw new Error("Produto informado não cadastrado!");
    }

    try {
      await database.produtos.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }

  async editarProduto(dto) {
    const produto = await database.produtos.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!produto) {
      throw new Error("Produto informado não cadastrado!");
    }

    try {
        produto.nomeCliente = dto.nomeCliente,
        produto.equipamentoModelo = dto.equipamentoModelo,
        produto.numeroDeSerie = dto.numeroDeSerie,
        produto.dataDeLiberacao = dto.dataDeLiberacao,
        produto.codigo = dto.codigo,
        produto.descricao = dto.descricao,
        produto.quantidade = dto.quantidade,
        produto.voidd = dto.voidd;

      await produto.save();

      return await produto.reload();
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }
}

module.exports = ProdutoService;
