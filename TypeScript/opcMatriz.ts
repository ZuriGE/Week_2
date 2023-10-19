import { Vector } from "./vector";

export class Matrix {

    private elements:Vector[];

    constructor (n:number,m:number,k:number){
        this.elements =  this.genMatrix(n,m,k) 
    }

    private genMatrix(n:number,m:number,k:number):Vector[]{
        let result: Vector[]=[]
        for (let i = 0;i<m;i++){
            let subElem= new Vector (n,k)
            result.push(subElem)
        }
        return result
    }

    public print():void{
        let result:number[][] = []
        for (let i=0; i<this.elements.length;i++){
            result.push(this.elements[i].getElements())
        }
        console.log(result)
    }

    public getElements():Vector[] {
        return this.elements
    }

   

    // Suma cuando las matrices tienen las mismas dimensiones, si no se cumple devuelve la matriz inicial
    public add(m1:Matrix):Matrix{
        let nRow:number = this.elements.length;
        let nCol:number = this.elements[0].getElements().length
        let result:Matrix = new Matrix(nRow, nCol, 0);
        if (nRow == m1.elements.length && nCol == m1.getElements()[0].getElements().length){
            console.log(``)
            let auxMatrix:Vector[] = this.elements.map((value:Vector,j:number) => value.add(m1.getElements()[j]))
            
            result.elements = [...auxMatrix]
        }else{
            result.elements = [...this.elements]
        }
        return result   
    }

    public multNumber(n:number):Matrix{
        let nRow:number = this.elements.length;
        let nCol:number = this.elements[0].getElements().length
        let result:Matrix = new Matrix(nRow, nCol, 0);
        result.elements =[...(this.elements.map((value:Vector, i) => value.multNumber(n)))] 
        return result

    }

    public multSpecial(n:number):Matrix{
        let nRow:number = this.elements.length;
        let nCol:number = this.elements[0].getElements().length
        let result:Matrix = new Matrix(nRow, nCol, 0);
        let auxMatrix = (this.elements.map((value:Vector) => 
        {
            let result:Vector = new Vector (value.getElements().length, 0);
            let auxVec:number[] = value.getElements().map((value:number) => value * (n-(value%2)));
            console.log(auxVec)
            result.setElements([...auxVec]);
            return result
        }))
        
        result.elements =[...auxMatrix]
        return result
    }




}
