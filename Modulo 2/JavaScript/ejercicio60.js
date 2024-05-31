function validarColumna(num, f, sudoku) {
    for (let vc = 0; vc < 9; vc++) {
        if (num === sudoku[f][vc]) {
            return true;
        }
    }
    return false;
}

function validarFila(num, c, sudoku) {
    for (let vf = 0; vf < 9; vf++) {
        if (num === sudoku[vf][c]) {
            return true;
        }
    }
    return false;
}

function validarBloque(num, f, c, sudoku) {
    const inicioFila = Math.floor(f / 3) * 3;
    const inicioColumna = Math.floor(c / 3) * 3;

    for (let i = inicioFila; i < inicioFila + 3; i++) {
        for (let j = inicioColumna; j < inicioColumna + 3; j++) {
            if (num === sudoku[i][j]) {
                return true;
            }
        }
    }
    return false;
}

function resolverSudoku(sudoku) {
    for (let f = 0; f < 9; f++) {
        for (let c = 0; c < 9; c++) {
            if (sudoku[f][c] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (!validarColumna(num, f, sudoku) && !validarFila(num, c, sudoku) && !validarBloque(num, f, c, sudoku)) {
                        sudoku[f][c] = num;
                        if (resolverSudoku(sudoku)) {
                            return true;
                        }
                        sudoku[f][c] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// Ejemplo de uso:
const sudoku = [
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

if (resolverSudoku(sudoku)) {
    console.log("Solución encontrada:");
    console.log(sudoku);
} else {
    console.log("No se pudo encontrar una solución válida.");
}