const {
  UsuarioRepository,
} = require("../../data/repositories/UsuarioRepository");
const { ForbiddenException } = require("../errors/ForbiddenException");

const usuarioRepository = new UsuarioRepository();

exports.middlewarePermissionDCE2AndDCE3 = async (req, res, next) => {
  const user = await usuarioRepository.findById(req.userID);
  console.log('asdasdasd')
  if (!["dce2", "dce3"].includes(user.permissao)) {
    throw new ForbiddenException("User is not authorized");
  }

  next();
};
