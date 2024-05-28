function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let array = [];

for (let i = 0; i < 10; i++) {
    array[i] = getRandomArbitrary(1,100);
}
console.log(`El promedio de las notas es: ${array.reduce(( a, b ) => a+b,0) / 10}`);