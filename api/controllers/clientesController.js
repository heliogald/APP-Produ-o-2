const ClienteService = require("../services/clienteService");
const clienteService = new ClienteService();
class ClienteController {
  static async cadastrarCliente(req, res) {
    const { nomeCliente } = req.body;

    try {
      const cliente = await clienteService.cadastrarCliente({
        nomeCliente,
      });
      res.status(201).json(cliente);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }

  static async buscarTodosClientes(req, res) {
    const cliente = await clienteService.buscarTodosClientes();

    res.status(200).json(cliente);
  }

  static async buscarClientePorId(req, res){
    try {
      const { id } = req.params;
      const cliente = await clienteService.buscarClientePorId(id);
      res.status(200).json(cliente);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }

  static async deletarClientePorId(req, res) {
    const { id } = req.params;
    try {
      await clienteService.deletarClientePorId(id);
      res.status(200).send({ message: "Cliente deletado com sucesso!" });
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }

  static async editarCliente(req, res){
    const { id } = req.params;
    const { nomeCliente } = req.body;

    try{
      const cliente = await clienteService.editarCliente({
        id,
        nomeCliente,
      })
      res.status(200).json(cliente);
    }catch(error){
      console.log("Message error ", error.message);
      res.status(400).send( { message: error.message} )
    }
  }
}

module.exports = ClienteController;
