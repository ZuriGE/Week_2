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

module.exports = Contacts;

