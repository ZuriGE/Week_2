import { Mobile } from "./mobile";

let myMobile1 = new Mobile("Google Pixel 4a","Google","Pixel 4a", "True Black",299)
let myMobile2 = new Mobile ("OnePlus Nord N200 5G", "OnePlus", "Nord N200 5G", "Blue Quantum", 249)
let myMobile3 = new Mobile ("iPhone SE (2020)", "Apple", "SE (2020)", "Product(Red)", 499)


let newName:string = "Samsung Galaxy A32";
let newTrademark:string ="Samsung";
let newModel:string= "Galaxy A32";
let newColor:string = "Blue";
let newPrice:number = 249;

myMobile1.setName(newName);
console.log(myMobile1.getName());

myMobile1.setTrademark(newTrademark);
console.log(myMobile1.getTrademark());

myMobile1.setModel(newModel);
console.log(myMobile1.getModel());

myMobile1.setColor(newColor);
console.log(myMobile1.getColor());

myMobile1.setPrice(newPrice);
console.log(myMobile1.getPrice());

let myMobiles:Mobile[] = [myMobile1,myMobile2,myMobile3]

myMobiles.forEach((mobile:Mobile)=> mobile.printAll())