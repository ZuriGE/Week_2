const myClass = require('./person');

let persona1 = new myClass ('Ana',150,60,1987,['Cine']);
let persona2 = new myClass ('Óscar',178,120,1964,[]);
let persona3 = new myClass ('Peru',210,95,2001,['Baloncesto','Esconder cosas de los armarios altos','Mirar por encima del hombro']);
let persona4 = new myClass ('June',168,65,1996);

console.log(persona1.calcIMC());
console.log(persona2.caclEdad());
persona3.printAll();
persona4.printHobbies();
persona3.printHobbies();
persona2.printHobbies();
persona1.printHobbies();