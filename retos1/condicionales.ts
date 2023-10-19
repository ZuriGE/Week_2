//Zodiaco
function zodiac(day:number, month:number):string{
    let zod:string = 'fecha no válida'
    if (month == 1){
        if (day > 0 && day <20){
            zod = 'Capricornio';
        }else if (day <32){
            zod = 'Acuario'
        }
    }else if (month == 2){
        if (day > 0 && day < 19){
            zod = 'Acuario';
        }else if (day < 30){
            zod = 'Piscis'
        }
    }else if (month == 3){
        if (day > 0 && day < 21){
            zod = 'Piscis';
        }else if (day < 32){
            zod = 'Aries'
        }
    }else if (month == 4){
        if (day > 0 && day < 20){
            zod = 'Aries';
        }else if (day < 31){
            zod = 'Tauro'
        }
    }else if (month == 5){
        if (day > 0 && day < 21){
            zod = 'Tauro';
        }else if (day < 32){
            zod = 'Géminis'
        }
    }else if (month == 6){
        if (day > 0 && day < 21){
            zod = 'Géminis';
        }else if (day < 31){
            zod = 'Cáncer'
        }
    }else if (month == 7){
        if (day > 0 && day < 23){
            zod = 'Cáncer';
        }else if (day < 32){
            zod = 'Leo'
        }
    }else if (month == 8){
        if (day > 0 && day < 23){
            zod = 'Leo';
        }else if (day < 32){
            zod = 'Virgo'
        }
    }else if (month == 9){
        if (day > 0 && day < 23){
            zod = 'Virgo';
        }else if (day < 31){
            zod = 'Libra'
        }
    }else if (month == 10){
        if (day > 0 && day < 23){
            zod = 'Libra';
        }else if (day < 32){
            zod = 'Escorpio'
        }
    }else if (month == 11){
        if (day > 0 && day < 22){
            zod = 'Escorpio';
        }else if (day < 31){
            zod = 'Sagitario'
        }
    }else if (month == 12){
        if (day > 0 && day < 21){
            zod = 'Sagitario';
        }else if (day < 32){
            zod = 'Capricornio'
        }
    }
    return zod
}

//CONTINENTE
function continent(country:string):void{
    let continent:string = 'El país no se encuentra en la base de datos'
    let lcCountry:string = country.toLowerCase()
    switch (lcCountry){
        case 'etiopía':
        case 'marruecos':
        case 'burundi':
        case 'mauritania':
        case 'ghana':
            continent='África';
            break;
        case 'méxico':
        case 'cuba':
        case 'el salvador':
        case 'belice':
        case 'brasil':
            continent='América';
            break;
        case 'japón':
        case 'china':
        case 'sri lanka':
        case 'turkmenistán':
        case 'indonesia':
            continent='Asia';
            break;
        case 'portugal':
        case 'irlanda':
        case 'noruega':
        case 'escocia':
        case 'finlandia':
            continent='Europa';
            break;
        case 'australia':
        case 'nueva zelanda':
        case 'kiribati':
        case 'nauru':
        case 'fiji':
            continent='Oceanía';
            break;
    }
    console.log(continent)
}

//PAR o IMPAR

function isEven(number):string{
    let resultado:string;
    number % 2 == 0 ? resultado='El numero es par' : resultado='El numero es impar';
    console.log(resultado);
    return (resultado);
}

/* PRUEBAS
continent('Kiribati');
continent('Perú');
continent('Irlanda');
continent('India');

isEven(2);
isEven(3);
isEven(-4);
isEven(0.33);

console.log(zodiac(33,9));
console.log(zodiac(21,4));
console.log(zodiac(6,74));
console.log(zodiac(21,11));
console.log(zodiac(15,12));
console.log(zodiac(22,5));
/*