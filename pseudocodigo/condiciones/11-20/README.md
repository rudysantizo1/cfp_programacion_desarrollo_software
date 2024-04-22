<h2>Ejercicio 11 😶‍🌫️</h2>
<h3>Número Positivo o Negativo: 🐙</h3>

<pre>    
    <code>
        Algoritmo ejercicio11
	        Definir num Como Entero
	        Escribir "Ingrese un numero entero"
	        Leer num

	        Si num >= 0 Entonces
	        	Escribir "El numero es positivo"
	        SiNo
	        	Escribir "El numero es negativo"
	        Fin Si
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 12 😶‍🌫️</h2>
<h3>Par o Impar: 🐙</h3>

<pre>    
    <code>
        Algoritmo ejercicio12
	        Definir num Como Entero
	        Escribir "Ingrese un numero entero"
	        Leer num

	        Si num%2 == 0 Entonces
	        	Escribir "El numero es par"
	        SiNo
	        	Escribir "El numero es impar"
	        Fin Si
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 13 😶‍🌫️</h2>
<h3>Día de la Semana: 🐙</h3>

<pre>    
    <code>
        Algoritmo ejercicio13
        	Definir num Como Entero
        	Escribir 'Ingrese un numero de la semana'
        	Leer num
        	Si num>0 y num < 8 Entonces
        		Si num==1 Entonces
        			Escribir 'Lunes'
        		FinSi
        		Si num==2 Entonces
        			Escribir 'Martes'
        		FinSi
        		Si num==3 Entonces
        			Escribir 'Miercoles'
        		FinSi
        		Si num==4 Entonces
        			Escribir 'Jueves'
        		FinSi
        		Si num==5 Entonces
        			Escribir 'Viernes'
        		FinSi
        		Si num==6 Entonces
        			Escribir 'Sabado'
        		FinSi
        		Si num==7 Entonces
        			Escribir 'Domingo'
        		FinSi
        	SiNo
        		Escribir "Numero de la semana invalido"
        	FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 14 😶‍🌫️</h2>
<h3>Mayor de Tres: 🐙</h3>

<pre>    
    <code>
        Algoritmo ejercicio14
        	Definir num1, num2, num3 Como Entero
        	Escribir 'Ingrese el primer numero'
        	Leer num1
        	Escribir 'Ingrese el segundo numero'
        	Leer num2
        	Escribir 'Ingrese el tercer numero'
        	Leer num3
        	Si num1 == num2 y num1 == num3 Entonces
        		Escribir "Todos los numeros son iguales"
        	SiNo
        		Si num1>num2 Entonces
        			Si num1>num3 Entonces
        				Escribir 'El numero mayor es: ', num1
        			SiNo
        				Escribir 'El numero mayor es: ', num3
        			FinSi
        		SiNo
        			Si num2>num3 Entonces
        				Escribir 'El numero mayor es: ', num2
        			SiNo
        				Escribir 'El numero mayor es: ', num3
        			FinSi
        		FinSi
        	FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 15 😶‍🌫️</h2>
<h3>Aprobado o Reprobado: 🐙</h3>

<pre>    
    <code>
        Algoritmo ejercicio15
        	Definir resultado Como Entero
        	Escribir "Ingrese el resultado"
        	Leer resultado

        	Si resultado >= 60 Entonces
        		Escribir "Aprobaste"
        	SiNo
        		Escribir "Reprobaste"
        	Fin Si
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 16 😶‍🌫️</h2>
<h3>Rango de Números: 🐙</h3>

<pre>    
    <code>
        Algoritmo ejercicio16
        	Definir num Como Entero
        	Escribir "Ingrese un numero entero"
        	Leer num
        	Si num > 0 y num <= 10 Entonces
        		Escribir "Se encuentra en el rango"
        	SiNo
        		Escribir "No se encuentra en el rango"
        	Fin Si
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 17 😶‍🌫️</h2>
<h3>Categoría de Edad: 🐙</h3>

<pre>    
    <code>
        Algoritmo ejercicio17
        	Definir edad Como Entero
        	Escribir 'Ingrese la edad'
        	Leer edad
        	Si edad >= 0 Entonces
        		Escribir "Categoria"
        		Si edad <= 12 Entonces
        			Escribir "Niño"
        		FinSi
        		Si edad > 12 y edad <= 17 Entonces
        			Escribir "Adolescente"
        		FinSi
        		Si edad > 17 y edad <= 64  Entonces
        			Escribir "Adulto"
        		FinSi
        		si edad > 64 Entonces
        			Escribir "Adulto mayor"
        		FinSi
        	SiNo
        		Escribir "Ingreso una edad invalido"
        	FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 18 😶‍🌫️</h2>
<h3>Calculadora de Descuento: 🐙</h3>

<pre>    
    <code>
        Algoritmo ejercicio18
        	Definir p_producto, descuento Como Real
        	Escribir "Ingrese el precio del producto"
        	Leer p_producto
        	descuento = 0.10
        	Si p_producto >= 100 Entonces
        		p_producto =   p_producto - (p_producto * descuento)
        		Escribir "El precio final del prducto es: ", p_producto
        	SiNo
        		Escribir "El precio final del prducto es: ", p_producto
        	Fin Si
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 19 😶‍🌫️</h2>
<h3>Divisibilidad por 5 y 3: 🐙</h3>

<pre>    
    <code>
        Algoritmo ejercicio19
        	Definir num Como Entero
        	Escribir 'Ingrese un numero entero'
        	Leer num
        	Si num>=0 Entonces
        		Si (num MOD 5) == 0 o (num MOD 3) == 0 Entonces
        			Si (num MOD 5)==0 Y (num MOD 3)==0 Entonces
        				Escribir 'Es divisible entre 3 y 5'
        			SiNo
        				Si (num MOD 5) == 0 Entonces
        					Escribir "Es divisible entre 5"
        				SiNo
        					Escribir "Es divisible entre 3"
        				FinSi
        			FinSi
        		SiNo
        			Escribir "Ningun numero es divisible"
        		FinSi
        	SiNo
        		Escribir 'Ingreso un numero negativo'
        	FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 20 😶‍🌫️</h2>
<h3>Día Hábil o Fin de Semana: 🐙</h3>

<pre>    
    <code>
        Algoritmo ejercicio20
        	Definir num Como Entero
        	Escribir "Ingrese un numero entero"
        	Leer num
        
        	Si num > 0 y num <= 7  Entonces
        		Si num >= 1 y num <= 5 Entonces
        			Escribir "Es un dia habil"
        		SiNo
        			Escribir "Es un fin de semana"
        		Fin Si
        	SiNo
        		Escribir "Ingreso un numero invalido"
        	Fin Si
        FinAlgoritmo
    </code>
</pre>

<br>