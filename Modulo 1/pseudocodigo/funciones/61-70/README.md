<h2>Ejercicio 61 🌀</h2>
<h3>Suma de dos números: 🥶</h3>

<pre>    
    <code>
        Funcion  resultado = Suma(num1, num2)
        	resultado = num1 + num2
        FinFuncion

        Algoritmo ejercicio61

        	Escribir "El resultado de los numeros es: ",Suma(1,2)	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 62 🌀</h2>
<h3>Factorial de un número: 🥶</h3>

<pre>    
    <code>
        Funcion resultado <- Factorial(num1)
        	resultado = 1
        	para i = 1 Hasta num1 Hacer
        		resultado = resultado * i
        	FinPara
        FinFuncion

        Algoritmo ejercicio62
        	Escribir "El resultado del factorial de ",num," es: ", Factorial(4)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 63 🌀</h2>
<h3>Mayor de tres números: 🥶</h3>

<pre>    
    <code>
        Funcion resultado <- Num_mayor(num1, num2, num3)
        	Si num1 > num2 y num1 > num3 Entonces
        		resultado = num1
        	SiNo
        		si num2 > num3 y num2 > num1 Entonces
        			resultado = num2
        		SiNo
        			resultado = num3
        		FinSi
        	FinSi
        FinFuncion

        Algoritmo ejercicio63
        	Escribir "El numero mayor es: ", Num_mayor(2,1,7)	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 64 🌀</h2>
<h3>Área de un círculo: 🥶</h3>

<pre>    
    <code>
        Funcion Resultado = Area_circulo(radio)
        	resultado = pi*(radio*radio)
        FinFuncion
        
        
        Algoritmo ejercicio64	
        	Escribir "El area del circulo es: ", Area_circulo(5)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 65 🌀</h2>
<h3>Potencia de un número: 🥶</h3>

<pre>    
    <code>
        Funcion resultado <- Potenciacion(base, exponente)

        	resultado = 1

        	para i = 1 Hasta exponente Hacer
        		resultado = resultado * base
        	FinPara

        FinFuncion


        Algoritmo ejercicio65
        	Escribir "El numero potenciado es: ", Potenciacion(5,3)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 66 🌀</h2>
<h3>Ordenamiento de una lista: 🥶</h3>

<pre>    
    <code>
        Funcion lista_ordenada(lista)

        	Para i = 1 Hasta 8 Con Paso 1 Hacer
        		temp = lista[i]

        		Para j = i+1 Hasta 8 Con Paso 1 Hacer
        			Si temp > lista[j] Entonces
        				lista[i] = lista[j]
        				lista[j] = temp
        				temp = lista[i]
        			FinSi
        		FinPara

        		Escribir  temp
        	Fin Para

        FinFuncion

        Algoritmo ejercicio66
        	Definir lista_numerica Como Entero
        	Dimension lista_numerica[8]

        	lista_numerica[1] = 7
        	lista_numerica[2] = 600
        	lista_numerica[3] = 4
        	lista_numerica[4] = 2
        	lista_numerica[5] = 1
        	lista_numerica[6] = 3
        	lista_numerica[7] = 8
        	lista_numerica[8] = 500

        	Escribir "Los numeros ordenados son:"
        	lista_ordenada(lista_numerica)	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 67 🌀</h2>
<h3>Promedio de una lista: 🥶</h3>

<pre>    
    <code>
        Funcion resultado <- Promedio_lista(lista_numerica, total)

        	para i = 1 Hasta 8 Hacer
        		resultado = resultado + lista_numerica[i]
        	FinPara

        	resultado = resultado / 8
        FinFuncion


        Algoritmo ejercicio67
        	Definir lista_numerica Como Entero
        	Dimension lista_numerica[8]

        	lista_numerica[1] = 7
        	lista_numerica[2] = 6
        	lista_numerica[3] = 4
        	lista_numerica[4] = 2
        	lista_numerica[5] = 1
        	lista_numerica[6] = 3
        	lista_numerica[7] = 8
        	lista_numerica[8] = 5

        	Escribir "El promedio de los numeros son:", promedio_lista(lista_numerica)	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 68 🌀</h2>
<h3>Inversión de una cadena: 🥶</h3>

<pre>    
    <code>
        Funcion resultado <- cadena_alrevez(palabra)
        	para i = Longitud(palabra) Hasta 1 Con Paso -1 Hacer
        		resultado = Concatenar( resultado,Subcadena(palabra, i,i))
        	FinPara
        FinFuncion

        Algoritmo ejercicio68
        	Escribir "La palabra es: ", cadena_alrevez("holas")
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 69 🌀</h2>
<h3>Verificación de número primo: 🥶</h3>

<pre>    
    <code>
        Funcion resultado <- Numero_primo(num)
        	primo = Falso
        	para i = 2 Hasta num-1 Hacer
        		si num%i == 0 Entonces
        			primo = Verdadero
        		FinSi
        	FinPara

        	Si primo == Falso Entonces
        		resultado = "Si"
        	SiNo
        		resultado = "No"
        	FinSi


        FinFuncion

        Algoritmo ejercicio69
        	Definir num Como Entero
        	Leer num
        	Escribir "El numero ", num ," ¿es primo?: ", Numero_primo(num)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 70 🌀</h2>
<h3>Conversión de grados Celsius a Fahrenheit: 🥶</h3>

<pre>    
    <code>
        Funcion resultado <- Fahrenheit(celsius)
        	resultado = celsius * (9 / 5) + 32
        FinFuncion


        Algoritmo ejercicio70
        	Definir num Como Real

        	num = 19

        	Escribir "Los grados Celsius de ", num ," es: ",Fahrenheit(num)	
        FinAlgoritmo
    </code>
</pre>

<br>