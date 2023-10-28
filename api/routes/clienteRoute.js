const { Router } = require("express");
const ClientesController = require("../controllers/clientesController")
const roles = require('../middleware/roles')
const permissoes = require('../middleware/permissoes')
const permissoesRoles = require('../middleware/permissoesRoles');


const router = Router();

router
    .post('/cliente', permissoes(["adicionar"]), ClientesController.cadastrarCliente)
    .get('/cliente', permissoes(["listar"]), ClientesController.buscarTodosClientes)
    .get('/cliente/id/:id', permissoes(["listar"]), ClientesController.buscarClientePorId)
    .delete('/cliente/id/:id', roles(["Gerente"]), ClientesController.deletarClientePorId)
    .put('/cliente/id/:id', permissoes(["editar"]), ClientesController.editarCliente)

module.exports = router    