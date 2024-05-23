<h2>Ejercicio 31 🌀</h2>
<h3>Suma de Números: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio31
        	Definir resultado Como Entero
        	Para i = 1 Hasta 10 Con Paso 1 Hacer
        		resultado = resultado + i
        	Fin Para
        	Escribir resultado
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 32 🌀</h2>
<h3>Tabla de Multiplicar: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio32
        	Definir num Como Entero
        	Escribir "Ingrese un numero"
        	Leer num

        	Para i = 1 Hasta 10 Con Paso 1 Hacer
        		Escribir num, " X ", i, " = ", i*num
        	Fin Para
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 33 🌀</h2>
<h3>Factorial: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio33
        	Definir factor, resultado Como Entero
        	resultado = 1
        	Escribir "Ingrese un numero para factoriar"
        	Leer factor
        	Para i = 1 Hasta factor Con Paso 1 Hacer
        		resultado = resultado * i
        	Fin Para

        	Escribir resultado
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 34 🌀</h2>
<h3>Contador Regresivo: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio34
        	Para i = 10 Hasta 1 Con Paso -1 Hacer
        		Escribir i
        	Fin Para
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 35 🌀</h2>
<h3>Impresión de Caracteres: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio35
        	Definir estrella Como Caracter

        	Para i = 1 Hasta 5 Con Paso 1 Hacer
        		estrella = estrella + "* "
        		Escribir estrella
        	Fin Para
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 36 🌀</h2>
<h3>Potencias de 2: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio36
        	Definir num, resultado Como Entero
        	Escribir "Ingrese un numero"
        	Leer num
        	resultado = 1

        	Para i = 0 Hasta 4 Con Paso 1 Hacer
        		Escribir num, " ^ ", i, " = " ,resultado
        		resultado = resultado * num
        	Fin Para
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 37 🌀</h2>
<h3>Suma de Números Pares: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio37
        	Definir resultado Como Entero
        	Para i<-2 Hasta 20 Con Paso 2 Hacer
        		resultado <- resultado + i
        	FinPara
        	Escribir resultado
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 38 🌀</h2>
<h3>Contador de Dígitos: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio38
	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 39 🌀</h2>
<h3>Secuencia Fibonacci: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio39
        	Definir  num_actual, num_anterior, resultado Como Entero

        	Para i = 0 Hasta 3 Con Paso 1 Hacer
        		Escribir num_actual
        		Si i == 0 Entonces
        			num_anterior = 0
        			num_actual = 1
        		SiNo
        			resultado = num_actual + num_anterior
        			num_anterior = num_actual
        			num_actual = resultado
        		Fin Si
        	Fin Para
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 40 🌀</h2>
<h3>Patrón Numérico: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio40
        	Definir num, contador_digito Como Real
        	contador_digito = 1
        	Escribir "Ingrese un numero entero"
        	Leer num
        
        	Para i = 0 Hasta 1 Con Paso 1 Hacer
        		Si num < 10 Entonces
        			i = 1
        		SiNo
        			i = 0
        			contador_digito = contador_digito + 1
        			num = num/10
        		Fin Si
        	Fin Para
        	Escribir contador_digito
        FinAlgoritmo
    </code>
</pre>

<br>