---
layout: post
title: "🧩 Algorithm Exercises Solved (Part 1) — Logic in Practice"
date: 2026-04-14
categories: [algorithms, logic, programming, exercises]
excerpt: "Step-by-step solutions to classic algorithm exercises — variables, conditionals, loops, and counters explained with clarity and practical examples."
---

## About this content

This is the first part of a series dedicated to **solving algorithm exercises step by step**. Each problem is presented with a clear statement, logical reasoning, and a pseudocode / flowchart approach. These fundamentals apply to any programming language — from C and Python to JavaScript and Scratch.

> 🎯 The goal is not just the answer, but the **thought process behind the solution**.

---

## Exercise 1 — Sum of two numbers

**Statement:** Read two integers and display their sum.

**Logic:**  
1. Start  
2. Read value A  
3. Read value B  
4. Calculate SUM = A + B  
5. Display SUM  
6. End

**Pseudocode:**
```
ALGORITHM SumTwoNumbers
VAR
    A, B, SUM: INTEGER
BEGIN
    INPUT A
    INPUT B
    SUM ← A + B
    OUTPUT SUM
END
```

---

## Exercise 2 — Even or odd

**Statement:** Read an integer and tell if it is even or odd.

**Logic:**  
A number is even if the remainder of its division by 2 equals zero.

**Pseudocode:**
```
ALGORITHM EvenOrOdd
VAR
    N: INTEGER
BEGIN
    INPUT N
    IF N % 2 = 0 THEN
        OUTPUT "Even"
    ELSE
        OUTPUT "Odd"
    ENDIF
END
```

---

## Exercise 3 — Sum of 1 to N

**Statement:** Read a positive integer N and calculate the sum of all integers from 1 to N.

**Logic:**  
Use an accumulator variable and a loop.

**Pseudocode:**
```
ALGORITHM SumOneToN
VAR
    N, I, SUM: INTEGER
BEGIN
    INPUT N
    SUM ← 0
    FOR I ← 1 TO N DO
        SUM ← SUM + I
    ENDFOR
    OUTPUT SUM
END
```

**Example:**  
If N = 5 → 1+2+3+4+5 = 15

---

## Exercise 4 — Multiplication table

**Statement:** Read an integer and display its multiplication table from 1 to 10.

**Pseudocode:**
```
ALGORITHM MultiplicationTable
VAR
    N, I: INTEGER
BEGIN
    INPUT N
    FOR I ← 1 TO 10 DO
        OUTPUT N, " x ", I, " = ", N * I
    ENDFOR
END
```

---

## Exercise 5 — Largest of three numbers

**Statement:** Read three different integers and display the largest.

**Logic:**  
Compare values sequentially.

**Pseudocode:**
```
ALGORITHM LargestOfThree
VAR
    A, B, C, LARGEST: INTEGER
BEGIN
    INPUT A, B, C
    LARGEST ← A
    IF B > LARGEST THEN
        LARGEST ← B
    ENDIF
    IF C > LARGEST THEN
        LARGEST ← C
    ENDIF
    OUTPUT LARGEST
END
```

---

## Next steps

In **Part 2**, we will cover:
- Prime numbers
- Factorial
- Fibonacci sequence
- Number reversal
- Menu-driven programs

> 📌 **Practice tip:** Try to implement each algorithm in your favorite programming language after understanding the logic.

```
Keep practicing. Logic is built one exercise at a time. 🚀
```
