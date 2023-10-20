import { Mobile } from "./mobile";

export class MobileCollection {
    
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor (mobiles:Mobile[]){
        this.mobiles = mobiles;
        this.totalPrice =this.totalPriceCalculation()
    }

    private totalPriceCalculation():number{
        let totPrice:number =  this.mobiles.reduce((totPrice, mobile)=> totPrice += mobile.getPrice(), 0)
        return totPrice
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

    public printCollection():void{
        console.log(`This is all my mobiles:\n`)
        this.mobiles.forEach((mobile, i)=> {
            mobile.printAll()
            console.log(`\n`)
        })
        console.log(`....................\nPrice overall: ${this.totalPrice}`)
    }

}