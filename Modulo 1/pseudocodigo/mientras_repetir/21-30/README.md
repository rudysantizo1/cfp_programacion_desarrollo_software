<h2>Ejercicio 21 🌀</h2>
<h3>Contador Ascendente: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio21
        	Definir num Como Entero

        	Mientras num < 10 Hacer
        		num = num + 1
        		Escribir num
        	Fin Mientras
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 22 🌀</h2>
<h3>Contador Descendente: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio22
        	Definir num Como Entero
        	num = 10
        	Mientras num >0 Hacer
        		Escribir num
        		num = num - 1
        	Fin Mientras
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 23 🌀</h2>
<h3>Suma de Números Positivos: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio23
        	Definir num, resultado Como Entero
        	resultado = 0
        	Repetir
        		resultado = num + resultado
        		Escribir "Ingrese un numero positivo"
        		Leer num
        	Hasta Que num<0

        	Escribir "El numero total es: ", resultado
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 24 🌀</h2>
<h3>Adivina el Número: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio24
        	Definir num_random, num Como Entero
        	num_random =  Aleatorio(1,100)

        	Escribir "NUmero adivinar: ", num_random
        	Repetir
        		Escribir "Ingrese el numero para adivinar"
        		Leer num
        	Hasta Que num == num_random
        	Escribir "¡¡¡Felicidades adivinaste el numero!!!"
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 25 🌀</h2>
<h3>Validación de Contraseña: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio25
        	Definir contraseña, adivinar_contraseña Como Caracter
        	contraseña = "contraseña1234"

        	Repetir
        		Escribir "Ingrese la contraseña"
        		Leer adivinar_contraseña
        	Hasta Que (adivinar_contraseña == contraseña)

        	Escribir "acceso concedido."
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 26 🌀</h2>
<h3>Número Positivo: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio26
        	Definir num Como Entero
        	Escribir "Ingrese un numero entero negativo"
        	Leer num

        	Mientras num < 0 Hacer
        		Escribir "Ingrese un numero entero negativo"
        		Leer num
        	Fin Mientras

        	Escribir "Numero entero positivo: ",num
        FinAlgoritmo

    </code>
</pre>

<br>

<h2>Ejercicio 27 🌀</h2>
<h3>Suma de Números Pares: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio27
        	Definir num, eleccion, resultado Como Entero
        	eleccion = 1
        	Mientras eleccion == 1 Hacer
        		Escribir "Ingrese un numero"
        		Leer num

        		Si ((num % 2) == 0) Entonces
        			resultado = resultado + num
        		Fin Si

        		Escribir "¿Deseas seguir ingresando? 1.Si 2.No"
        		Leer eleccion
        	Fin Mientras

        	Escribir "El resultado es:", resultado
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 28 🌀</h2>
<h3>Adivina el Número (Repetir Hasta Acertar): 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio28
        	Definir num_random, num, num_intentos Como Entero
        	num_random =  Aleatorio(1,50)
        	Escribir "Numero a adivinar: ",num_random
        	Repetir
        		num_intentos = num_intentos + 1
        		Escribir "Ingrese el numero que tienes adivinar"
        		Leer num
        	Hasta Que num == num_random

        	Escribir "Adivinaste el numero"
        	Escribir "Numero de intentos: ",num_intentos
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 29 🌀</h2>
<h3>Cálculo de Factorial: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio29
        	Definir num_factorial, resultado Como Entero
        	Escribir "Ingrese un numero entero para factorial"
        	Leer num_factorial

        	Mientras num_factorial>0 Hacer
        		resultado = resultado + num_factorial

        		num_factorial = num_factorial - 1
        	Fin Mientras

        	Escribir "El resultado es: ", resultado
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 30 🌀</h2>
<h3>Validación de Entrada: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio30
        	Definir contraseña Como Caracter

        	Escribir "Ingrese una contraseña"
        	Leer contraseña

        	Mientras Longitud(contraseña)<8  Hacer
        		Escribir "Contraseña invalida"
        		Escribir "Ingrese una contraseña"
        		Leer contraseña
        	Fin Mientras

        	Escribir "Contraseña valida"
        FinAlgoritmo
    </code>
</pre>

<br>