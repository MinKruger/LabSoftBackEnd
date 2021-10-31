const { AtleticaModel } = require("./Atletica");
const { CursoModel } = require("./Curso");
const { UsuarioModel } = require("./Usuario");
const { PostagemModel } = require("./Postagem");
const { EtiquetaModel } = require("./Etiqueta");
const { EtiquetaPostagemModel } = require("./EtiquetaPostagem");

exports.Models = {
  AtleticaModel,
  CursoModel,
  UsuarioModel,
  PostagemModel,
  EtiquetaModel,
  EtiquetaPostagemModel
};
