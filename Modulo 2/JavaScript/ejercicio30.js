function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let abecedario = "abcdefghijklmnopqrstuvwxyz"
let contraseña = "";

for (let i = 0; i < 8; i++) {
    let j = getRandomArbitrary(0, abecedario.length);
    contraseña += abecedario[j];
    
}


console.log(contraseña);