const { Router } = require("express");
const ItensController = require("../controllers/itensController")
const roles = require('../middleware/roles')
const permissoes = require('../middleware/permissoes')
const permissoesRoles = require('../middleware/permissoesRoles');


const router = Router();

router
    .post('/item', permissoes(["adicionar"]), ItensController.cadastrarItens)
    .get('/item', permissoes(["listar"]), ItensController.buscarTodosItens)
    .get('/item/id/:id', permissoes(["listar"]), ItensController.buscarItemPorId)
    .delete('/item/id/:id', roles(["Gerente"]), ItensController.deletarItemPorId)
    .put('/item/id/:id', permissoes(["editar"]), ItensController.editarItem)

module.exports = router    