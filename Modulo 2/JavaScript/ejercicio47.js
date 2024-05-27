function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let cadena = "abcdefghijk";
let array = [];
let caracterBuscar = 'a';
let aparicionCadena = 0;

for(let i = 0; i < 15; i++) {
    array[i] = cadena[getRandomArbitrary(0,cadena.length-1)]
    if(caracterBuscar == array[i]) aparicionCadena++;
}
console.log(array);

console.log(`Las veces que aparecio ${caracterBuscar} es ${aparicionCadena}`);