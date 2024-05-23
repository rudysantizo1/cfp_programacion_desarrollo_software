let random = 0, suma = 0;

// while (random>=0) {
//     suma += random;
//     random = Math.floor(Math.random() * (100 - -50) + -50);
// }

do {
    suma += random;
    random = Math.floor(Math.random() * (100 - -50) + -50);
    
} while (random>0);

console.log(suma);