class User {
  constructor(firstname, lastname, credit) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.credit = credit;
  }
  getFullName() {
    let fullname = `${this.firstname} ${this.lastname} is my full name`;
    return fullname;
    //do this in just 1 line
  }
  editName(newname) {
    const myname = newname.split(" ");
    this.firstname = myname[0];
    this.lastname = myname[1];
    //take a middle name too
  }
}

class Teacher extends User {
  constructor(firstname, lastname, credit, subject) {
    super(firstname, lastname, credit);
    this.subject = subject;
  }
  getFullName() {
    let fullname = `${this.firstname} ${
      this.lastname
    } is my full name and I teach ${this.subject}`;
    return fullname;
  }
  favDrink(name) {
    console.log(`My fav. drink is ${name}`);
  }
}

const john = new Teacher("John", "Anderson", 34, "Python");
//console.log(john);
console.log(john.getFullName());
john.editName("Johnny Anderson");
console.log(john.getFullName());
john.favDrink("IceTea");

// const sammy = new User();
// console.log(sammy);
