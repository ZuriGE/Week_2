import { Person } from "./person"

export class Contacts{
    
    public people:Person[];

    constructor (){
        this.people = [];
    }

    // No sé si hay que imprimir las personas directamente >> printCalendar() << 
    // o cada uno de los atributos de cada persona (como el printAll del otro día) >> printCalendarPorAtributo() <<

    public printCalendar():void{
        this.people.forEach((value: Person, index:Number)=> {
            console.log(value);
        })   
    }

    public printCalendarPorAtributo():void{
        this.people.forEach((persona)=> {
            let atributos = Object.keys(persona);
            atributos.forEach((value) => {
            console.log(`${value}-${persona[value]}`)
        })
        })
    }
}

