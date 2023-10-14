"strict mode";
import User from "./user.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "Docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  aprovaEstudante(estudante, curso) {
    return ` O aluno ${estudante} foi aprovado no curso de ${curso}, do professor ${this.nome}.`;
  }
}
