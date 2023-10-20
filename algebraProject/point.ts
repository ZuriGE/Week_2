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

    public distanceToOrigin():number{
        return Math.sqrt(this.x*this.x+this.y*this.y)
    }

    public calculateDistance(anotherPoint:Point):number{
        let x2:number = anotherPoint.getX();
        let y2:number = anotherPoint.getY();
        return Math.sqrt((this.x-x2)*(this.x-x2)+(this.y-y2)*(this.y-y2))
    }


}