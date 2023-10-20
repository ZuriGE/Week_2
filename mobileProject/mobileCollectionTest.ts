import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let myMobile1 = new Mobile("Google Pixel 4a","Google","Pixel 4a", "True Black",299)
let myMobile2 = new Mobile ("OnePlus Nord N200 5G", "OnePlus", "Nord N200 5G", "Blue Quantum", 249)
let myMobile3 = new Mobile ("iPhone SE (2020)", "Apple", "SE (2020)", "Product(Red)", 499)
let myMobile4 = new Mobile ("Samsung Galaxy A32", "Samsung", "Galaxy A32", "Blue", 249)


let myArray:Mobile[] = [myMobile1,myMobile2,myMobile3,myMobile4]
let newArray:Mobile[] = [myMobile3, myMobile1, myMobile4, myMobile2]

let myCollection = new MobileCollection(myArray)

console.log(myCollection.getMobiles())
myCollection.setMobiles(newArray)
console.log(myCollection.getMobiles())

// myCollection.setTotalPrice(1200)

console.log(myCollection.getTotalPrice())

myCollection.printCollection()
