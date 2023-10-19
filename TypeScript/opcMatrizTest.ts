import { Vector } from "./vector";
import { Matrix } from "./opcMatriz";

let test1 = new Matrix(4,3,10)
let test2 = new Matrix(4,3,10)
let test3 = new Matrix(4,2,10)
let test4 = new Matrix(5,3,10)


test1.print()

test1.add(test2).print()

test1.add(test3).print()

test1.add(test4).print()

test1.multNumber(3).print()

test1.multSpecial(2).print()