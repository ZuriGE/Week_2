import { Book } from "./book";

let myBook = new Book('Spersaurio', 32, '000000000000','Marian El Mehdati','Clackie Cooks');

myBook.setTitle('Supersaurio');
console.log(myBook.getTitle());

myBook.setNPages(328);
console.log(myBook.getNPages());

myBook.setIsbn('9788419172358');
console.log(myBook.getIsbn());

myBook.setAuthor('Meryem El Mehdati');
console.log(myBook.getAuthor());

myBook.setEditorial('Blackie Books');
console.log(myBook.getEditorial());

console.log(myBook.toString());

