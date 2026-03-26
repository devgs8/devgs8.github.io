markdown
---
layout: post
title: "📝 Arithmetic Operators & Interactive Algorithms"
date: 2026-03-26
categories: [algorithms, operators, portugol, logic]
excerpt: "Understanding arithmetic operators, operator precedence, mathematical functions, and interactive user input in algorithms using Portugol."
---

## About this content

This material covers the fundamentals of arithmetic operators, operator precedence, mathematical functions, and interactive algorithms using **Portugol** (VisuAlg syntax). Each concept includes practical examples and visual references.

---

## Operator Precedence

The order in which operations are evaluated directly affects the result. Parentheses should be used to ensure the intended calculation order.

| Precedence | Operators            |
|------------|----------------------|
| 1st        | `( )` Parentheses    |
| 2nd        | `^` Exponentiation   |
| 3rd        | `*` `/` Multiplication / Division |
| 4th        | `+` `-` Addition / Subtraction |

![Operator Precedence]({{ site.baseurl }}/assets/images/ordem-de-procedencia-operadores.png)

### Example

```portugol
algoritmo "Precedencia"
var
   resultado1, resultado2: Real
inicio
   resultado1 <- 3 + 2 / 2   // 3 + 1 = 4
   resultado2 <- (3 + 2) / 2 // 5 / 2 = 2.5
   Escreva("Sem parênteses: ", resultado1)
   Escreva("Com parênteses: ", resultado2)
finalgoritmo
Execution:

text
Sem parênteses: 4
Com parênteses: 2.5
Arithmetic Operators
Arithmetic operators perform mathematical operations. In this example, A = 5 and B = 2.

![Arithmetic Operators]({{ site.baseurl }}/assets/images/operadores-aritimeticos1.png)

Operator	Operation	Expression	Result
+	Addition	A + B	7
-	Subtraction	A - B	3
*	Multiplication	A * B	10
/	Division	A / B	2.5
\	Integer Division	A \ B	2
^	Exponentiation	A ^ B	25
%	Modulus (remainder)	A % B	1
![Complete Arithmetic Operators]({{ site.baseurl }}/assets/images/7operadores.png)

Important: Division (/) returns a real number. Integer division (\) returns only the whole part. Modulus (%) returns the remainder of the division.

Mathematical Functions
Built-in mathematical functions simplify common calculations.

![Mathematical Functions]({{ site.baseurl }}/assets/images/funcoes-pi.png)

Function	Description	Example	Result
Abs	Absolute value	Abs(-10)	10
Exp	Exponentiation	Exp(3, 2)	9
Int	Integer part	Int(3.9)	3
RaizQ	Square root	RaizQ(25)	5
Pi	Returns π (pi)	Pi	3.1416...
Sen	Sine (radians)	Sen(0.523)	0.5
Cos	Cossine (radians)	Cos(0.523)	0.86
Tan	Tangent (radians)	Tan(0.523)	0.57
GraupRad	Degrees to radians	GraupRad(30)	0.52
Interactive Algorithms
Exercise 1: Simple Output
Display a message using a variable.

portugol
algoritmo "MeuNome"
var
   nome: Caractere
inicio
   // Assignment
   nome <- "Gustavo"
   // Output
   Escreva("Muito prazer, ", nome)
finalgoritmo
Execution:

text
Muito prazer, Gustavo
Exercise 2: Interactive User Input
Ask the user for their name and display a personalized greeting.

portugol
algoritmo "MeuNome"
var
   nome: Caractere
inicio
   Escreva("Digite seu nome: ")
   Leia(nome)
   Escreva("Muito prazer, ", nome)
finalgoritmo
Execution:

text
Digite seu nome: Gustavo
Muito prazer, Gustavo
Exercise 3: Sum of Two Numbers (Input Only)
Read two numbers without performing the sum.

portugol
algoritmo "SomaSimples"
var
   N1, N2: Inteiro
inicio
   Escreva("Digite o primeiro número: ")
   Leia(N1)
   Escreva("Digite o segundo número: ")
   Leia(N2)
finalgoritmo
Exercise 4: Sum with Result
Add a variable to store the sum and display the result.

portugol
algoritmo "SomaComResultado"
var
   N1, N2, S: Inteiro
inicio
   Escreva("Digite o primeiro número: ")
   Leia(N1)
   Escreva("Digite o segundo número: ")
   Leia(N2)
   S <- N1 + N2
   Escreva("O resultado é: ", S)
finalgoritmo
Execution:

text
Digite o primeiro número: 10
Digite o segundo número: 20
O resultado é: 30
Exercise 5: Formatted Sum Output
Display the operation in a user-friendly format.

portugol
algoritmo "SomaFormatada"
var
   N1, N2, S: Inteiro
inicio
   Escreva("Digite o primeiro número: ")
   Leia(N1)
   Escreva("Digite o segundo número: ")
   Leia(N2)
   S <- N1 + N2
   Escreva("A soma entre ", N1, " + ", N2, " é igual a ", S)
finalgoritmo
Execution:

text
Digite o primeiro número: 15
Digite o segundo número: 25
A soma entre 15 + 25 é igual a 40
Note: The programmer is responsible for creating a clear interface. The user should not have to interpret raw outputs.

Exercise 6: Average of Two Numbers (Correct)
Calculate the average using parentheses to ensure correct precedence.

portugol
algoritmo "MediaCorreta"
var
   N1, N2: Inteiro
   M: Real
inicio
   Escreva("Digite o primeiro número: ")
   Leia(N1)
   Escreva("Digite o segundo número: ")
   Leia(N2)
   M <- (N1 + N2) / 2
   Escreva("A média entre ", N1, " e ", N2, " é igual a ", M)
finalgoritmo
Execution:

text
Digite o primeiro número: 7
Digite o segundo número: 8
A média entre 7 e 8 é igual a 7.5
Exercise 7: Average with Precedence Issue (Incorrect)
Removing parentheses changes the result due to operator precedence.

portugol
algoritmo "MediaIncorreta"
var
   N1, N2: Inteiro
   M: Real
inicio
   Escreva("Digite o primeiro número: ")
   Leia(N1)
   Escreva("Digite o segundo número: ")
   Leia(N2)
   M <- N1 + N2 / 2   // Division happens before addition!
   Escreva("A média entre ", N1, " e ", N2, " é igual a ", M)
finalgoritmo
Execution with N1 = 7 and N2 = 8:

text
A média entre 7 e 8 é igual a 11
Explanation: Without parentheses, the division N2 / 2 is calculated first (8 / 2 = 4), then added to N1 (7 + 4 = 11). This is incorrect for calculating an average.

Exercise 8: Media Calculation with Real Division
When working with division that may produce decimal results, declare variables as Real.

portugol
algoritmo "MediaReal"
var
   N1, N2: Inteiro
   M: Real
inicio
   Escreva("Digite o primeiro número: ")
   Leia(N1)
   Escreva("Digite o segundo número: ")
   Leia(N2)
   M <- (N1 + N2) / 2
   Escreva("A média entre ", N1, " e ", N2, " é igual a ", M)
finalgoritmo
Important: In Portugol, decimal numbers use the dot (.) as the decimal separator, not comma. Example: 2.5 not 2,5.

Complete Example: Interactive Calculator
Here's a complete example that combines multiple concepts:

portugol
algoritmo "CalculadoraCompleta"
var
   num1, num2, soma, produto, media: Real
   resto: Inteiro
inicio
   // User input
   Escreva("=== CALCULADORA INTERATIVA ===")
   Escreva("Digite o primeiro número: ")
   Leia(num1)
   Escreva("Digite o segundo número: ")
   Leia(num2)
   
   // Calculations
   soma <- num1 + num2
   produto <- num1 * num2
   media <- (num1 + num2) / 2
   resto <- num1 % num2
   
   // Formatted output
   Escreva("==============================")
   Escreva("Soma: ", num1, " + ", num2, " = ", soma)
   Escreva("Produto: ", num1, " x ", num2, " = ", produto)
   Escreva("Média: (", num1, " + ", num2, ") / 2 = ", media)
   Escreva("Resto da divisão de ", num1, " por ", num2, " = ", resto)
   Escreva("==============================")
finalgoritmo
Execution:

text
=== CALCULADORA INTERATIVA ===
Digite o primeiro número: 10
Digite o segundo número: 3
==============================
Soma: 10 + 3 = 13
Produto: 10 x 3 = 30
Média: (10 + 3) / 2 = 6.5
Resto da divisão de 10 por 3 = 1
==============================
Key Takeaways
Operator precedence matters — always use parentheses to make your intention clear.

Integer vs. real division — use / for real results and \ for integer division.

User interaction — make your outputs readable; the user should not need to interpret raw numbers.

Mathematical functions simplify complex operations like square roots and trigonometric calculations.

Variable types — choose the correct type (Inteiro for whole numbers, Real for decimal numbers).

Practice Exercises
Try these exercises on your own:

Circle Area: Calculate the area of a circle using Pi and radius provided by the user.

Formula: Area <- Pi * (raio ^ 2)

Even or Odd: Read a number and display whether it's even or odd using the modulus operator (%).

Rectangle Perimeter: Calculate the perimeter of a rectangle using base and height.

Temperature Conversion: Convert Celsius to Fahrenheit using the formula: F <- (C * 9/5) + 32

Trigonometric Values: Read an angle in degrees, convert to radians using GraupRad, and display its sine, cosine, and tangent.
