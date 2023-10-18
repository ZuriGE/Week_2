import { Book } from "./book";

export class Library {

    private books:Book[];
    private address:string;
    private manager:string;

    constructor(books:Book[], address:string,manager:string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    public getAddress():string {
        return this.address;
    }

    public getManager():string {
        return this.manager
    }

    public setAddress(newAdress:string):void{
        this.address=newAdress;
    }

    public setManager(newManager:string):void{
        this.manager=newManager;
    }

    public toString():string {
        let result:string = ''
        this.books.map((value, index)=>{
            result = result + `Book${index+1}:\n${value.toString()}\n`
        })
        return result.trim();
    }

    public getNumberOfBooks():number{
        return this.books.length
    }

    public findByAuthor(author:string):Book[]{
        return this.books.filter((valor)=>valor.getAuthor() == author)
    }
}
