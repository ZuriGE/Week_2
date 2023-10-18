const classVector = require('./opcional_vector');

class Matrix {

    constructor (n,m,k){
        this.myMatrix = this.crearMatrix (n, m, k);
    }

    crearMatrix (n,m,k){
        let result = [];
        for (let i = 0; i<m; i++){
            let vector = new classVector(n,k);
            result.push(vector.myVector);
        }
        return result
    }

    add (m) {
        let result;
        let condit = true;
        let mSum = m.myMatrix
    
        console.log(this.myMatrix.length);
        console.log( mSum.length);


        if (mSum.length == this.myMatrix.length){
            result = [];
            this.myMatrix.forEach((vector, index)=>{
                mSum[index].__proto__ = classVector.prototype;
                vector.__proto__ = classVector.prototype;
               mSum[index].add(vector)
            })
        }else{
            result = 'no se cumplen las condiciones'
        }
        !condit ? result = 'no se cumplen las condiciones': result
        return result
    }
    
    // //ProductoNumeroMatriz(n, m): Multiplica la matriz m por el numero n.
    
    // const productoNumeroMatriz = (n, m) => m.map(value => myLib.productoNumeroVector(n, value))
    
    // // restaMatriz(m1, m2): Resta dos matrices m1 y m2 si y solo si tienen el mismo numero de elementos.
    
    // const restaMatriz = (m1, m2) =>{
    //     let result;
    //     let condit = true;
    //     if (m1.length == m2.length){
    //         result = [];
    //         for (let i = 0; i<m1.length; i++){
    //             let myVec = myLib.restaVector(m1[i], m2[i]);
    //             myVec == 'no se cumplen las condiciones' ? condit = false : result.push(myVec);
                
    //         }
    //     }else{
    //         result = 'no se cumplen las condiciones'
    //     }
    //     !condit ? result = 'no se cumplen las condiciones': result
    //     return result
    // }
    
    // // Multiplica dos matrices m1 y m2 si y solo si tienen el mismo número de elementos bertb
    
    // const productoMatriz = (m1, m2) =>{
    //     let result;
    //     let condit = true;
    //     if (m1.length == m2.length){
    //         result = [];
    //         for (let i = 0; i<m1.length; i++){
    //             let myVec = myLib.productoVector(m1[i], m2[i]);
    //             myVec == 'no se cumplen las condiciones' ? condit = false : result.push(myVec);
                
    //         }
    //     }else{
    //         result = 'no se cumplen las condiciones'
    //     }
    //     !condit ? result = 'no se cumplen las condiciones': result
    //     return result
    // }
    
    // module.exports = {crearMatriz,sumaMatriz,productoNumeroMatriz,restaMatriz,productoMatriz}




}

let mx = new Matrix(4,5,10)
let mx2 = new Matrix(4,5,10)
let mx3 = new Matrix(4,6,10)
let mx4 = new Matrix(7,5,10)

console.log(mx)
console.log(mx2)


console.log(mx.add(mx2));
// console.log(mx.add(mx3));
// console.log(mx.add(mx4));


