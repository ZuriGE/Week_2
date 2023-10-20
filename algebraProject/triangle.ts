import { Point } from "./point";

export class Triangle {

    private vertex1:Point;
    private vertex2:Point;
    private vertex3:Point;

    constructor (vertex1:Point, vertex2:Point, vertex3:Point){
        this.vertex1 = vertex1; //A
        this.vertex2 = vertex2; //B
        this.vertex3 = vertex3; //C
    }

    public calculateLengthSides():number[]{
        return [this.vertex1.calculateDistance(this.vertex2),this.vertex2.calculateDistance(this.vertex3),this.vertex3.calculateDistance(this.vertex1)]
    }


}