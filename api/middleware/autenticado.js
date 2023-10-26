const { verify, decode } = require("jsonwebtoken");
const jsonSecret = require("../config/jsonSecret");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Access token não informado!");
  }

  const [, accesToken] = token.split(" ");

  try {
    verify(accesToken, jsonSecret.secret);

    const { id, email } = await decode(accesToken);

    req.usuarioId = id;
    req.usuarioEmail = email;

    return next();
  } catch (error) {
    res.status(401).send("Usuário não autorizado!");
  }
};
