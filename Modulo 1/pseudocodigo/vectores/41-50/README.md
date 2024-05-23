<h2>Ejercicio 41 🌀</h2>
<h3>Suma de Elementos: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio41
        	Definir nums, resultado Como Entero
        	Dimension nums[5]

        	Para i=1 Hasta 5 Con Paso 1 Hacer
        		Escribir "Ingrese el numero ", i
        		Leer nums[i]
        		resultado = resultado + nums[i]
        	Fin Para

        	Escribir resultado
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 42 🌀</h2>
<h3>Mayor y Menor en un Array: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio42
        	Definir nums, numerico_mayor, numero_menor Como Entero

        	Dimension nums[8]
        	nums[1] = 1
        	nums[2] = 3
        	nums[3] = 10
        	nums[4] = -5
        	nums[5] = 8
        	nums[6] = 30
        	nums[7] = 90
        	nums[8] = 2

        	numerico_mayor = nums[1]
        	numero_menor = nums[1]

        	Para  i = 2 Hasta 8 Con Paso 1 Hacer
        		Si nums[i] > numerico_mayor Entonces
        			numerico_mayor = nums[i]
        		Fin Si

        		Si numero_menor > nums[i] Entonces
        			numero_menor = nums[i]
        		FinSi
        	FinPara

        	Escribir "numero mayor: ", numerico_mayor
        	Escribir "numero menor: ", numero_menor
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 43 🌀</h2>
<h3>Promedio de Notas:: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio43
        	Definir estudiantes,  promedio Como Entero
        	Dimension estudiantes[8]

        	estudiantes[1] = 5
        	estudiantes[2] = 1
        	estudiantes[3] = 10
        	estudiantes[4] = 6
        	estudiantes[5] = 8
        	estudiantes[6] = 30
        	estudiantes[7] = 90
        	estudiantes[8] = 2

        	Para i = 1 Hasta 8 Con Paso 1 Hacer
        		promedio = estudiantes[i] + promedio
        	FinPara

        	Escribir "El promedio total: ", promedio/8
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 44 🌀</h2>
<h3>Contador de Números Pares: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio44
        	Definir nums, pares Como Entero

        	Dimension nums[6]
        	nums[1] = 5
        	nums[2] = 1
        	nums[3] = 10
        	nums[4] = 6
        	nums[5] = 8
        	nums[6] = 30

        	Para i = 1 Hasta 6 Con Paso 1 Hacer
        		Si ((nums[i]%2)== 0) Entonces
        			pares = pares + 1
        		Fin Si
        	Fin Para

        	Escribir "en total de numeros pares es: ", pares
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 45 🌀</h2>
<h3>Búsqueda de Elemento: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio45
        	Definir letra, pedir_letra Como Caracter
        	Definir contador Como Logico
        	contador = Verdadero

        	Dimension letra[7]
        	letra[1] = "a"
        	letra[2] = "b"
        	letra[3] = "f"
        	letra[4] = "g"
        	letra[5] = "h"
        	letra[6] = "y"
        	letra[7] = "i"

        	Escribir "ingrese un caracter"
        	Leer pedir_letra

        	Para i = 1 Hasta 7 Con Paso 1 Hacer
        		Si (pedir_letra == letra[i]) Entonces
        			Escribir "SI ENCONTRO"
        			contador = Falso
        			i = 7
        		Fin Si
        	Fin Para

        	Si contador Entonces
        		Escribir "NO SE ENCONTRO"
        	Fin Si
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 46 🌀</h2>
<h3>Inversión de un Array: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio46
        	Definir nums, temp Como Entero
        	Dimension nums[10]
        	nums[1] = 10
        	nums[2] = 9
        	nums[3] = 8
        	nums[4] = 7
        	nums[5] = 6
        	nums[6] = 5
        	nums[7] = 4
        	nums[8] = 3
        	nums[9] = 2
        	nums[10] = 1

        	Para i = 1 Hasta 10 Con Paso 1 Hacer
        		temp = nums[i]
        		nums[i] = nums[11 - i] 
        		nums[11 - i] = temp 

        		Escribir nums[i]
        	Fin Para
        FinAlgoritmo	
    </code>
</pre>

<br>

<h2>Ejercicio 47 🌀</h2>
<h3>Contador de Ocurrencias: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio47
        	Definir letra, ingresar_letra Como Caracter
        	Definir contador Como Entero

        	Dimension letra[15]
        	letra[1] = "a"
        	letra[2] = "b"
        	letra[3] = "f"
        	letra[4] = "s"
        	letra[5] = "s"
        	letra[6] = "a"
        	letra[7] = "i"
        	letra[8] = "j"
        	letra[9] = "m"
        	letra[10] = "a"
        	letra[11] = "s"
        	letra[12] = "a"
        	letra[13] = "b"
        	letra[14] = "s"
        	letra[15] = "s"

        	Escribir "Ingrese una letra"
        	Leer ingresar_letra

        	Para i = 1 Hasta 15 Con Paso 1 Hacer
        		Si (ingresar_letra == letra[i]) Entonces
        			contador = contador + 1
        		Fin Si
        	Fin Para

        	Escribir "El numero de veces que aparece es: ", contador
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 48 🌀</h2>
<h3>Cálculo de Descuento por Categoría: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio48
        	Definir precio_producto Como Real
        	Definir categorias Como Caracter
        	Dimension precio_producto[9], categorias[3,2]
        	categorias[1][1] = "A"
        	categorias[1][2] = 0.10

        	categorias[2][1] = "B"
        	categorias[2][2] = 0.05

        	categorias[3][1] = "C"
        	categorias[3][2] = 0

        	Para i = 1 Hasta 3 Con Paso 1 Hacer
        		Escribir "Ingrese el producto ", i
        		Leer precio_producto[i]
        	Fin Para

        	Para i = 1 Hasta 3 Con Paso 1 Hacer
        		Escribir "El precio final del producto ", i, " con la categoria ",categorias[i]
        		Si expresion_logica Entonces
        			acciones_por_verdadero
        		SiNo
        			acciones_por_falso
        		Fin Si
        	Fin Para
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 49 🌀</h2>
<h3>Ordenamiento de Array: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio49
        	//definimos y asignamos las variables y reasignar los arreglos
        	Definir nums, temp Como Entero
        	Dimension nums[6]
        	nums[1] = 2
        	nums[2] = 4
        	nums[3] = 3
        	nums[4] = 7
        	nums[5] = 10
        	nums[6] = 1

        	Para i = 1 Hasta 6 Con Paso 1 Hacer
        		temp = nums[i]//ese "para" va a recorrer el arreglo y lo guardamos en una variable temporal
        		Para j = i+1 Hasta 6 Con Paso 1 Hacer
        			Si temp > nums[j] Entonces //ese segundo"para"
        				nums[i] = nums[j]
        				nums[j] = temp
        				temp = nums[i]
        			FinSi
        		FinPara
        		Escribir  nums[i]
        	Fin Para
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 50 🌀</h2>
<h3>Eliminación de Duplicados: 🥶</h3>

<pre>    
    <code>
        Algoritmo ejercicio50
        	Definir nums, temp, contador Como Entero
        	Dimension nums[16]
        	nums[1] = 7
        	nums[2] = 4
        	nums[3] = 3
        	nums[4] = 2
        	nums[5] = 10
        	nums[6] = 1
        	nums[7] = 7
        	nums[8] = 4
        	nums[9] = 3
        	nums[10] = 2
        	nums[11] = 10
        	nums[12] = 1
        	nums[13] = 2
        	nums[14] = 10
        	nums[15] = 1
        	nums[16] = 10
        
        	Para i = 1 Hasta 16 Con Paso 1 Hacer
        		temp = nums[i]
        		Para j = 16 Hasta i + 1 Con Paso -1 Hacer
        			Si temp == nums[j] Entonces
        				nums[j] = 0
        			Fin Si
        		Fin Para
        
        		si nums[i] <> 0 Entonces
        			Escribir nums[i]
        		FinSi
        	Fin Para
        FinAlgoritmo
    </code>
</pre>

<br>