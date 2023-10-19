export class Mobile{

    private name:string;
    private trademark:string;
    private model:string;
    private color:string;
    private price:number;

    constructor (name:string, trademark:string, model:string, color:string, price:number){
        this.name=name;
        this.trademark=trademark;
        this.model=model;
        this.color=color;
        this.price=price;
    }

    //getters
    public getName():string{
        return this.name
    }
    public getTrademark():string{
        return this.trademark
    }
    public getModel():string{
        return this.model
    }
    public getColor():string{
        return this.color
    }
    public getPrice():number{
        return this.price
    }

    //setters
    public setName(newName:string):void{
        this.name = newName
    }
    public setTrademark(newTrademark:string):void{
        this.trademark = newTrademark
    }
    public setModel(newModel:string):void{
        this.model = newModel
    }
    public setColor(newColor:string):void{
        this.color = newColor
    }
    public setPrice(newPrice:number):void{
        this.price = newPrice
    }

    public printAll():void{
        console.log(`The characteristics of the mobile ${this.name} are:`)
            let atributos = Object.keys(this);
            atributos.forEach((value) => {
            console.log(`${value}: ${this[value]}`)
        })
        
    }

}