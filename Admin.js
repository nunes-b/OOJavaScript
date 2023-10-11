import User from "./user.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "Admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  criaCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas!`;
  }
}

const novo = new Admin("Rômulo", "r@r.com.br", "05/05/2005");

console.log(novo);
console.log(novo.exibirInfos());
console.log(novo.criaCurso("JavaScript", 100));
