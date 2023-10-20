import { Point } from "./point";

let coordOrigin = new Point (0,0);

console.log(coordOrigin.getX());
console.log(coordOrigin.getY());
console.log(coordOrigin.toString());

coordOrigin.setX(-10)
coordOrigin.setY(10)

console.log(coordOrigin.toString());

let point1 = new Point (2,0)
let point2 = new Point(0,-9)
let point3 = new Point(5,1)
let point4 = new Point(-5,1)
let point5 = new Point(-5,-1)
let point6 = new Point(5,-1)


console.log(point1.distanceToOrigin())
console.log(point2.distanceToOrigin())
console.log(point3.calculateDistance(point4))

console.log(point1.calculateQuadrant());
console.log(point2.calculateQuadrant());
console.log(point3.calculateQuadrant());
console.log(point4.calculateQuadrant());
console.log(point5.calculateQuadrant());
console.log(point6.calculateQuadrant());
