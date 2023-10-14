export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    (this.#nome = nome),
      (this.#email = email),
      (this.#nascimento = nascimento),
      (this.#role = role || "Estudante");
    this.#ativo = ativo;
  }

  //geters
  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  //setters

  set nome(novoNome) {
    if (typeof novoNome !== "string") {
      throw new Error("Precisa enviar uma string como parâmetro");
    } else if (novoNome === "") {
      throw new Error("Vá para a puta que pariu. Envie algo decente.");
    } else {
      const regex = /^[a-zA-ZÀ-ÿ ]+$/;
      if (!regex.test(novoNome)) {
        throw new Error(
          "O nome não pode conter caracteres especiais, apenas letras e acentos."
        );
      }
      this.#nome = novoNome;
    }
  }

  set email(novoEmail) {
    this.#email = novoEmail;
  }

  set nascimento(novoNascimento) {
    this.#nascimento = novoNascimento;
  }

  set role(novaRole) {
    this.#role = novaRole;
  }

  set ativo(novoStatus) {
    this.#ativo = novoStatus;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role} `;
  }
}
