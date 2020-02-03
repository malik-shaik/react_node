class Animal {
  type;
  constructor(name) {
    this.name = name;
  }
  setType(type) {
    this.type = type;
  }
}

const animal = new Animal("Max");
animal.setType("Dog");

console.log(animal.name);
console.log(animal.type);
