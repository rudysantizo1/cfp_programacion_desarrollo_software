let celulas = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
]


let vivas = [0,0,0,0,0,0,0,0,0], muerta = [0,0,0,0,0,0,0,0,0], nace = [0,0,0,0,0,0,0,0,0];
let contador = 0, contadorVivas = 0, celulasVivas = 0;

for (let generacion = 0; generacion < 4; generacion++) {
    console.log("");
    console.log(`Generacion ${generacion+1}`);
    contador = 0;
    for (let i = 0; i < 3; i++) {
        
        for (let j = 0; j < 3; j++) {
            contadorVivas = 0;
            buscarCelulas = celulas[i][j];            
            if(i + 1 < 3){
                contadorVivas += celulas[i + 1][j] == 1 ? 1 :0; 
                if(j + 1 < 3){
                    contadorVivas += celulas[i + 1][j + 1] == 1 ? 1 :0;
                } 
            }

            if(i - 1 >= 0){
                contadorVivas += celulas[i - 1][j] == 1 ? 1 : 0;
                if (j - 1 >= 0) {
                    contadorVivas += celulas[i - 1][j - 1] == 1 ? 1 : 0;
                }
            }

            if(j + 1 < 3){
                contadorVivas += celulas[i][j + 1] == 1 ? 1 : 0;
                if (i - 1 >= 0) {
                    contadorVivas += celulas[i - 1][j + 1] == 1 ? 1 : 0;
                }
            }

            if(j - 1 >= 0){
                contadorVivas += celulas[i][j - 1] == 1 ? 1 : 0;
                if (i + 1 < 3) {
                    contadorVivas += celulas[i + 1][j - 1] == 1 ? 1 : 0;
                }
            }

            

            
            //Comprobamos las celulas vivas o muertas para guardarlo xDDD

            if (buscarCelulas == 0) {
                if (contadorVivas == 3) {
                    nace[contador] = contador;
                }
            }

            else{
                if (contadorVivas > 3 || contadorVivas <= 1) {
                    muerta[contador] = contador;
                }
                else{
                    vivas[contador] = contador;
                }
            }

            contador++;

            
        }        
    }

    //Actualizamos e imprimimos el mapita :D

    contador = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (vivas[contador] != 0) {
                celulas[i][j] = 1;
                vivas[contador] = 0;
            }
            
            if (muerta[contador] != 0) {
                celulas[i][j] = 0;
                muerta[contador] = 0;
            }

            if(nace[contador] != 0){
                celulas[i][j] = 1
                nace[contador] = 0;
            }

            contador++;
        }

        
        console.log(celulas[i]);
        
    }


}
