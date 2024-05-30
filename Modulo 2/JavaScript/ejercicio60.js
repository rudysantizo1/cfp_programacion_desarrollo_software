function validarColumna(num, f, sudoku) {
    for (let vc = 1; vc < 9; vc++) {
        if (num == sudoku[f, vc]) {
            return true;
        }

    }
    return false;

}


function validarFila(num, c, sudoku) {
    for (let vf = 1; vf < 9; vf++) {
        if (num == sudoku[c, vf]) {
            return true;
        }
    }
    return false;
}


function validarBloque(num, f, c, sudoku) {
    //Revision de fila
    if (f >= 0 && f <= 2) {
        inicioFila = 0;
    }

    else if (f >= 3 && f <= 5) {
        inicioFila = 3;
    }

    else {
        inicioFila = 6;
    }
    //Revision de columna
    if (c >= 0 && c <= 2) {
        inicioColumna = 0;
    }

    else if (c >= 3 && c <= 5) {
        inicioColumna = 3;
    }

    else {
        inicioColumna = 6;
    }


    for (let i = inicioFila; i < inicioFila + 2; i++) {
        for (let j = inicioColumna; j < inicioColumna + 2; j++) {

            if (num == sudoku[i][j]) {
                existe = true;
                break;
            }
        }

    }
}


function imprimirSudoku(sudoku) {
    console.log(sudoku);
}


function main() {
    let num, contador, filas, columnas, error, existe;
    let sudoku = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

   

    for (let f = 0; f < 9; f++) {
        for (let c = 0; c < 9; c++) {
            for (num = 0; num < 9; num++) {
                existe = false;

                do {
                    existe = validarColumna(num, f, sudoku);

                    if (existe == false) {
                        existe = validarFila(num, c, sudoku);

                        if (existe == false) {
                            existe = validarBloque(num, f, c, sudoku);
                        }
                    }
                    if (existe == false) {
                        sudoku[f][c] = num
                        num = 9
                    }

                } while (existe == true);
            }

            


        }

    }

    imprimirSudoku(sudoku);
}

main();