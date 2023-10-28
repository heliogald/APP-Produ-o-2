const { v4: uuidv4 } = require("uuid");
const database = require("../models");
class ClienteService {
  async cadastrarCliente(dto) {
    const cliente = await database.clientes.findOne({
      where: {
        nomeCliente: dto.nomeCliente,
      },
    });

    if (cliente) {
      throw new Error("Cliente já cadastrado!");
    }

    try {
      const newCliente = await database.clientes.create({
        id: uuidv4(),
        nomeCliente: dto.nomeCliente,
      });

      return newCliente;
    } catch (error) {
      console.error("Message error ", error.message);
      throw error;
    }
  }

  async buscarTodosClientes() {
    const cliente = await database.clientes.findAll();

    return cliente;
  }

  async buscarClientePorId(id) {
    const cliente = await database.clientes.findOne({
      where: {
        id: id,
      },
    });
    if (!cliente) {
      throw new Error("Cliente informado não cadastrado!");
    }

    return cliente;
  }
  async deletarClientePorId(id) {
    const cliente = await database.clientes.findOne({
      where: {
        id: id,
      },
    });
    if (!cliente) {
      throw new Error("Cliente informado não cadastrado!");
    }
    try {
      await database.clientes.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }

  async editarCliente(dto) {
    const cliente = await database.clientes.findOne({
      where: {
        id: dto.id,
      },
    });
    if (!cliente) {
      throw new Error("Cliente informado não cadastrado");
    }
    try {
      cliente.nomeCliente = dto.nomeCliente;

      await cliente.save();

      return await cliente.reload();
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }
}

module.exports = ClienteService;
