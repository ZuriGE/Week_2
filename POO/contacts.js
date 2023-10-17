const myClass = require('./person');

class Contacts {
    constructor (){
        this.people= [];
    }


    printPersons (){
        this.people.forEach((value)=> {
            value.printAll()
        })
       
    }
  
}


let persona1 = new myClass ('Ana',150,60,1987,['Cine']);
let persona2 = new myClass ('Óscar',178,120,1964,[]);


let gente = new Contacts();
gente.people.push(persona1)
gente.people.push(persona2)

gente.printPersons()



module.exports = Contacts;