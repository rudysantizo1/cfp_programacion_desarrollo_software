function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numAdivinar = getRandomArbitrary(1,50);
console.log(numAdivinar);
let i = 0;

for (i = getRandomArbitrary(1,50); i != numAdivinar; i = getRandomArbitrary(1,50)) {
}

console.log(i);

console.log("Adivinaste el numero");