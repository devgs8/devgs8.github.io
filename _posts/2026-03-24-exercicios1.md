---
layout: post
title: "📝 Algorithms Exercises - Part 1"
date: 2026-03-24
categories: [algorithms, exercises, logic]
excerpt: "First list of practical exercises to reinforce basic concepts of algorithms and programming logic."
---

## About this list

This is the first part of practical exercises to reinforce algorithm concepts. All exercises should be solved using **Portugol** (similar to VisuAlg).

---

## Exercise 1: Sum Calculator

**Description:**  
Create an algorithm that reads two numbers and displays their sum.

**Solution:**

```portugol
algoritmo "CalculadoraSoma"
var
   num1, num2, resultado: Real
inicio
   Escreva("Digite o primeiro numero: ")
   Leia(num1)
   Escreva("Digite o segundo numero: ")
   Leia(num2)
   resultado <- num1 + num2
   Escreva("A soma é: ", resultado)
finalgoritmo
```

```
Digite o primeiro numero: 5
Digite o segundo numero: 5
A soma é: 10
```

![Sum Calculator]({{ site.baseurl }}/ssets/images/calculadora-soma.png)

---

## Exercise 2: Triangle Area

**Description:**  
Calculate the area of a triangle using the formula: **base × height / 2**.

**Solution:**

```portugol
algoritmo "AreaTriangulo"
var
   base, altura, area: Real
inicio
   Escreva("Digite a base do triângulo: ")
   Leia(base)
   Escreva("Digite a altura do triângulo: ")
   Leia(altura)
   area <- (base * altura) / 2
   Escreva("A área do triângulo é: ", area)
finalgoritmo
```

Execution example:

```
Digite a base do triângulo: 20
Digite a altura do triângulo: 30
A área do triângulo é: 300
```

![Triangle Area]({{ site.baseurl }}/ssets/images/calculararea.png)



