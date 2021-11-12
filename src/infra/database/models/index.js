const { AtleticaModel } = require("./Atletica");
const { CursoModel } = require("./Curso");
const { UsuarioModel } = require("./Usuario");
const { PostagemModel } = require("./Postagem");
const { EtiquetaModel } = require("./Etiqueta");
const { EtiquetaPostagemModel } = require("./EtiquetaPostagem");
const { CampeonatoModel } = require("./Campeonato");
const { ParticipanteModel } = require("./Participante");

exports.Models = {
  AtleticaModel,
  CursoModel,
  UsuarioModel,
  PostagemModel,
  EtiquetaModel,
  EtiquetaPostagemModel,
  CampeonatoModel,
  ParticipanteModel,
};
