// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email)
    this.school = school
  }
  getSchool(){
    return this.school
  }

  getName(){
    return this.name
  }
  getId(){
    return this.id
  }

  getRole() {
    return "Intern"
  }
}
module.exports = intern