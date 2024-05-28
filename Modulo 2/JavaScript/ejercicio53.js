let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,0],
    [1,2,3,4,5],
    [6,7,8,9,0],
    [1,2,3,4,5]
]

let resultadoDiagonalPrincipal = 0, resultadoDiagonalSecundario = 0;

for (let i = 0; i < 5; i++) {
    resultadoDiagonalPrincipal += matriz[i][i];
    resultadoDiagonalSecundario += matriz[i][4-i]; 
    
}

console.log(resultadoDiagonalPrincipal);
console.log(resultadoDiagonalSecundario);