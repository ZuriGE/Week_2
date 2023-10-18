export class Vector {
    private elements:number[];

    // private n:number; //no lo pide el enunciado pero lo necesito para la suma
   
    constructor(n:number, k:number){
        this.elements = this.genVector(n,k)
        // this.n = n
    }
    
    private genVector(n:number, k:number):number[] {
        let result:number[]=[];
        for (let i = 0; i<n; i++){
            result.push(Math.floor(Math.random()*k+1))
        }
        return result
    }

    public print():void{
        console.log(this.elements)
    }

    // add, subs y mult devuelven la suma/resta/multiplicación si los vectores tienen la misma dimensión, en caso contrario devuelve el vector inicial sin sumar/restar/multiplicar por nada (no puede devolver un string de 'ERROR')
    public add(v1:Vector){   
        let result:Vector = new Vector (this.elements.length, 0)   
        if (v1.elements.length == this.elements.length){
            let auxVec:number[] = this.elements.map((value:number,i:number) => value + v1.elements[i])
            result.elements = [...auxVec]
        }else{
            result.elements = [...this.elements]
        }
        return result       
    }

    public subs(v1:Vector){   
        let result:Vector = new Vector (this.elements.length, 0)   
        if (v1.elements.length == this.elements.length){
            let auxVec:number[] = this.elements.map((value:number,i:number) => value - v1.elements[i])
            result.elements = [...auxVec]
        }else{
            result.elements = [...this.elements]
        }
        return result       
    }

    public mult(v1:Vector){   
        let result:Vector = new Vector (this.elements.length, 0)   
        if (v1.elements.length == this.elements.length){
            let auxVec:number[] = this.elements.map((value:number,i:number) => value * v1.elements[i])
            result.elements = [...auxVec]
        }else{
            result.elements = [...this.elements]
        }
        return result       
    }

    public multNumber(n:number):Vector{   
        let result:Vector = new Vector (this.elements.length, 0)   
        let auxVec:number[] = this.elements.map((value:number) => value * n)
        result.elements = [...auxVec]
        return result       
    }

}


