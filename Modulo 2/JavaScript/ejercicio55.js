let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
    [3, 4, 5, 6]
];

let matrizRotado = [], matrizRotadoAbajo = [], matrizRotadoIzquierda = [];

for (let i = 0; i < 4; i++) {
    matrizRotado[i] = [];
    matrizRotadoAbajo[i] = [];
    matrizRotadoIzquierda[i] = [];
    for (let j = 0; j < 4; j++) {
        matrizRotado[i][j] = matriz[3 - j][i]; 
        matrizRotadoIzquierda[i][j] = matriz[j][3 - i];
        matrizRotadoAbajo[i][j] = matriz[3 - i][j];

    }
    console.log(`${matriz[i]}     ${matrizRotado[i]}    ${matrizRotadoAbajo[i]}     ${matrizRotadoIzquierda[i]}`);    
}
matrizRotado