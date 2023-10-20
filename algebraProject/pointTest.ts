import { Point } from "./point";

let coordOrigin = new Point (0,0);

console.log(coordOrigin.getX());
console.log(coordOrigin.getY());
console.log(coordOrigin.toString());

coordOrigin.setX(-10)
coordOrigin.setY(10)

console.log(coordOrigin.toString());