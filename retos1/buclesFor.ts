//Impares
function evenNumbers(num:number):void{
    for (let i:number = 1; i<=num; i+=2){
        console.log(i);
    }    
}

//revertir array
function myRevert(myArr:string[]):string[]{
    let revArr = [];
    for (let i:number = myArr.length-1; i>=0;i--){
        revArr.push(myArr[i]);
    }
    return revArr;
}

//Arcoiris

function isRainbow(colors:string[]):void{
    let arrCoIris:string[] = ['rojo','naranja','anaranjado','amarillo','verde','azul','añil','violeta','morado'];
    for (let color of colors){
        arrCoIris.indexOf(color.toLowerCase()) < 0 ? console.log ('NO está en el arcoríris') : console.log('Sí está en el arcoríris');
    }
}

function add(myWords:string[]):number{
    let suma:number = 0;
    for (let word of myWords){
        suma += word.length;
    }
    return suma;
}

//PRUEBAS

evenNumbers(13);

let arrColores = ['VERDE','negro','Violeta'];

console.log(myRevert(arrColores));

isRainbow(arrColores);

console.log(add(arrColores));
