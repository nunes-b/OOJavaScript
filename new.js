// function User(name, email) {
//   this.name = name;
//   this.email = email;

//   this.showInfos = function () {
//     return `${this.name}, ${this.email}`;
//   };
// }

// function Admin(role) {
//   User.call(this, "Rômulo", "r@r.com");
//   this.role = role || "student";
// }

// Admin.prototype = Object.create(User.prototype);

// const newUser = new Admin("admin");

// console.log(newUser.showInfos());
// console.log(newUser.role);
