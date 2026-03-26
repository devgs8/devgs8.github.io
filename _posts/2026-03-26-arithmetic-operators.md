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

**Example:**

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
