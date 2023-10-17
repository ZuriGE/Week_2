const myClass = require('./contacts');
const myClass2 = require('./person');

let persona1 = new myClass2 ('Ana',150,60,1987,['Cine']);
let persona2 = new myClass2 ('Óscar',178,120,1964,[]);

let gente = new myClass();

gente.people.push(persona1)
gente.people.push(persona2)

gente.printPersons()


