import { Triangle } from "./triangle";
import { Point } from "./point";

let v1 = new Point (0,0)
let v2 = new Point (0,4)
let v3 = new Point (3,0)

let myTriangle = new Triangle(v1, v2, v3);

console.log(myTriangle.calculateLengthSides())