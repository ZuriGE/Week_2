import { Person } from "./person"

let persona1 = new Person('Jon',38,'calle falsa, 123')

persona1.printName();

console.log(persona1.yearOfBirth(2023));

console.log(persona1.getAddress());
persona1.setAddress('otra calle, 32');
console.log(persona1.getAddress());
