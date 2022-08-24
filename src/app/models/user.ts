export class User {
  static id: number = 1;
  userId: number;
  fname: string;
  lname: string;
  email: string;
  password: string;
  gender: string;
  address: string;
  age: number;
  constructor(fname: string, lname: string, email: string, password: string, gender: string, address: string, age: number) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.address = address;
    this.age = age;
    this.gender = gender;
    this.password = password;
    this.userId = User.id;
    User.id++;
  }
}
