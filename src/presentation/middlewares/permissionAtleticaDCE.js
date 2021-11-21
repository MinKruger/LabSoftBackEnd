const {
  UsuarioRepository,
} = require("../../data/repositories/UsuarioRepository");
const { ForbiddenException } = require("../errors/ForbiddenException");

const usuarioRepository = new UsuarioRepository();

exports.middlewarePermissionAtleticaDCE = async (req, res, next) => {
  /* const user = await usuarioRepository.findById(req.userID);

  if (!["atletica", "dce1", "dce2", "dce3"].includes(user.permissao)) {
    throw new ForbiddenException("User is not authorized");
  } */

  next();
};
