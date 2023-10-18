export class Book {

    private title:string;
    private nPages:number;
    private isbn:string;
    private author:string;
    private editorial:string;

    constructor(title:string,nPages:number,isbn:string,author:string,editorial:string){
        this.title = title;
        this.nPages= nPages;
        this.isbn= isbn;
        this.author= author;
        this.editorial = editorial;
    }

    //getters
    public getTitle():string {
        return this.title;
    }

    public getNPages():number {
        return this.nPages;
    }

    public getIsbn():string {
        return this.isbn;
    }

    public getAuthor():string {
        return this.author;
    }

    public getEditorial():string {
        return this.editorial;
    }

    //setters
    public setTitle(newTitle:string):void{
        this.title=newTitle
   }

    public setNPages(newNPages:number):void{
        this.nPages=newNPages
   }

    public setIsbn(newIsbn:string):void{
        this.isbn=newIsbn
   }

    public setAuthor(newAuthor:string):void{
        this.author=newAuthor
   }

    public setEditorial(newEditorial:string):void{
        this.editorial=newEditorial
   }

   //
    public toString(){
        return `Title - ${this.title}\nNumber of Pages - ${this.nPages}\nISBN - ${this.isbn}\nAuthor - ${this.author}\nEditorial - ${this.editorial}`
        
   }
}

