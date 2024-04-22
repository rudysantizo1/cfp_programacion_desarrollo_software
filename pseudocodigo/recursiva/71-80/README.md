<h2>Ejercicio 71 🌀</h2>
<h3>Factorial: 🥶</h3>

<pre>    
    <code>
        Funcion Factorial(x, resultado)
        	si x >0 Entonces
        		resultado = resultado * x
        		x = x - 1
        		Factorial(x,resultado)
        	SiNo
        		Escribir "El resultado factorial es: ", resultado
        	FinSi

        FinFuncion

        Algoritmo ejercicio71

        	factorial(5,1)	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 72 🌀</h2>
<h3>Fibonacci: 🥶</h3>

<pre>    
    <code>
        Funcion Fibonacci( limite, num_actual, num_anterior)
        	Si limite > 0 y actual < limite Entonces
        		limite = limite - 1
        		Escribir num_anterior
        		resultado = num_actual + num_anterior
        		num_anterior = num_actual
        		num_actual = resultado

        		Fibonacci(limite, num_actual, num_anterior)
        	FinSi
        FinFuncion

        Algoritmo ejercicio72
        	Fibonacci(2,1,0)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 73 🌀</h2>
<h3>Suma de elementos de un arreglo: 🥶</h3>

<pre>    
    <code>
        Funcion Suma_lista(lista, limite, resultado)

        	si limite > 0 Entonces
        		resultado = resultado + lista[limite]
        		limite = limite - 1
        		Suma_lista(lista, limite, resultado)
        	SiNo
        		Escribir "El resultado de la suma es: ", resultado
        	FinSi

        FinFuncion


        Algoritmo ejercicio73
        	Definir nums_lista como Entero
        	Dimension nums_lista[5]

        	nums_lista[1] = 1
        	nums_lista[2] = 2
        	nums_lista[3] = 3
        	nums_lista[4] = 4
        	nums_lista[5] = 9

        	Suma_lista(nums_lista, 5, 0)	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 74 🌀</h2>
<h3>Potencia: 🥶</h3>

<pre>    
    <code>
        Funcion Potenciacion(a, b, resultado)
        	si b >= 1 Entonces
        		resultado = resultado * a
        		b = b - 1
        		Potenciacion(a, b, resultado)
        	SiNo
        		Escribir "El resultado de la potencia es: ", resultado
        	FinSi
        FinFuncion

        Algoritmo ejercicio74

        	potenciacion(5, 1, 1)	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 75 🌀</h2>
<h3>Máximo común divisor (MCD): 🥶</h3>

<pre>    
    <code>
        Funcion MCD(a, b, maximo, num)
        	si a > num y b > num Entonces
        		si a%num == 0 y b%num == 0 Entonces
        			a = a/num
        			b = b/num
        			maximo = maximo * num
        			MCD(a, b, maximo, 2)
        		SiNo
        			num = num + 1 
        			MCD(a, b, maximo, num)
        		FinSi
        	SiNo
        		Escribir a," - ",b," |MCD: ",maximo 
        	FinSi

        FinFuncion

        Algoritmo ejercicio75
        	MCD(30, 12, 1, 2)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 76 🌀</h2>
<h3>Impresión inversa de una cadena: 🥶</h3>

<pre>    
    <code>
        Funcion Inversa(palabra, largo, resultado)
        	si largo > 0 Entonces
        		resultado= Concatenar( resultado,Subcadena(palabra, largo, largo))
        		largo = largo - 1
        		Inversa(palabra, largo, resultado)
        	SiNo
        		Escribir resultado
        	FinSi
        FinFuncion

        Algoritmo ejercicio76
        	Inversa("Hola", Longitud("Hola"), "")
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 77 🌀</h2>
<h3>Cálculo de la suma de dígitos: 🥶</h3>

<pre>    
    <code>
        Funcion Suma_digitos(num, resultado)
        	si num/10 > 0 Entonces
        		resultado = resultado + (num%10)

        		text = ConvertirATexto(num/10)
        		text = Subcadena(text, 1, Longitud(text) - 1)
        		num = ConvertirANumero(text)


        		Suma_digitos(num, resultado)
        	SiNo
        		Escribir "La suma de sus digitos es: ", resultado
        	FinSi
        FinFuncion

        Algoritmo ejercicio77
        	Suma_digitos(123, 0)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 78 🌀</h2>
<h3>Torres de Hanoi: 🥶</h3>

<pre>    
    <code>
        Funcion Torres_Hanoi(discos, Inicio, Final, Aux)

        	si discos == 1 Entonces
        		Escribir "La torre ", Inicio, " Se mueve a la torre ", Final
        	SiNo
        		Torres_Hanoi(discos - 1, Inicio, Aux, Final)
        		Escribir "La torre ", Inicio, " Se mueve a la torre ", Final
        		Torres_Hanoi(discos - 1, Aux, Final, Inicio)
        	FinSi

        FinFuncion

        Algoritmo ejercicio78

        	Torres_Hanoi(3,"A","B","C")	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 79 🌀</h2>
<h3>Búsqueda binaria: 🥶</h3>

<pre>    
    <code>
        Funcion Busqueda_binaria(inicio, final, n_buscar, lista_numeros)
        	si inicio > final Entonces
        		Escribir "No se encontro el numero"
        	SiNo
        		medio = redon((inicio+final)/2)
        		si lista_numeros[medio] == n_buscar  Entonces
        			Escribir "Se encontro el numero"
        		SiNo

        			si lista_numeros[medio] < n_buscar Entonces
        				inicio = medio + 1
        			SiNo
        				final = medio - 1
        			FinSi
        			Busqueda_binaria(inicio, final, n_buscar, lista_numeros)
        		FinSi
        	FinSi
        FinFuncion

        Algoritmo ejercicio_79
        	Definir lista Como Entero
        	Dimension lista[10]

        	lista[1] = 11
        	lista[2] = 24
        	lista[3] = 32
        	lista[4] = 42
        	lista[5] = 55
        	lista[6] = 63
        	lista[7] = 74
        	lista[8] = 86
        	lista[9] = 92
        	lista[10] = 99

        	Busqueda_binaria(1, 10, 11, lista)	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 80 🌀</h2>
<h3>Generación de todas las permutaciones: 🥶</h3>

<pre>    
    <code>
        Funcion Permutaciones(numeros_lista, n_permutaciones)

        FinFuncion

        Algoritmo ejercicio80

        FinAlgoritmo
    </code>
</pre>

<br>