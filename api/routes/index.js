const bodyParser = require("body-parser");

const produto = require("./produtoRoute");
const usuario = require("./usuariosRoute");
const auth = require("./authRoute");
const role = require("./role");
const permissao = require("./permissao");
const seguranca = require("./seguranca");
const cliente = require("./clienteRoute");

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    produto,
    cliente,
    role,
    permissao,
    seguranca    
  );
};
