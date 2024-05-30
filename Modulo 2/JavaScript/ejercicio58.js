function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let cantidadMinas, contador, mina, numerMInas = [], posicion;
let finDelJuego = false;
let mapa = [];

cantidadMinas  = getRandomArbitrary(3,5);


//Posicion de las minas

for (mina = 0; mina < cantidadMinas; mina++) {
    minaFila = getRandomArbitrary(1,10);
    minaColumna = getRandomArbitrary(1,10);
    contador = 0;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            contador++;
            if (i == minaFila && j == minaColumna) {
                numerMInas[mina] = contador
            }            
        }        
    }


}


//Posicion de las minas
console.log("posicion de las minas");
for (mina = 0; mina < cantidadMinas; mina++) {
    console.log(numerMInas[mina]);
}

//Mapa oculta las minas

for (let i = 0; i < 10; i++) {
    mapa[i] = [];
    for (let j = 0; j < 10; j++) {
        mapa[i][j] = 0;
    }
    console.log(mapa[i]);    
}

//Juego

while (finDelJuego == false) {
    posicion = getRandomArbitrary(1,100)
    console.log(`Numero ingresado ${posicion}`);
    
    contador = 0;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            contador++;
            if (contador == posicion) {
                mapa[i][j] = 1
            }
        }  
    }

    //Si se encuntra la mina
    for (let mina = 0; mina < cantidadMinas; mina++) {
        if (numerMInas[mina] == posicion) {
            contador = 0;
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    contador++;
                    if (contador == posicion) {
                        mapa[i][j] = 7
                    }
                }  
            }

            console.log("Tocaste una mina!!!!");
            finDelJuego = true;
        }
    }

    console.log(mapa);

}


