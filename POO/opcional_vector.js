
class Vector {
    constructor (n,m){
        this.myVector = this.crearVector (n, m)   
    }   

    crearVector(n, m){
        let result = [];
        for (let i = 0; i<n; i++){
            let randomNum = Math.floor(Math.random() *(m + 1));
            result.push(randomNum);
        }
        return result ;       
    }

    add(a){
        let result;
        if (a.length == this.myVector.length){
            result=[];
        for (let i = 0; i < a.length; i++){
            result.push(a[i]+this.myVector[i]);
            }
        }else{
         result ='no se cumplen las condiciones'
        }
        return result;
    } 

    productNum(n) {
        return this.myVector.map(value => value*n);
    } 

    subs(a){
        let result;
        if (a.length == this.myVector.length){
            result=[];
        for (let i = 0; i < a.length; i++){
            result.push(a[i]-this.myVector[i]);
            }
        }else{
         result ='no se cumplen las condiciones';
        }
        return result;
    } 

    product(a){
        let result
        if (a.length == this.myVector.length){
            result=[];
        for (let i = 0; i < a.length; i++){
            result.push(a[i]*this.myVector[i]);
            }
        }else{
         result ='no se cumplen las condiciones';
        }
        return result;
    } 
}

module.exports = Vector;




