---
layout: post
title: "🔀 Conditional Structures — If-Then-Else Logic Explained"
date: 2026-04-14
categories: [algorithms, logic, conditional, visualg, exercises]
excerpt: "Master conditional structures in algorithms — simple and compound if-then-else statements explained with practical examples and exercises in VisualG."
---

## About this content

This material introduces **conditional structures** (decision-making) in algorithms. Conditional structures allow a program to execute different actions based on whether a condition is true or false. These fundamentals apply to any programming language — from C and Python to JavaScript and Scratch.

> 🎯 The goal is to understand **how to make decisions in algorithms** using `If-Then-Else` logic.

---

## Simple Conditional Structure (If-Then)

**Description:** Executes a block of code only if the condition is true.

**Structure in VisualG:**

```
If (expression) Then
    Block
EndIf
```

**Example in Portuguese:**  
*If I have money, then I will take a trip to Disney*

**Practical example:**

```
If (money >= 10000) Then
    Write("Going to Disney")
EndIf
```

---

## Compound Conditional Structure (If-Then-Else)

**Description:** Executes one block if the condition is true, and another block if the condition is false.

**Structure in VisualG (use TAB to indent):**

```
If (expression) Then
    Block A
Else
    Block B
EndIf
```

**Example in Portuguese:**  
*If I have money, then I will take a trip to Disney, otherwise I will stay home*

**Practical example:**

```
If (money >= 10000) Then
    Write("Going to Disney")
Else
    Write("#sad")
EndIf
```

---

## Exercise 1 — Even or Odd

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

## Exercise 2 — BMI Calculator

**Statement:** Calculate the Body Mass Index (BMI) and tell if the person is in the ideal weight range.

**Formula:**  
BMI = Mass (kg) / (Height × Height) (m)

**Ideal range:** BMI between 18.5 and 24.9

**Pseudocode:**

```
ALGORITHM BMICalculator
VAR
    mass, height, bmi: REAL
BEGIN
    INPUT mass
    INPUT height
    bmi ← mass / (height ^ 2)
    OUTPUT "BMI: ", bmi
    
    IF (bmi >= 18.5) AND (bmi < 25) THEN
        OUTPUT "Congratulations! You are in your ideal weight"
    ELSE
        OUTPUT "You are not in the ideal weight range"
    ENDIF
END
```

**Example:**  
Mass = 70 kg, Height = 1.75 m → BMI = 70 / (1.75²) = 70 / 3.0625 = 22.86 → Ideal weight ✅

---

## Exercise 3 — Positive or Negative

**Statement:** Read a number and tell if it is positive, negative, or zero.

**Pseudocode:**

```
ALGORITHM PositiveNegative
VAR
    N: INTEGER
BEGIN
    INPUT N
    
    IF N > 0 THEN
        OUTPUT "Positive"
    ELSE
        IF N < 0 THEN
            OUTPUT "Negative"
        ELSE
            OUTPUT "Zero"
        ENDIF
    ENDIF
END
```

---

## Exercise 4 — Grade Approval

**Statement:** Read a student's grade and display whether they are approved (grade >= 7), in recovery (grade between 5 and 6.9), or failed (grade < 5).

**Pseudocode:**

```
ALGORITHM GradeApproval
VAR
    grade: REAL
BEGIN
    INPUT grade
    
    IF grade >= 7 THEN
        OUTPUT "Approved"
    ELSE
        IF grade >= 5 THEN
            OUTPUT "Recovery"
        ELSE
            OUTPUT "Failed"
        ENDIF
    ENDIF
END
```

---

## Summary Table

| Structure | VisualG Syntax | Use Case |
|-----------|----------------|----------|
| Simple | `If (condition) Then` ... `EndIf` | Execute code only when condition is true |
| Compound | `If (condition) Then` ... `Else` ... `EndIf` | Choose between two alternatives |
| Nested | `If` ... `Else If` ... `Else` ... `EndIf` | Multiple alternatives |

---

## Next steps

In **Part 2**, we will cover:
- Logical operators (AND, OR, NOT)
- Nested conditionals
- Multiple conditions
- Real-world decision-making algorithms

> 📌 **Practice tip:** Always indent your code using the TAB key for better readability. Test your conditions with different input values.

```
Keep practicing. Every algorithm is built one decision at a time. 🚀
```
