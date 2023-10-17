class Person {
    constructor (name, height, weight, yearOfBirth, hobbies){
        this.name = name;
        this.id;
        this.height = height;
        this.weight = weight;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }

    calcIMC (){
        return (this.weight/((this.height/100)*(this.height/100))).toFixed(2)
    }

    caclEdad (){
        return new Date().getFullYear()-this.yearOfBirth
    }

    printAll (){
        let atributos = Object.keys(this);
        atributos.forEach((value) => {
            console.log(`${value}-${this[value]}`)
        })
    }

    printHobbies (){
        if (this.hobbies === undefined) {
            console.log('Esta persona no tiene hobbies')
        }else if (this.hobbies.length == 0){
            console.log('Esta persona no tiene hobbies')
        } else{
            this.hobbies.forEach((value) => {
                console.log(value)
            })
        }
        
    }
}

module.exports = Person;


// let fulanito = new Person ("fulanito",165,85,1990, ['todo']);

// console.log(fulanito.calcIMC());
// console.log(fulanito.caclEdad())
// fulanito.printAll();
// fulanito.printHobbies()