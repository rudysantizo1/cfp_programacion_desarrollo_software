function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let array = [];

for (let i = 0; i < 5; i++) {
    array[i] = getRandomArbitrary(1,100);
}
console.log(array);
console.log(array.reduce(( a, b ) => a+b,0));


