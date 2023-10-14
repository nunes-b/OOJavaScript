import User from "./user.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User("Romulo", "Juvenal@gmail.com", "20/20/20");
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Juvena", "u@u.com.br", "20/20/20");
console.log(novoAdmin.nome);
novoAdmin.nome = "Murilo";
console.log(novoAdmin.nome);
console.log(novoAdmin.exibirInfos());

// const novoDocente = new Docente("Docente", "d@d.com.br");
// console.log(novoDocente);
