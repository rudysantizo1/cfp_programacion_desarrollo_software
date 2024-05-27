function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let array = [];

for (let i = 0; i < 8; i++) {
    array[i] = getRandomArbitrary(1,100);
    
}
console.log(array);
console.log(`Numero mayor es ${Math.max(...array)} y el numero minimo es ${Math.min(...array)}`);
