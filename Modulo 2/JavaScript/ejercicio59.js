function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let contador, num, filas = 0, columnas = 0, usuario, temporal;
let finDelJuego = false;
let comprobar = 0;

let rompecabezas = [
    [" "," "," "," "],
    [" "," "," "," "],
    [" "," "," "," "],
    [" "," "," "," "],
];

while(comprobar<15){
    num = getRandomArbitrary(1,16);
    contador = 0;
    console.log(num);


    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (rompecabezas[i][j] == num.toString()) {
                contador++;
            }            
        }    
    }

    if (contador > 0) {
        comprobar--;
    }
    else{
        rompecabezas[filas][columnas] = num.toString();

        if (filas + 1 < 4) {
            filas++;
        } else {
            filas = 0;
            if (columnas + 1 < 4) {
                columnas++;
            }
            else{
                columnas = 0;
            }
        }
    }

    comprobar++;
}
console.log(rompecabezas);



do {
    finDelJuego = true;
    num = getRandomArbitrary(1,5);
    console.log(`Opcion elegido ${num}`);
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {

            if(num == 1){
                if (i>0) {
                    if (rompecabezas[i - 1][j] == " ") {
                        rompecabezas[i - 1][j] = rompecabezas[i][j];
                        rompecabezas[i][j] = " ";
                        break;
                    }
                } 
            }

            else if(num == 2){
                if (i < 3) {
                    if (rompecabezas[i+1][j] == " ") {
                        rompecabezas[i + 1][j] = rompecabezas[i][j];
                        rompecabezas[i][j] = " ";
                    }
                }
            }

            else if (num == 3) {
                if (j > 0) {
                    if (rompecabezas[i][j - 1] == " ") {
                        rompecabezas[i][j - 1] = rompecabezas[i][j];
                        rompecabezas[i][j] = " ";
                        break;
                    }
                }
            }
            else if(num == 4){
                if (j < 3) {
                    
                    if (rompecabezas[i][j + 1] == " ") {                        
                        rompecabezas[i][j + 1] = rompecabezas[i][j];
                        rompecabezas[i][j] = " ";
                    }
                }
            }
        }        
    }

    console.log(rompecabezas);

    contador = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            contador++;
            if (rompecabezas[i][j] != contador.toString()) {
                finDelJuego = false;
            }            
        }        
    }

} while (finDelJuego == true);