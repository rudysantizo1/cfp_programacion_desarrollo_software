function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = []
let contadorPares = 0;

for (let i = 0; i < 6; i++) {
    num[i] = getRandomArbitrary(1, 100);
    if (num[i] % 2 == 0) {
        contadorPares++;
    }
}
console.log(num);
console.log(`Numeros de pares encotrados es: ${contadorPares}`);