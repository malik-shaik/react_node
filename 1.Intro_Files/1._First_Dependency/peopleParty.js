const faker = require("faker");
const Student = require("../Student");

let students = [];

for (let i = 0; i < 10; i++) {
  const student = new Student(faker.name.findName());
  console.log(student.name);
  students.push(student);
}

console.log(students);
