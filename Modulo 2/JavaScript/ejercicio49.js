function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let array = [];

for (let i = 0; i < 6; i++) {
    array[i] = getRandomArbitrary(1,10);
}

console.log(array);

let aux;

for (let i = 0; i < array.length ; i++) {
    for (let j = 0; j < array.length ; j++) {
        
        if((array[j] - array[i]) > 0){
            aux = array[i];
            array[i] = array[j]
            array[j] = aux
        }
    }
}

console.log(array);