const { Router } = require("express");
const EquipamentosController = require("../controllers/equipamentosController")
const roles = require('../middleware/roles')
const permissoes = require('../middleware/permissoes')
const permissoesRoles = require('../middleware/permissoesRoles');


const router = Router();

router
    .post('/equipamento', permissoes(["adicionar"]), EquipamentosController.cadastrarEquipamento)
    .get('/equipamento', permissoes(["listar"]), EquipamentosController.buscarTodosEquipamento)
    .get('/equipamento/id/:id', permissoes(["listar"]), EquipamentosController.buscarEquipamentoPorId)
    .delete('/equipamento/id/:id', roles(["Gerente"]), EquipamentosController.deletarEquipamentoPorId)
    .put('/equipamento/id/:id', permissoes(["editar"]), EquipamentosController.editarEquipamento)

module.exports = router    