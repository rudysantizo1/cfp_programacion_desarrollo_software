<h2>Ejercicio 51 🌀</h2>
<h3>Suma de Matrices: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio51
        	Definir matriz1, matriz2 Como Entero
        	Definir linea_matriz1, linea_matriz2, linea_matriz3 Como Caracter
        	Dimension matriz1[3,3], matriz2[3,3]
        	//Matriz1 3x3
        	matriz1[1,1] = 1
        	matriz1[1,2] = 2
        	matriz1[1,3] = 3

        	matriz1[2,1] = 4
        	matriz1[2,2] = 5
        	matriz1[2,3] = 6

        	matriz1[3,1] = 7
        	matriz1[3,2] = 8
        	matriz1[3,3] = 9

        	//Matriz2 3x3
        	matriz2[1,1] = 1
        	matriz2[1,2] = 2
        	matriz2[1,3] = 3

        	matriz2[2,1] = 4
        	matriz2[2,2] = 5
        	matriz2[2,3] = 6

        	matriz2[3,1] = 7
        	matriz2[3,2] = 88
        	matriz2[3,3] = 9


        	Para i = 1 Hasta 3 Con Paso 1 Hacer
        		Para j = 1 Hasta 3 Con Paso 1 Hacer
        			total_matriz1 = total_matriz1 + matriz1[i,j]
        			total_matriz2 = total_matriz2 + matriz2[i,j]

        			linea_matriz1 = Concatenar(linea_matriz1, Concatenar("  |  ",ConvertirATexto(matriz1[i,j])))
        			linea_matriz2 = Concatenar(linea_matriz2, Concatenar("  |  ",ConvertirATexto(matriz2[i,j]))) //Suma de matricez
        		Fin Para

        		Escribir  linea_matriz1, "  |  ",  linea_matriz2, "  |  "
        		linea_matriz1 = ""
        		linea_matriz2 = ""
        		linea_matriz3 = ""
        	Fin Para

        	Escribir "      Matriz 1:  ", total_matriz1, "           Matriz 2: ",total_matriz2, "     Total suma de Matriz 1 y Matriz 2: ",total_matriz1 + total_matriz2
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 52 🌀</h2>
<h3>Promedio por Columna: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio52
        	Definir matriz, promedio Como Entero
        	Definir linea_matriz, linea_promedio Como Caracter
        	Dimension matriz[3,4]

        	matriz[1,1] = 1
        	matriz[1,2] = 2
        	matriz[1,3] = 3
        	matriz[1,4] = 4

        	matriz[2,1] = 5
        	matriz[2,2] = 6
        	matriz[2,3] = 7
        	matriz[2,4] = 8

        	matriz[3,1] = 9
        	matriz[3,2] = 10
        	matriz[3,3] = 11
        	matriz[3,4] = 12

        	Para i = 1 Hasta 4 Con Paso 1 Hacer
        		promedio = 0
        		Para j = 1 Hasta 3 Con Paso 1 Hacer
        			promedio = promedio + matriz[j,i]
        		Fin Para
        		linea_promedio = Concatenar(linea_promedio, Concatenar("  |  ",ConvertirATexto(promedio/3))) //promedio
        	Fin Para


        	//la parte grafica
        	Para i = 1 Hasta 3 Con Paso 1 Hacer
        		Para j = 1 Hasta 4 Con Paso 1 Hacer
        			linea_matriz = Concatenar(linea_matriz, Concatenar("  |  ",ConvertirATexto(matriz[i,j])))
        		Fin Para
        		Escribir linea_matriz
        		linea_matriz = ""
        	Fin Para

        	Escribir ""
        	Escribir "Promedio de las columnas"
        	Escribir linea_promedio
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 53 🌀</h2>
<h3>Suma de Diagonales: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio53
        	Definir matriz, suma_diagonal_principal, suma_diagonal_secundario Como Entero
        	Definir linea_matriz Como Caracter
        	Dimension matriz[5,5]

        	matriz[1,1] = 1
        	matriz[1,2] = 2
        	matriz[1,3] = 3
        	matriz[1,4] = 4
        	matriz[1,5] = 5

        	matriz[2,1] = 6
        	matriz[2,2] = 7
        	matriz[2,3] = 8
        	matriz[2,4] = 9
        	matriz[2,5] = 1

        	matriz[3,1] = 2
        	matriz[3,2] = 3
        	matriz[3,3] = 4
        	matriz[3,4] = 5
        	matriz[3,5] = 6

        	matriz[4,1] = 7
        	matriz[4,2] = 8
        	matriz[4,3] = 9
        	matriz[4,4] = 1
        	matriz[4,5] = 2

        	matriz[5,1] = 3
        	matriz[5,2] = 4
        	matriz[5,3] = 5
        	matriz[5,4] = 6
        	matriz[5,5] = 7


        	Para i = 1 Hasta 5 Con Paso 1 Hacer
        		Para j = 1 Hasta 5 Con Paso 1 Hacer
        			linea_matriz = Concatenar(linea_matriz, Concatenar("  |  ",ConvertirATexto(matriz[i,j])))
        		Fin Para

        		Escribir linea_matriz
        		linea_matriz = ""

        		suma_diagonal_principal = suma_diagonal_principal + matriz[i,i]
        		suma_diagonal_secundario = suma_diagonal_secundario + matriz[i,6-i]
        	Fin Para

        	Escribir ""
        	Escribir "El resultado de la suma diagonal principal es: " ,suma_diagonal_principal
        	Escribir "El resultado de la suma diagonal Secundario es: " ,suma_diagonal_secundario	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 54 🌀</h2>
<h3>Mayor Elemento por Fila: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio54
        	Definir matriz, mayor_num Como Entero
        	Definir linea_matriz1 Como Caracter
        	Dimension matriz[4,3]

        	matriz[1,1] = 1
        	matriz[1,2] = 2
        	matriz[1,3] = 3

        	matriz[2,1] = 4
        	matriz[2,2] = 5
        	matriz[2,3] = 6

        	matriz[3,1] = 7
        	matriz[3,2] = 88
        	matriz[3,3] = 9

        	matriz[4,1] = 1
        	matriz[4,2] = 11
        	matriz[4,3] = 12


        	Para i = 1 Hasta 4 Con Paso 1 Hacer
        		mayor_num = matriz[i,1]
        		Para j = 1 Hasta 3 Con Paso 1 Hacer
        			linea_matriz = Concatenar(linea_matriz, Concatenar("  |  ",ConvertirATexto(matriz[i,j])))
        			Si mayor_num < matriz[i,j] Entonces
        				mayor_num = matriz[i,j]
        			Fin Si
        		Fin Para
        		Escribir linea_matriz,"      el numero mayor de la fila ",i," es: ",mayor_num
        		linea_matriz = ""
        	Fin Para	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 55 🌀</h2>
<h3>Rotación de Matriz: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio55
        	Definir matriz, matriz_rotado, matriz_rotado_izquierda, matriz_rotado_abajo Como Entero
        	Definir  linea_matriz1, linea_matriz2, linea_matriz3, linea_matriz4 Como Caracter
        	Dimension matriz[4,4], matriz_rotado[4,4], matriz_rotado_izquierda[4,4], matriz_rotado_abajo[4,4]
        
        	matriz[1,1] = 1
        	matriz[1,2] = 2
        	matriz[1,3] = 3
        	matriz[1,4] = 4
        
        	matriz[2,1] = 5
        	matriz[2,2] = 6
        	matriz[2,3] = 7
        	matriz[2,4] = 8
        
        	matriz[3,1] = 9
        	matriz[3,2] = 1
        	matriz[3,3] = 2
        	matriz[3,4] = 3
        
        	matriz[4,1] = 4
        	matriz[4,2] = 5
        	matriz[4,3] = 6
        	matriz[4,4] = 7
        
        
        	Para i = 1 Hasta 4 Con Paso 1 Hacer
        		linea = ""
        		Para j = 1 Hasta 4 Con Paso 1 Hacer
        			matriz_rotado[i,j] = matriz[5 - j ,i]
        			matriz_rotado_izquierda[i,j] = matriz[j,5-i]
        			matriz_rotado_abajo[i,j] = matriz[5-i,j]
        
        			//la parte grafica de las matrices
        			linea_matriz1 = Concatenar(linea_matriz1, Concatenar("  |  ",ConvertirATexto(matriz[i,j])))
        			linea_matriz2 = Concatenar(linea_matriz2, Concatenar("  |  ",ConvertirATexto(matriz_rotado[i,j])))
        			linea_matriz3 = Concatenar(linea_matriz3, Concatenar("  |  ",ConvertirATexto(matriz_rotado_izquierda[i,j])))
        			linea_matriz4 = Concatenar(linea_matriz4, Concatenar("  |  ",ConvertirATexto(matriz_rotado_abajo[i,j])))
        		Fin Para
        		Escribir linea_matriz1, "  |  ", linea_matriz2, "  |  "  , linea_matriz4, "  |  " , linea_matriz3, "  |  "
        		linea_matriz1 = ""
        		linea_matriz2 = ""
        		linea_matriz3 = ""
        		linea_matriz4 = ""
        	Fin Para
        
        	Escribir "        Matriz Normal          Matriz rotado izquierda          Matriz rotado abajo        Matriz rotado derecha"	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 56 🌀</h2>
<h3>Laberinto: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio_laberinto
        	Definir linea, laberinto Como Cadena
        	Definir personaje Como Entero
        	Definir  fin_del_juego Como Logico

        	Dimensionar laberinto(10,10)

        	// Creacion del laberinto
        	Para filas<-1 Hasta 10 Con Paso 1 Hacer
        		Para columnas<-1 Hasta 10 Con Paso 1 Hacer
        			laberinto[filas,columnas]<-' 0 '
        			Si (((filas >= 8 y filas<=9) o (filas<=5)) y columnas== 2) o (filas <=2 y columnas == 5) o ((filas>=1 y filas <=3) y columnas == 10) o  ((filas <5 y filas >=2) y columnas == 6) o (columnas == 8 y (filas>=3 y filas <=10))Entonces
        				laberinto[filas, columnas] = "   "
        			FinSi

        			Si (filas == 8 y columnas == 1) o (filas == 3 y columnas == 9) Entonces
        				laberinto[filas, columnas] = "   "
        			FinSi

        			Si columnas == 3 y filas =10 Entonces
        				laberinto[filas, columnas] = " 1 " //Posicion del personaje
        			FinSi


        			Si columnas >2 y columnas < 8 Entonces
        				si filas == 5 Entonces
        					laberinto[filas, columnas] = "   "
        				FinSi

        				si filas == 9 Entonces
        					laberinto[filas, columnas] = "   "
        				FinSi
        			FinSi
        			Escribir laberinto[filas,columnas] Sin Saltar
        		FinPara
        		Escribir ""
        	FinPara

        	//Creacion del menu
        	Mientras fin_del_juego == Falso Hacer //creee un mientras para que se repite el bucle hasta que el jugador gane
        		Escribir "Selecciona una de las opciones para mover tu personaje"
        		Escribir "1.ARRIBA"
        		Escribir "2.ABAJO"
        		Escribir "3.IZQUIERDA"
        		Escribir "4.DERECHA"

        		Leer Personaje
        		//Movimiento del personaje
        		Para x = 1 Hasta 10 Con Paso 1 Hacer //utilice x y  (xy)<-  ese un "y"
        			Para xy = 1 Hasta 10 Con Paso 1 Hacer
        				Si laberinto[x,xy] == " 1 "  Entonces//Buscando al jugador para aplicar los movimientos

        					//Movimiento arriba
        					Si personaje == 1 Entonces
        						si x > 1 Entonces
        							Si laberinto[x - 1, xy] = "   " Entonces //comprobacion de si se mueve o no
        								laberinto[x - 1, xy] = " 1 "
        								laberinto[x, xy] = "   "
        							FinSi
        						FinSi
        					Fin Si

        					//Movimiento abajo
        					Si personaje == 2 Entonces
        						si x<10 Entonces
        							Si laberinto[x + 1, xy] = "   " Entonces
        								laberinto[x + 1, xy] = " 1 "
        								laberinto[x, xy] = "   "
        								x = 10
        							FinSi
        						FinSi
        					Fin Si

        					//Movimiento izquierda
        					Si personaje == 3 Entonces
        						si xy>1 Entonces
        							Si laberinto[x, xy - 1] = "   " Entonces
        								laberinto[x, xy - 1] = " 1 "
        								laberinto[x, xy] = "   "
        							FinSi
        						FinSi

        					Fin Si

        					//Movimiento derecha
        					Si personaje == 4 Entonces
        						si xy<10 Entonces
        							Si laberinto[x, xy + 1] = "   " Entonces
        								laberinto[x, xy + 1] = " 1 "
        								laberinto[x, xy] = "   "
        								xy = 10
        							FinSi
        						FinSi
        					Fin Si


        				Finsi
        			Fin Para


        		Fin Para
        		Escribir ""
        		Escribir ""
        		Escribir ""
        		Escribir ""
        		Escribir ""
        		Escribir ""
        		//actualizacion del mapa
        		Para i = 1 Hasta 10 Con Paso 1 Hacer
        			Para j = 1 Hasta 10 Con Paso 1 Hacer
        				Escribir laberinto[i,j] Sin Saltar
        			Fin Para
        			Escribir " "
        		Fin Para

        		//Comprobacion que si llego la meta termina el juego
        		Si laberinto[1,2] == " 1 " Entonces
        			Escribir "Terminaste el juego Felicidades"
        			fin_del_juego = Verdadero
        		FinSi	

        	Fin Mientras
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 57 🌀</h2>
<h3>Juego de la Vida: 🥶</h3>

<pre>    
    <code>
        Algoritmo juego_de_la_vida
        	Definir celulas, buscar_celula, usuario, contador ,contador_vivas, viva, muerta, nace, generacion Como Entero
        	Dimension celulas[3,3],nace[9],muerta[9],viva[9]
        
        	Mientras usuario <10 Hacer
        		Escribir "Ingrese un numero del 1 al 9 para rellenar "
        		Leer usuario
        		contador = 0
        		Para i = 1 Hasta 3 Con Paso 1 Hacer
        			Para j = 1 Hasta 3 Con Paso 1 Hacer
        				contador = contador+1
        				Si contador == usuario Entonces
        					celulas[i,j] = 1
        				FinSi
        				Escribir celulas[i,j]," " Sin Saltar
        			Fin Para
        			Escribir ""
        		Fin Para
        	FinMientras
        
        
        
        
        
        	Repetir
        		generacion = generacion + 1
        		Escribir "Generacion ", generacion
        		contador = 0
        		Escribir "1.Siguiente generacion"
        		Escribir "2.Salir"
        		Leer usuario
        		// hacemos las cuatro direcciones y tambien las inclinadas y las guardamos si hay celeulas vivas, muertas o las que van a nacer por generaciones
        		Para i = 1 Hasta 3 Con Paso 1 Hacer
        			Para j = 1 Hasta 3 Con Paso 1 Hacer
        				contador = contador + 1
        				contador_vivas = 0
        				buscar_celula = celulas[i,j]
        				si (i + 1) <= 3 Entonces
        					si celulas[i + 1, j] == 1 Entonces
        						contador_vivas = contador_vivas + 1 
        					FinSi
        					si (j + 1) <= 3 Entonces
        						si celulas[i + 1, j + 1] == 1 Entonces
        							contador_vivas = contador_vivas + 1 
        						FinSi
        					FinSi
        				FinSi
        
        				si (i - 1) > 0 Entonces
        					si celulas[i - 1, j] == 1 Entonces
        						contador_vivas = contador_vivas + 1 
        					FinSi
        					si (j - 1) >0 Entonces
        						si celulas[i - 1, j - 1] == 1 Entonces
        							contador_vivas = contador_vivas + 1 
        						FinSi
        					FinSi
        				FinSi
        
        				si (j + 1) <= 3 Entonces
        					si celulas[i, j + 1] == 1 Entonces
        						contador_vivas = contador_vivas + 1 
        					FinSi
        					si ( i - 1 ) > 0 Entonces
        						si celulas[i - 1, j + 1] == 1 Entonces
        							contador_vivas = contador_vivas + 1 
        						FinSi
        					FinSi
        				FinSi
        
        				si (j - 1) > 0 Entonces
        					si celulas[i, j - 1] == 1 Entonces
        						contador_vivas = contador_vivas + 1 
        					FinSi
        					Si (i + 1) <= 3 Entonces
        						si celulas[i + 1, j - 1] == 1 Entonces
        							contador_vivas = contador_vivas + 1 
        						FinSi
        					FinSi
        				FinSi
        
        				//comprobamos las celulas vivas o muertas
        				Si buscar_celula == 0 Entonces
        					Si contador_vivas == 3 Entonces
        						nace[contador] = contador 
        					FinSi
        				SiNo
        					si (contador_vivas > 3) o (contador_vivas <= 1) Entonces
        						muerta[contador] = contador
        					SiNo
        						viva[contador] = contador
        					FinSi
        				FinSi
        
        
        			Fin Para
        		Fin Para
        
        		//añadimos o quitamos las celulas y mostramos el resultados
        		contador = 0
        		Para i = 1 Hasta 3 Con Paso 1 Hacer
        			Para j = 1 Hasta 3 Con Paso 1 Hacer
        				contador = contador + 1
        				si viva[contador] <> 0 Entonces
        					celulas[i,j] = 1
        					viva[contador] = 0
        				FinSi
        
        				si muerta[contador] <> 0 Entonces
        					celulas[i,j] = 0
        					muerta[contador] = 0
        				FinSi
        
        				si nace[contador] <> 0 Entonces
        					celulas[i,j] = 1
        					nace[contador] = 0
        				FinSi
        				Escribir celulas[i,j]," " Sin Saltar
        			Fin Para
        			Escribir ""
        		Fin Para
        Hasta Que usuario >1	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 58 🌀</h2>
<h3>BUSCAMINAS (Laberinto con Obstáculos y Algoritmo de Búsqueda): 🥶</h3>

<pre>    
    <code>
        Algoritmo juego_busca_minas
        	Definir  cantidad_minas, contador, mina, numeros_minas, posicion Como Entero
        	Definir fin_del_juego Como Logico
        	Definir mapa Como Caracter

        	Dimension mapa[10,10], numeros_minas[5]

        	cantidad_minas = Aleatorio(3,5)


        	//Posicion de las minas guardados en dos variables y un array para guardar
        	Para mina = 1 Hasta cantidad_minas Con Paso 1 Hacer

        		mina_fila = Aleatorio(1,10)
        		mina_columna = Aleatorio(1,10)
        		contador = 0
        		Para i = 1 Hasta 10 Con Paso 1 Hacer
        			Para j = 1 Hasta 10 Con Paso 1 Hacer
        				contador = contador+ 1
        				Si i == mina_fila y j == mina_columna Entonces
        					numeros_minas[mina] =  contador
        				FinSi
        			Fin Para
        		Fin Para

        	Fin Para


        	//Posicion de las minas
        	Escribir "Posicion de las minas"
        	Para mina = 1 Hasta cantidad_minas Con Paso 1 Hacer
        		Escribir numeros_minas[mina]
        	FinPara

        	//mapa oculta las minas
        	Para i = 1 Hasta 10 Con Paso 1 Hacer
        		Para j = 1 Hasta 10 Con Paso 1 Hacer
        			mapa[i,j] = " 0 "
        			Escribir mapa[i,j] Sin Saltar
        		Fin Para
        		Escribir ""
        	Fin Para

        	//JUEGO
        	Mientras fin_del_juego == Falso Hacer

        		Escribir "Ingrese un numero del 1 al 100"
        		Leer posicion
        		contador = 0

        		//Rellenar el espacio en blanco
        		Para i = 1 Hasta 10 Con Paso 1 Hacer
        			Para j = 1 Hasta 10 Con Paso 1 Hacer
        				contador = contador + 1
        				Si contador = posicion Entonces
        					mapa[i,j] = "   "
        				FinSi
        			Fin Para
        		Fin Para

        		//BUSCANDO SI SE ENCUNETRA UNA MINA
        		para mina = 1 Hasta cantidad_minas Con Paso 1 Hacer
        			si numeros_minas[mina] == posicion Entonces
        				contador = 0
        				Para i = 1 Hasta 10 Con Paso 1 Hacer
        					Para j = 1 Hasta 10 Con Paso 1 Hacer
        						contador = contador + 1
        						si contador == posicion Entonces
        							mapa[i,j] = " 7 "
        						FinSi
        					Fin Para
        				Fin Para

        				Escribir "¡¡¡¡¡¡Tocaste una mina!!!!!"
        				fin_del_juego = Verdadero

        			FinSi
        		FinPara

        		//Actualizacion del mapa
        		Para i = 1 Hasta 10 Con Paso 1 Hacer
        			Para j = 1 Hasta 10 Con Paso 1 Hacer
        				Escribir mapa[i,j] Sin Saltar
        			Fin Para
        			Escribir ""
        		Fin Para

        	Fin Mientras
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 59 🌀</h2>
<h3>Rompecabezas del 15: 🥶</h3>

<pre>    
    <code>
        Algoritmo puzze_15
        	Definir contador, num, filas, columnas, usuario Como Entero
        	Definir rompecabezas, temporal Como Caracter
        	Definir  fin_del_juego Como Logico
        	Dimension rompecabezas[4,4] 

        	filas = 1
        	columnas = 1

        	//generacion de numeros aleatorios sin necesidad de repetidos
        	Escribir ""
        	Para comprobar = 1 Hasta 15 Con Paso 1 Hacer

        		num = Aleatorio(1,15)

        		contador = 0
        		Para i = 1 Hasta 4 Con Paso 1 Hacer
        			Para j = 1 Hasta 4 Con Paso 1 Hacer
        				si rompecabezas[i,j] == ConvertirATexto(num)  Entonces
        					contador = contador + 1
        				FinSi
        			Fin Para
        		Fin Para

        		si contador > 0 Entonces
        			comprobar = comprobar - 1
        		SiNo
        			rompecabezas[filas,columnas] = ConvertirATexto(num)
        			si filas + 1 <= 4 Entonces
        				filas = filas + 1
        			SiNo
        				filas = 1
        				Si columnas + 1 <= 4 Entonces
        					columnas = columnas + 1
        				FinSi
        			FinSi
        		FinSi

        	Fin Para


        	Para i = 1 Hasta 4 Con Paso 1 Hacer
        		Para j = 1 Hasta 4 Con Paso 1 Hacer
        			si ConvertirANumero(rompecabezas[i,j]) == 0 Entonces
        				rompecabezas[i,j] = "  "
        				Escribir "|",rompecabezas[i,j], "|"Sin Saltar
        			SiNo
        				Si ConvertirANumero(rompecabezas[i,j]) > 9
        					Escribir "|",rompecabezas[i,j], "|"Sin Saltar
        				SiNo
        					Escribir "| ",rompecabezas[i,j], "|"Sin Saltar
        				FinSi
        			FinSi

        		Fin Para
        		Escribir ""
        	Fin Para

        	Repetir
        		fin_del_juego = Verdadero

        		Escribir "Selecciona una de las opciones para mover tu personaje"
        		Escribir "1.ARRIBA"
        		Escribir "2.ABAJO"
        		Escribir "3.IZQUIERDA"
        		Escribir "4.DERECHA"

        		Leer usuario

        		para i = 1 Hasta 4 Con Paso 1 Hacer
        			para j = 1 Hasta 4 Con Paso 1 Hacer

        				//movimiento arriba
        				si usuario == 1 Entonces
        					si i>1 Entonces
        						Si rompecabezas[i - 1, j] = "  " Entonces
        							rompecabezas[i - 1, j] = rompecabezas[i, j]
        							rompecabezas[i, j] = "  "
        							i = 5
        							j = 5
        						FinSi
        					FinSi
        				FinSi

        				//movimmiento abajo
        				Si usuario == 2 Entonces
        					si i<4 Entonces
        						Si rompecabezas[i + 1, j] = "  " Entonces
        							rompecabezas[i + 1, j] = rompecabezas[i, j]
        							rompecabezas[i, j] = "  "
        						FinSi
        					FinSi
        				Fin Si

        				//Movimiento izquierda
        				Si usuario == 3 Entonces
        					si j>1 Entonces
        						Si rompecabezas[i, j - 1] = "  " Entonces
        							rompecabezas[i, j - 1] = rompecabezas[i,j]
        							rompecabezas[i, j] = "  "
        							i = 5
        							j = 5
        						FinSi
        					FinSi

        				Fin Si

        				//movimiento derecha
        				Si usuario == 4 Entonces
        					si j<4 Entonces
        						Si rompecabezas[i, j + 1] == "  " Entonces
        							rompecabezas[i, j + 1] = rompecabezas[i,j]
        							rompecabezas[i, j] = "  "
        						FinSi
        					FinSi
        				Fin Si

        			FinPara
        		FinPara

        		//actualizacion del mapa
        		Para i = 1 Hasta 4 Con Paso 1 Hacer
        			Para j = 1 Hasta 4 Con Paso 1 Hacer
        				Escribir "|",rompecabezas[i,j], "|"Sin Saltar
        			Fin Para
        			Escribir ""
        		Fin Para

        		Escribir ""

        		contador = 0
        		Para i = 1 Hasta 4 Con Paso 1 Hacer
        			Para j = 1 Hasta 4 Con Paso 1 Hacer
        				contador = contador + 1
        				si rompecabezas[i,j] <> ConvertirATexto(contador) Entonces
        					fin_del_juego = Falso
        					i = 5
        					j = 5
        				FinSi
        			Fin Para
        		Fin Para


        	Hasta Que fin_del_juego == Verdadero
        	Escribir "Felicidades!!!"
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 60 🌀</h2>
<h3>Sudoku Solver: 🥶</h3>

<pre>    
    <code>
        Funcion existe <- Validar_Columna(num, f,sudoku)
        
        	para vc = 1 Hasta 9 Hacer
        		Si num == sudoku[f, vc] Entonces
        			existe = Verdadero
        			vc = 9
        		FinSi
        	FinPara
        
        FinFuncion
        
        Funcion existe <- Validar_Fila(num, c, sudoku)
        
        	para vf = 1 Hasta 9 Hacer
        		Si num == sudoku[vf, c] Entonces
        			existe = Verdadero
        			vf = 9
        		FinSi
        	FinPara
        
        FinFuncion
        
        
        Funcion existe <- Validar_Bloque(num, f, c, sudoku)
        
        	si f >= 1 y f<=3 Entonces
        		inicio_fila = 1
        	SiNo
        		si f >= 4 y f <= 6 Entonces
        			inicio_fila = 4 
        		SiNo
        			inicio_fila = 7
        		FinSi
        	FinSi
        
        	si c >= 1 y c<=3 Entonces
        		inicio_columna = 1
        	SiNo
        		si c >= 4 y c <= 6 Entonces
        			inicio_columna = 4 
        		SiNo
        			inicio_columna = 7
        		FinSi
        	FinSi
        
        	para i = inicio_fila Hasta  inicio_fila + 2 Hacer
        		Para j = inicio_columna Hasta inicio_columna + 2 Hacer
        			si num == sudoku[i,j] Entonces
        				existe = Verdadero
        				i = inicio_fila + 2
        				j = inicio_columna + 2 
        			FinSi
        		FinPara
        	FinPara
        
        
        FinFuncion
        
        
        funcion Imprimir_sudoku(sudoku)
        
        	Para i = 1 Hasta 9 Con Paso 1 Hacer
        		Para j = 1 Hasta 9 Con Paso 1 Hacer
        			si j <> 3 y j <> 6 Entonces
        				Escribir sudoku[i,j], " " Sin Saltar
        			SiNo
        				Escribir sudoku[i,j], "|" Sin Saltar
        			FinSi
        		FinPara
        		Si i == 6 o i  == 3 Entonces
        			Escribir " "
        		FinSi
        		Escribir ""
        	Fin Para
        
        FinFuncion
        
        Algoritmo sudoku9X9
        	Definir num, contador, filas, columnas, sudoku, error Como Entero
        	Definir existe Como Logico
        	Dimension sudoku[9,9]
        
        	para f = 1 Hasta 9 Hacer
        		para c = 1 Hasta 9 Hacer
        
        			para num = 1 Hasta 9 Hacer
        				existe = Falso
        				Repetir
        					existe = Validar_Columna(num, f, sudoku)
        
        					si existe == Falso Entonces
        						existe = Validar_Fila(num, c, sudoku)
        						Si existe == Falso Entonces
        							existe = Validar_Bloque(num, f, c, sudoku)
        						FinSi
        					FinSi
        
        
        					si existe == Falso Entonces
        						sudoku[f,c] = num
        						num = 9
        					FinSi
        
        				Hasta Que existe == Verdadero 
        			FinPara
        
        
        
        			Si sudoku[f,c] == 0 Entonces
        				f = 1
        				c = 1
        			FinSi
        
        
        		FinPara
        	FinPara
        
        	Imprimir_sudoku(sudoku)
        FinAlgoritmo
    </code>
</pre>

<br>