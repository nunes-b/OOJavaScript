import User from "./user.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = "Docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  aprovaEstudante(estudante, curso) {
    return ` O aluno ${estudante} foi aprovado no curso de ${curso}, do professor ${this.nome}.`;
  }
}

const novo = new Docente("Docente da Silva Jr", "d@d.com.br", "05/04/2003");

console.log(novo);
console.log(novo.exibirInfos());
console.log(novo.aprovaEstudante("Vitin Sapeca", "Agronomia"));
