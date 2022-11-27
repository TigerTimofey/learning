'use strict';
// first option
if (4 == 9){
    console.log('OK!');
} else{
    console.log('NOT OK');
}

const age = +prompt('How old are you?');
if (age >= 18){
    console.log('YOU CAN WATCH PORN')
} else {
    console.log('YOU CANT WATCH PORN')
}

// second option
let age2 = 10;

(age2 === 18) ? console.log('DA') : console.log('NET');

// third option

const age3 = 30;
switch(age3){
    case 49:
        console.log('Ne verno');
        break;
    case 100:
        console.log('Ne verno');
        break;
    case 50:
        console.log('Verno');
        break;
    default:
        console.log('Ne v etot raz');

}