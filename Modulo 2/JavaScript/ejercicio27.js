function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numParesSuma = getRandomArbitrary(1,10);
let intentos = 0;
let suma = 0;

while(intentos<=15){
    intentos++;
    suma+= numParesSuma % 2 == 0 ? numParesSuma : 0;
    console.log(numParesSuma);
    numParesSuma = getRandomArbitrary(1,10);
}

console.log(suma);
