let laberinto = [];

for (let filas = 0; filas < 10; filas++) {
    laberinto[filas] = [];
    for (let columnas = 0; columnas < 10; columnas++) {

        laberinto[filas][columnas] = " 0 "


        if ( (((filas >= 8 && filas<=9) || (filas<=5)) && columnas== 2) || (filas <=2 && columnas == 5) 
              || ((filas>=1 && filas <=3) && columnas == 10) || ((filas <5 && filas >=2) && columnas == 6) ||
            (columnas == 8 && (filas>=3 && filas <=10))) {
            
                laberinto[filas][columnas] = "   ";
        }

        else if((filas == 8 && columnas == 1) || 
            (filas == 3 && columnas == 9)){
                laberinto[filas][columnas] = "   ";
        }

        else if (columnas == 3 && filas == 10){
            laberinto[filas][columnas] = " 1 ";
        }

        else if(columnas >2 && columnas < 8){
            if(filas == 5){
                laberinto[filas][columnas] = "   ";
            }
            else if(filas == 9){
                laberinto[filas][columnas] = "   ";
            }
        }
    }
}


for (let i = 0; i < 10; i++) {
    console.log(laberinto[i]);
}

