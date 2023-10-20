export class Point{
    
    private x:number;
    private y:number;

    constructor (x:number, y:number){
        this.x = x;
        this.y = y;
    }

    public getX():number{
        return this.x
    }
    public getY():number{
        return this.y
    }

    public setX(newX:number):void{
        this.x = newX
    }

    public setY(newY:number):void{
        this.y = newY
    }

    public toString():string{
        return `(${this.x},${this.y})`
    }
}