function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function factorial(num){
    if(num==1){
        return 1
    }

    return num * factorial(num-1);

}

console.log(factorial(5));