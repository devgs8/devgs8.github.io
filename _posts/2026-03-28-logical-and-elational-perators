---
layout: post
title: "📝 Relational Operators & Logical Operators"
date: 2026-03-29
categories: [algorithms, operators, portugol, logic]
excerpt: "Understanding relational operators, logical operators, and how to combine them to build smart conditions in algorithms using Portugol."
---

## About this content

This material covers **relational operators** and **logical operators** in **Portugol** (VisuAlg syntax). Relational operators compare values and always return a logical result. Logical operators combine those results to build more complex conditions. Each concept includes practical examples and visual references.

---

## Relational Operators — Overview

**Description:**  
Relational operators create relationships between variables and expressions, always generating a **logical result** (`VERDADEIRO` / `FALSO`).

| Operator | Meaning                  | Example  |
|----------|--------------------------|----------|
| `>`      | Greater than             | `A > B`  |
| `<`      | Less than                | `A < B`  |
| `>=`     | Greater than or equal to | `A >= B` |
| `<=`     | Less than or equal to    | `A <= B` |
| `=`      | Equal to                 | `A = B`  |
| `<>`     | Not equal to             | `A <> B` |

> All examples below use: `A = 2`, `B = 3`, `C = 5`

---

## Greater Than `>`

**Description:**  
Checks if the left value is strictly greater than the right value.
````portugol
algoritmo "OperadoresRelacionais"
var
   A, B, C : Inteiro
inicio
   A <- 2
   B <- 3
   C <- 5
   Escreva(A > B)   // Output: FALSO
fimalgoritmo
````

**Result:**
````
FALSO
````

> A (2) is **not greater than** B (3).

---

## Equal To `=`

**Description:**  
Checks if both values are exactly the same.
````portugol
algoritmo "OperadoresRelacionais"
var
   A, B, C : Inteiro
inicio
   A <- 2
   B <- 3
   C <- 5
   Escreva(A = B)   // Output: FALSO
fimalgoritmo
````

**Result:**
````
FALSO
````

> A (2) is **not equal to** B (3).

---

## Less Than `<`

**Description:**  
Checks if the left value is strictly less than the right value.
````portugol
algoritmo "OperadoresRelacionais"
var
   A, B, C : Inteiro
inicio
   A <- 2
   B <- 3
   C <- 5
   Escreva(A < B)   // Output: VERDADEIRO
fimalgoritmo
````

**Result:**
````
VERDADEIRO
````

> A (2) **is less than** B (3).

---

## Not Equal To `<>`

**Description:**  
Checks if both values are different from each other.
````portugol
algoritmo "OperadoresRelacionais"
var
   A, B, C : Inteiro
inicio
   A <- 2
   B <- 3
   C <- 5
   Escreva(A <> B)   // Output: VERDADEIRO
fimalgoritmo
````

**Result:**
````
VERDADEIRO
````

> A (2) **is different from** B (3).

---

## Greater Than with a Literal Value

**Description:**  
You can compare a variable directly against a fixed number. Here A equals 2, so it is not *greater than* 2 — only equal to it.
````portugol
algoritmo "OperadoresRelacionais"
var
   A, B, C : Inteiro
inicio
   A <- 2
   B <- 3
   C <- 5
   Escreva(A > 2)   // Output: FALSO
fimalgoritmo
````

**Result:**
````
FALSO
````

> A equals 2. For `>` to be true, A would need to be **at least 3**.

---

## Greater Than or Equal To `>=`

**Description:**  
Returns true when the left value is greater than **or** equal to the right value. Since A = 2 and we compare against 2, the equal condition is satisfied.
````portugol
algoritmo "OperadoresRelacionais"
var
   A, B, C : Inteiro
inicio
   A <- 2
   B <- 3
   C <- 5
   Escreva(A >= 2)   // Output: VERDADEIRO
fimalgoritmo
````

**Result:**
````
VERDADEIRO
````

> A equals 2, so `A >= 2` is satisfied by the **equal** part of the operator.

---

## Combining with Exponentiation `^`

**Description:**  
Relational operators can be used with expressions, not just simple variables. Here, `A ^ B` is evaluated first (operator precedence), then compared with C.
````portugol
algoritmo "OperadoresRelacionais"
var
   A, B, C : Inteiro
inicio
   A <- 2
   B <- 3
   C <- 5
   Escreva(C > A ^ B)   // 5 > 8 → Output: FALSO
fimalgoritmo
````

**Result:**
````
FALSO
````

> `A ^ B = 2³ = 8`. C (5) is **not greater than** 8.

---

## Less Than with Exponentiation `^`

**Description:**  
Same expression as above, but using `<`. Since 5 is less than 8, this returns true.
````portugol
algoritmo "OperadoresRelacionais"
var
   A, B, C : Inteiro
inicio
   A <- 2
   B <- 3
   C <- 5
   Escreva(C < A ^ B)   // 5 < 8 → Output: VERDADEIRO
fimalgoritmo
````

**Result:**
````
VERDADEIRO
````

> `A ^ B = 2³ = 8`. C (5) **is less than** 8.

---

## Modulo with Less Than or Equal `%` + `<=`

**Description:**  
The modulo operator `%` returns the **remainder** of a division. Here `C % 2 = 5 % 2 = 1`. We then check if B (3) is less than or equal to that remainder.
````portugol
algoritmo "OperadoresRelacionais"
var
   A, B, C : Inteiro
inicio
   A <- 2
   B <- 3
   C <- 5
   Escreva(B <= C % 2)   // 3 <= 1 → Output: FALSO
fimalgoritmo
````

**Result:**
````
FALSO
````

> `C % 2` can only ever be `0` or `1`. Since B = 3 is always greater than 1, this will always be **FALSO**.

---

## Modulo with a Literal `<=`

**Description:**  
Now we compare the literal value `1` against `C % 2`. Since the remainder is exactly 1, the condition `1 <= 1` is satisfied.
````portugol
algoritmo "OperadoresRelacionais"
var
   A, B, C : Inteiro
inicio
   A <- 2
   B <- 3
   C <- 5
   Escreva(1 <= C % 2)   // 1 <= 1 → Output: VERDADEIRO
fimalgoritmo
````

**Result:**
````
VERDADEIRO
````

> `C % 2 = 1`. The condition `1 <= 1` is true because of the **equal** part of `<=`.

---

## Results Summary Table

| Expression   | Calculation | Result          |
|--------------|-------------|-----------------|
| `A > B`      | 2 > 3       | **FALSO**       |
| `A = B`      | 2 = 3       | **FALSO**       |
| `A < B`      | 2 < 3       | **VERDADEIRO**  |
| `A <> B`     | 2 ≠ 3       | **VERDADEIRO**  |
| `A > 2`      | 2 > 2       | **FALSO**       |
| `A >= 2`     | 2 ≥ 2       | **VERDADEIRO**  |
| `C > A ^ B`  | 5 > 8       | **FALSO**       |
| `C < A ^ B`  | 5 < 8       | **VERDADEIRO**  |
| `B <= C % 2` | 3 ≤ 1       | **FALSO**       |
| `1 <= C % 2` | 1 ≤ 1       | **VERDADEIRO**  |

---

## Logical Operators — `E`, `OU`, `NÃO`

**Description:**  
Logical operators also return a logical value, but they are **not** used to compare numbers directly. They are used to **combine the results of relational expressions** into a single final condition.

| Operator | Meaning | Returns VERDADEIRO when...         |
|----------|---------|------------------------------------|
| `E`      | AND     | **Both** conditions are true       |
| `OU`     | OR      | **At least one** condition is true |
| `NÃO`   | NOT     | The condition is **false**         |

---

## Practical Example — Triangle Classifier

**Description:**  
This program reads 3 sides of a triangle and checks whether it is **equilateral** (all sides equal) or **scalene** (all sides different from each other), using the `E` (AND) logical operator to combine relational conditions.
````portugol
algoritmo "triangulos"
var
   L1, L2, L3 : Real
   EQ, ES      : Logico
inicio
   Escreva("Digite o primeiro lado: ")
   Leia(L1)
   Escreva("Digite o segundo lado: ")
   Leia(L2)
   Escreva("Digite o terceiro lado: ")
   Leia(L3)

   // Equilateral: ALL three sides must be equal
   EQ <- (L1 = L2) E (L2 = L3)

   // Scalene: ALL three sides must be different from each other
   ES <- (L1 <> L2) E (L2 <> L3) E (L2 <> L1)

   Escreval("O triangulo e EQUILATERO? ", EQ)
   Escreval("O triangulo e ESCALENO? ", ES)
fimalgoritmo
````

**How the logic works:**
````
Equilateral:  (L1 = L2)  E  (L2 = L3)               → VERDADEIRO only if ALL sides are equal
Scalene:      (L1 <> L2) E  (L2 <> L3) E (L2 <> L1) → VERDADEIRO only if ALL sides differ
````

**Test Cases:**

| L1 | L2 | L3 | Equilateral?       | Scalene?           |
|----|----|----|--------------------|--------------------|
| 3  | 3  | 3  | **VERDADEIRO**     | FALSO              |
| 3  | 4  | 5  | FALSO              | **VERDADEIRO**     |
| 3  | 3  | 5  | FALSO              | FALSO              |

> 💡 An **isosceles** triangle (two equal sides) returns FALSO for both — it is neither equilateral nor scalene.

---

## Key Takeaways

| Concept | Explanation |
|---------|-------------|
| Relational operators | Compare two values and return a logical result |
| Logical operators | Combine logical results into a final condition |
| `E` (AND) | All conditions must be true |
| `OU` (OR) | At least one condition must be true |
| `NÃO` (NOT) | Inverts the logical result |
| Operator precedence | Expressions inside `()` are evaluated first, then `^`, then `%`, then relational operators |

**Complete Relational Operator Table:**

| Operator | Meaning                  | Example  | Result with A=2, B=3 |
|----------|--------------------------|----------|----------------------|
| `>`      | Greater than             | `A > B`  | FALSO                |
| `<`      | Less than                | `A < B`  | VERDADEIRO           |
| `>=`     | Greater than or equal to | `A >= B` | FALSO                |
| `<=`     | Less than or equal to    | `A <= B` | VERDADEIRO           |
| `=`      | Equal to                 | `A = B`  | FALSO                |
| `<>`     | Not equal to             | `A <> B` | VERDADEIRO           |

Happy coding! 🚀

---
