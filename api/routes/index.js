const bodyParser = require("body-parser");

const usuario = require("./usuariosRoute");
const auth = require("./authRoute");
const role = require("./role");
const permissao = require("./permissao");
const seguranca = require("./seguranca");
const cliente = require("./clienteRoute");
const equipamento = require("./equipamentoRouter");
const item = require("./itemRouter");

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    cliente,
    equipamento,
    item,
    role,
    permissao,
    seguranca
  );
};
