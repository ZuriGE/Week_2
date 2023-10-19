import { Mobile } from "./mobile";

export class MobileCollection {
    
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor (mobiles:Mobile[]){
        this.mobiles = mobiles;
    }

    public getMobiles():Mobile[]{
        return this.mobiles
    }
    public setMobiles(newMobiles:Mobile[]):void{
        this.mobiles=newMobiles
    }

    public getTotalPrice():number{
        return this.totalPrice
    }
    public setTotalPrice(NewTotalPrice:number):void{
        this.totalPrice=NewTotalPrice
    }

}