function hasEven(myNums:number[]):boolean{
    let hayPar:boolean = false;
    let i:number = 0;
    while (! hayPar && i < myNums.length){
        hayPar = (myNums[i]%2 == 0)
        i++
    }
    return hayPar
}

function startWithM(myNames:string[]):boolean{
    let initM:boolean = true
    let i:number = 0;
    while ( initM && i < myNames.length){
        initM = (myNames[i][0].toLowerCase() == 'm')
        i++
    }
    return initM

}

//PRUEBAS
// let myArr1 = [1,3,5,7,9]
// let myArr2 = [1,3,5,6]

// console.log(hasEven(myArr1))
// console.log(hasEven(myArr2))

// let arrNombres = ['Miren','martin','Mikel','Norberto']
// let arrNombres2 = ['Miren','martin','Mikel']

// console.log(startWithM(arrNombres));
// console.log(startWithM(arrNombres2));
