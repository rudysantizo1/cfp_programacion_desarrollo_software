function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let array = [];
let suma = 0;

for (let i = 0; i < 5; i++) {
    array[i] = getRandomArbitrary(1,100);
    suma += array[i];
}

console.log(suma, array);


