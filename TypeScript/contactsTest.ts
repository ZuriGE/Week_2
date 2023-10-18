import { Person } from "./person";
import { Contacts } from "./contacts";

let persona1 = new Person('Jon',38,'calle falsa, 123');
let persona2 = new Person('Ane',22,'paseo de mentira, 4');
let persona3 = new Person('Unai',13,'calle de mi casa');
let persona4 = new Person('Bea',54,'la casa de al lado');

let agenda = new Contacts()

agenda.people.push(persona1)
agenda.people.push(persona2)
agenda.people.push(persona3)
agenda.people.push(persona4)

agenda.printCalendar();
agenda.printCalendarPorAtributo();