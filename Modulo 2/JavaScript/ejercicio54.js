let matriz =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]


for (let i = 0; i < 4; i++) {
    console.log(`numero mayor de la fila ${i+1} es ${Math.max(...matriz[i])}`);    
}
