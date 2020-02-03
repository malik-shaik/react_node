class Student {
  classes = [];
  constructor(name) {
    this.name = name;
  }
  addClass(studentClass) {
    this.classes.push(studentClass);
  }
}

module.exports = Student;

const student = new Student("Malik");
student.addClass("React Nodejs");
student.addClass("Svelte Nodejs");
// console.log(student.classes);
