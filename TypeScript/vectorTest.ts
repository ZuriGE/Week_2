import { Vector } from "./vector";


let myVec1 = new Vector(5,10);
let myVec2 = new Vector(5,10);
let myVec3 = new Vector(7,10);

myVec1.print()
console.log(myVec1)

console.log(myVec2);

console.log(myVec1.add(myVec2))
console.log(myVec1.subs(myVec2))
console.log(myVec1.mult(myVec2))
console.log(myVec1.add(myVec3))
console.log(myVec1.subs(myVec3))
console.log(myVec1.mult(myVec3))

console.log(myVec1.multNumber(3));
