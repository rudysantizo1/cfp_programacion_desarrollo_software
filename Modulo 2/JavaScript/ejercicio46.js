function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let array = [];

for (let i = 0; i < 10; i++) {
    array[i] = getRandomArbitrary(1,20);    
}
console.log(array);
console.log(array.reverse());


