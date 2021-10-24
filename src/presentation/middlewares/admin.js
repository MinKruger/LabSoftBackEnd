const {
  UsuarioRepository,
} = require("../../data/repositories/UsuarioRepository");
const { ForbiddenException } = require("../errors/ForbiddenException");

const usuarioRepository = new UsuarioRepository();

exports.middlewareRoleAdmin = async (req, res, next) => {
  const user = await usuarioRepository.findById(req.userID);

  if (!["dce1", "dce2", "dce3"].includes(user.permissao)) {
    throw new ForbiddenException("User is not admin");
  }

  next();
};
