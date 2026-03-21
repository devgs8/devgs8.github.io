---
layout: post
title: "📝 My First Algorithm: Writing in Pseudocode"
date: 2026-03-22
categories: [algorithms, logic]
excerpt: "Writing my first algorithm using pseudocode — understanding variables, assignment, and basic structure."
---

## 🎯 Introduction

Today I continued my journey with **Gustavo Guanabara's Algorithms Course**. After understanding what algorithms are, it's time to write my first one using **pseudocode** (also called Portugol in Portuguese courses).

As a system administrator transitioning to Java development, learning to think in algorithms is my foundation. This post documents my first steps in formalizing logic.

---

## 🤔 What is Pseudocode?

**Pseudocode** is a simplified, human-readable way to write algorithms. It's not a real programming language — it's a bridge between human thinking and actual code.

Why use pseudocode?
- No syntax errors to worry about
- Focus on **logic**, not language details
- Easy to translate to any programming language later
- Great for learning and planning

---

## 📐 Basic Structure of Pseudocode

Every algorithm in pseudocode follows this basic structure:

Var
nome: caractere
idade: inteiro
altura: real
aprovado: logico


### Data Types:

| Type | Description | Example |
|------|-------------|---------|
| `inteiro` | Whole numbers | 10, -5, 0 |
| `real` | Decimal numbers | 3.14, 2.5 |
| `caractere` | Text/characters | "João", "a" |
| `logico` | True/False | verdadeiro, falso |

### Assignment:

Use `<-` to assign values:

nome <- "DevGS8"
idade <- 25
altura <- 1.75
aprovado <- verdadeiro


---

## 📝 My First Complete Algorithm

Here's my first algorithm — it calculates and displays a person's age in days:

Algoritmo IdadeEmDias
Var
nome: caractere
idadeAnos: inteiro
idadeDias: inteiro
Inicio
// Get user input
Escreva("What is your name? ")
Leia(nome)

Escreva("How old are you? ")
Leia(idadeAnos)

// Calculate age in days (simplified: 1 year = 365 days)
idadeDias <- idadeAnos * 365

// Display result
Escreva("Hello ", nome, "!")
Escreva("You are approximately ", idadeDias, " days old.")
Fim


### Understanding Each Line:

| Line | Explanation |
|------|-------------|
| `Algoritmo IdadeEmDias` | Names the algorithm |
| `Var` | Starts variable declaration |
| `nome: caractere` | Creates a text variable for the name |
| `idadeAnos: inteiro` | Creates an integer for age in years |
| `idadeDias: inteiro` | Creates an integer for age in days |
| `Inicio` | Start of executable logic |
| `Escreva(...)` | Prints text to the screen |
| `Leia(variavel)` | Reads input from user |
| `idadeDias <- idadeAnos * 365` | Calculates days (assignment) |
| `Fim` | End of algorithm |

---

## 🧪 Testing the Algorithm

If I run this algorithm:

**Input:**

What is your name? DevGS8
How old are you? 30


**Output:**
Hello DevGS8!
You are approximately 10950 days old.


---

## 📚 Important Commands So Far

| Command | Purpose | Example |
|---------|---------|---------|
| `Escreva()` | Display output | `Escreva("Hello World")` |
| `Leia()` | Read input | `Leia(idade)` |
| `<-` | Assignment | `x <- 10` |
| `//` | Comment (ignored) | `// This is a comment` |

---

## 💻 Translating to Java

This same logic will look like this in Java later:

```java
import java.util.Scanner;

public class IdadeEmDias {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("What is your name? ");
        String nome = scanner.nextLine();
        
        System.out.print("How old are you? ");
        int idadeAnos = scanner.nextInt();
        
        int idadeDias = idadeAnos * 365;
        
        System.out.println("Hello " + nome + "!");
        System.out.println("You are approximately " + idadeDias + " days old.");
        
        scanner.close();
    }
}

See how similar it is? That's the beauty of pseudocode — it's easy to translate!

🧠 Exercises I Solved
Exercise 1: Calculate Rectangle Area

Algoritmo AreaRetangulo
Var
    largura, altura, area: real
Inicio
    Escreva("Enter width: ")
    Leia(largura)
    
    Escreva("Enter height: ")
    Leia(altura)
    
    area <- largura * altura
    
    Escreva("Area: ", area)
Fim

Exercise 2: Convert Celsius to Fahrenheit

Algoritmo CelsiusToFahrenheit
Var
    celsius, fahrenheit: real
Inicio
    Escreva("Enter temperature in Celsius: ")
    Leia(celsius)
    
    fahrenheit <- (celsius * 9/5) + 32
    
    Escreva(celsius, "°C = ", fahrenheit, "°F")
Fim

Exercise 3: Simple Calculator

Algoritmo CalculadoraSimples
Var
    num1, num2, resultado: real
    operacao: caractere
Inicio
    Escreva("Enter first number: ")
    Leia(num1)
    
    Escreva("Enter operation (+, -, *, /): ")
    Leia(operacao)
    
    Escreva("Enter second number: ")
    Leia(num2)
    
    Se operacao = "+" entao
        resultado <- num1 + num2
    Senao Se operacao = "-" entao
        resultado <- num1 - num2
    Senao Se operacao = "*" entao
        resultado <- num1 * num2
    Senao Se operacao = "/" entao
        resultado <- num1 / num2
    FimSe
    
    Escreva(num1, " ", operacao, " ", num2, " = ", resultado)
Fim

💡 Key Takeaways
Pseudocode lets you focus on logic without syntax

Variables store data and have types (integer, real, text, boolean)

Escreva() displays output, Leia() reads input

Assignment uses <- (not = like in many languages)

Comments with // help document your code

Pseudocode translates directly to real programming languages

📅 What's Next
Tomorrow I'll cover:

Aula 3: Input Commands and Operators — deeper dive into arithmetic and user interaction

More complex exercises

Starting to think about problem-solving strategies

🎯 My Reflection
Writing my first algorithm felt surprisingly natural. The pseudocode structure is intuitive, and I can already see how this will make learning Java easier. The key is practicing the logic first — syntax comes later.

As someone with a system administration background, I'm used to thinking in scripts. But algorithms require a more structured approach. I'm enjoying the process!
