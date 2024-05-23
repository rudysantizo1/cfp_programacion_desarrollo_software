function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numero = getRandomArbitrary(-25,100);

while(numero<=0){
    numero = getRandomArbitrary(-25,100);
}

console.log(numero);