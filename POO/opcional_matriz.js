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
        let condit = true
        
        console.log(m.length)
        console.log(this.myMatrix.length)

        if (m.length != this.myMatrix.length) {
            condit = false    
        }else{
            result = this.myMatrix.map((valor, i)=>{
                if (valor.length == m[i].length){
                    return valor.map((valor, j) => valor + m[i][j])
                }else{
                    condit = false
                }
            })   
        }
        
        if (condit) {
            return result
        }else{
            return 'no se cumplen las condiciones'
        }
    }

    productNum(n){
        return this.myMatrix.map((value) => value.map((value) => n*value));

    }
        
    

    subs (m) {
        let result
        let condit = true

        if (m.length == this.myMatrix.length) {
            result = this.myMatrix.map((valor, i)=>{
                if (valor.length == m[i].length){
                    return valor.map((valor, j) => m[i][j] - valor)
                }else{
                    condit = false
                }
            })       
        }else{
            condit = false;
        }
        if (condit) {
            return result
        }else{
            return 'no se cumplen las condiciones'
        }
    }
    
    

}

module.exports = Matrix;

