let matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

let promedio=[];

let resultado = 0;

for (let i = 0; i < 4; i++) {
    resultado = 0;
    for (let j = 0; j < 3; j++) {
        resultado += matriz[j][i];                
    }
    promedio[i] = resultado/3;    
}

console.log(promedio);



