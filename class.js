class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    (this.nome = nome),
      (this.email = email),
      (this.nascimento = nascimento),
      (this.role = role || "Estudante");
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}.`;
  }
}

const novoUsuario = new User("Rômulo", "email@romulo.com", "2022/02/20");

console.log(novoUsuario.exibirInfos());
console.log(novoUsuario);
