let random = 0, numAdivinar = Math.floor(Math.random() * (1 - 100) + 100), intento = 0;

while (random!=numAdivinar) {
    intento+=1;
    random = Math.floor(Math.random() * (1 - 100) + 100);
}

console.log(`Adivinaste el numero, numero de intentos: ${intento}`);