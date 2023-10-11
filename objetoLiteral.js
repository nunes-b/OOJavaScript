// Objeto literal
const user = {
  nome: "Rômulo",
  email: "contato@romulo.com.br",
  nascimento: "05/00/0000",
  role: "Estudante/Progamador",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Rômulo",
  email: "contato@romulo.com.br",
  nascimento: "00/03/000",
  role: "admin",
  ativo: true,
  criarCurso: function () {
    console.log("Curso criado com sucesso");
  },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
