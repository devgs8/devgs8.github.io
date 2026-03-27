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

**Description:**  
The order in which operations are evaluated affects the result. Parentheses should be used to ensure the intended calculation order.

| Precedence | Operators            |
|------------|----------------------|
| 1st        | `( )` Parentheses    |
| 2nd        | `^` Exponentiation   |
| 3rd        | `*` `/` Multiplication / Division |
| 4th        | `+` `-` Addition / Subtraction |

**Solution:**

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
```
**Resultado:**
```Sem parênteses: 4
Com parênteses: 2.5
```

Description:
Arithmetic operators perform mathematical operations. In this example, A = 5 and B = 2.

Operator	Operation	Expression	Result

```+	Addition	A + B	7
-	Subtraction	A - B	3
*	Multiplication	A * B	10
/	Division	A / B	2.5
\	Integer Division	A \ B	2
^	Exponentiation	A ^ B	25
%	Modulus (remainder)	A % B	1
```

```algoritmo "OperadoresAritmeticos"
var
   A, B: Inteiro
   divisaoReal: Real
   divisaoInteira, resto, potencia: Inteiro
inicio
   A <- 5
   B <- 2
   
   divisaoReal <- A / B
   divisaoInteira <- A \ B
   resto <- A % B
   potencia <- A ^ B
   
   Escreva("Divisão real: ", divisaoReal)
   Escreva("Divisão inteira: ", divisaoInteira)
   Escreva("Resto: ", resto)
   Escreva("Potência: ", potencia)
finalgoritmo
```
**Result:**
```Divisão real: 2.5
Divisão inteira: 2
Resto: 1
Potência: 25
```

```Mathematical Functions
Description:
Built-in mathematical functions simplify common calculations.

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
```
Interactive Form with User
Interactive User Input

```algoritmo "MeuNome"
var
   nome: Caractere
inicio
   // Output command
   Escreva("Digite seu nome: ")
   Leia(nome)
   Escreva("Muito prazer, ", nome)
fimalgoritmo
```
Sum of Two Numbers
Here we only ask to enter the two numbers, without adding them.


```algoritmo "MeuNome"
var
   N1, N2: Inteiro
inicio
   Escreva("Digite o primeiro número: ")
   Leia(N1)
   Escreva("Digite o segundo número: ")
   Leia(N2)
fimalgoritmo
```

Sum with Result
Here we added another variable S and added the output command with the sum assigned to variable S.

```algoritmo "MeuNome"
var
   N1, N2, S: Inteiro
inicio
   Escreva("Digite o primeiro número: ")
   Leia(N1)
   Escreva("Digite o segundo número: ")
   Leia(N2)
   S <- N1 + N2
   Escreva("O resultado é: ", S)
fimalgoritmo
```

Formatted Sum Output
Here we added more interaction in the Escreva command with "and" and "is equal to". The programmer is responsible for the interaction, not the user. The user should have the work.


```algoritmo "MeuNome"
var
   N1, N2, S: Inteiro
inicio
   Escreva("Digite o primeiro número: ")
   Leia(N1)
   Escreva("Digite o segundo número: ")
   Leia(N2)
   S <- N1 + N2
   Escreva("A soma entre ", N1, " + ", N2, " é igual a ", S)
fimalgoritmo
```

Arithmetic Operators
Now we need to study arithmetic operators. In the example above we used addition +, but there are other operators that are not as simple.

Important Observation
2 and 5 are integers, but when dividing them, the result is not necessarily an integer. That's why there are integer division operators.

Note: Two and a half is not written as 2,5 but as 2.5 (the decimal separator in the US). We had to declare M as Real because real numbers have a decimal part (floating point).

Average Calculation (Correct)
portugol
```algoritmo "MeuNome"
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
fimalgoritmo
```

Operator Precedence Issue
Here we removed the parentheses from the sum and the result is different because of precedence. First, it will divide N2 / 2, then add the result to N1.

Average Calculation (Incorrect)
M <- N1 + N2 / 2   // Division happens before addition!

```algoritmo "MeuNome"
var
   N1, N2: Inteiro
   M: Real
inicio
   Escreva("Digite o primeiro número: ")
   Leia(N1)
   Escreva("Digite o segundo número: ")
   Leia(N2)
   M <- N1 + N2 / 2  
   Escreva("A média entre ", N1, " e ", N2, " é igual a ", M)
fimalgoritmo
```

Key Takeaways
Concept	Explanation
Input Commands	Leia() requests data from the user
Output Commands	Escreva() displays information to the user

```Arithmetic Operators	+ - * / \ ^ %
Integer Division	Use \ for integer division
Real Numbers	Use . as decimal separator, declare as Real
Operator Precedence	Always use parentheses to ensure correct calculation order
Complete Operator Table
Operator	Operation	Example	Result
+	Addition	5 + 2	7
-	Subtraction	5 - 2	3
*	Multiplication	5 * 2	10
/	Division (Real)	5 / 2	2.5
\	Integer Division	5 \ 2	2
^	Exponentiation	5 ^ 2	25
%	Modulus (Remainder)	5 % 2	1
```
Happy coding! 🚀
---
