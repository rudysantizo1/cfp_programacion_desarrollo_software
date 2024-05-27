function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let array = [];

for (let i = 0; i < 12; i++) {
    array[i] = getRandomArbitrary(1,10);
}

console.log(array);

for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if(array[i] == array[j]){
            array[j]=undefined;
        }
    }
}

for (let i = 0; i < array.length; i++) {
    if(array[i] != undefined){
        console.log(array[i]);
    }
    
}
