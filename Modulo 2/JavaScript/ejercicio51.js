let matriz1 = [[1,2,3],[4,5,6],[7,8,9]];
let matriz2 = [[1,2,3],[4,5,6],[7,88,9]];
let totalMatrices = 0;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        totalMatrices+= matriz1[i][j] + matriz2[i][j];
    }
}

console.log(totalMatrices);

console.log(matriz1);
console.log(matriz2);