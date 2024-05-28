let matriz =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]


for (let i = 0; i < 4; i++) {
    let mayor = 0;
    for (let j = 0; j < 3; j++) {
        if (mayor < matriz[i][j]) {
            mayor = matriz[i][j]
        }                
    }
    console.log(`numero mayor de la fila ${i+1} es ${mayor}`);    
}
