import { Book } from "./book";
import { Library } from "./library";

let myBook1 = new Book('Supersaurio', 328, '9788419172358','Meryem El Mehdati','Blackie Books');
let myBook2 = new Book('Sigo aquí', 272, '8417007717',"Maggie O'Farrell",'Libros del Asteroide');
let myBook3 = new Book('La mitad evanescente', 368, '9788439738640','Brit Bennett','Random House');
let myBook4 = new Book('Hamnet', 352, '8417977589',"Maggie O'Farrell",'Libros del Asteroide');

let myLibrary = new Library([myBook1,myBook2,myBook3,myBook4],'c/Biblioteca 4','Julio El Jubilado');

myLibrary.setManager('Agapito Di Souza');
console.log(myLibrary.getManager());

myLibrary.setAddress('c/Biblioteca 4-bis');
console.log(myLibrary.getAddress());

console.log(myLibrary.toString());

console.log(myLibrary.findByAuthor("Maggie O'Farrell"));