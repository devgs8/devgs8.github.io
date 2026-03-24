---
layout: post
title: "📝 Exercícios de Algoritmos - Parte 1"
date: 2026-03-24
categories: [algorithms, exercises, logic]
excerpt: "Primeira lista de exercícios práticos para fixar os conceitos básicos de algoritmos e lógica de programação."
---

## Sobre esta lista

Esta é a primeira parte dos exercícios práticos para reforçar os conceitos de algoritmos. Todos os exercícios devem ser resolvidos utilizando **Portugol** (similar ao VisuAlg).

---

## Exercício 1: Calculadora de Soma

**Descrição:**  
Faça um algoritmo que leia dois números e mostre a soma deles.

**Resolução:**
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

Exemplo de execução:

Digite o primeiro numero: 5
Digite o segundo numero: 5
A soma é: 10

![Calculadora Soma]({{ site.baseurl }}/ssets/images/calculadora-soma.png)

