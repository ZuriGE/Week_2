const classMatrix = require('./opcional_matriz');

let mx = new classMatrix(4,5,10)
let mx2 = [
    [ 1, 6, 5, 0 ],
    [ 8, 6, 10, 4 ],
    [ 10, 3, 9, 10 ],
    [ 6, 1, 8, 6 ],
    [ 7, 0, 2, 7 ]
  ]

let mx3 = [
    [ 1, 6, 5, 0 ],
    [ 8, 6, 10, 4 ],
    [ 10, 3, 9, 10 ]
  ]

let mx4 = [
    [ 1, 6, 5, 0 ],
    [ 8, 6, 10, 4, 7 ],
    [ 10, 3, 9, 10 ],
    [ 6, 1, 8, 6 ],
    [ 7, 0, 2, 7 ]
  ]

console.log(mx.add(mx2));
console.log(mx.subs(mx2));
console.log(mx.add(mx3));
console.log(mx.subs(mx3));
console.log(mx.add(mx4));
console.log(mx.subs(mx4));
console.log(mx.productNum(3));

