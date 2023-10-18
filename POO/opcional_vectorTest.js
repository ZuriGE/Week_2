const classVector = require('./opcional_vector');

let vc = new classVector(5,10);

console.log(vc)

console.log(vc.add([1,1,1,1,1]))
console.log(vc.add([1,1,1]))

console.log(vc.productNum(3))

console.log(vc.subs([10,10,10,10,10]))
console.log(vc.subs([10,10,10,10,10,10,10,10]))

console.log(vc.product([0,1,2,3,4]))
console.log(vc.product([0,1,2]))
