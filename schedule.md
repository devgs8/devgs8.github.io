---
layout: page
title: "📅 Study Schedule"
permalink: /schedule/
---

<div id="progress-tracker"></div>

<script src="/assets/js/progress.js"></script>

<style>
/* Progress Tracker Styles */
.progress-container {
    background: #f6f8fa;
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 32px;
    border: 1px solid #e1e4e8;
}

.progress-container h3 {
    margin: 0 0 16px 0;
    font-size: 18px;
    color: #24292e;
}

.progress-bar-wrapper {
    margin: 12px 0;
}

.progress-bar-wrapper.small {
    margin: 8px 0;
}

.progress-bar-bg {
    background-color: #e1e4e8;
    border-radius: 20px;
    overflow: hidden;
    height: 32px;
}

.progress-bar-wrapper.small .progress-bar-bg {
    height: 24px;
}

.progress-bar-fill {
    background: linear-gradient(90deg, #2cbe4e, #28a745);
    height: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: width 0.5s ease;
}

.progress-percent {
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding-right: 10px;
}

.modules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    margin-top: 20px;
}

.module-card {
    background: white;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #e1e4e8;
    transition: transform 0.2s, box-shadow 0.2s;
}

.module-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.module-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 8px;
}

.module-name {
    font-weight: 600;
    color: #24292e;
    font-size: 16px;
}

.module-status {
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 20px;
    font-weight: 500;
}

.status-completed {
    background: #d4edda;
    color: #155724;
}

.status-progress {
    background: #fff3cd;
    color: #856404;
}

.status-pending {
    background: #e9ecef;
    color: #495057;
}

.module-stats {
    font-size: 12px;
    color: #586069;
    margin-top: 8px;
    text-align: right;
}

@media (max-width: 600px) {
    .progress-container {
        padding: 16px;
    }
    
    .modules-grid {
        grid-template-columns: 1fr;
    }
    
    .module-header {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>

# 📅 My Study Schedule

Welcome to my study roadmap! As a **System Administrator transitioning to Java Development**, I'm following a structured plan to master Algorithms, Java, and Backend Development. This schedule keeps me accountable and helps you follow along with my learning journey.

---

## 🎯 My Goals

- ✅ Complete **Algorithms and Logic** (Guanabara Course)
- ✅ Master **Java Fundamentals** (Guanabara Course)
- ✅ Master **Object-Oriented Programming** (Head First Java 3rd Ed)
- ✅ Share **1 post per study session** to reinforce learning
- ✅ Build **portfolio projects** along the way
- ✅ Build a complete **Spring Boot REST API** connected to a Database

---

## 📚 Course Overview

I'm combining **Gustavo Guanabara's courses** (Curso em Vídeo) for fundamentals, **Head First Java (3rd Edition)** for Object Orientation, and modern Backend concepts. All my notes and exercises are documented here in English to practice technical writing.

| Module | Duration | Posts | Status |
|--------|----------|-------|--------|
| Algorithms & Logic | 4 weeks | ~16 posts | 🟢 In Progress |
| Java Basics | 5 weeks | ~25 posts | ⏳ Upcoming |
| OOP (Head First) | 4 weeks | ~8 posts | ⏳ Upcoming |
| Advanced & Backend | 5 weeks | ~8 posts | ⏳ Upcoming |

---

## 🗓️ Module 1: Algorithms & Programming Logic

*Based on Guanabara's Algorithm Course (15 classes)*

### Week 1: Fundamentals ✅

| Day | Class | Topic | Post |
|-----|-------|-------|------|
| Day 1 | Aula 1 | Introduction to Algorithms | [🧠 What Are Algorithms?](/2026/03/21/what-are-algorithms.html) |
| Day 2 | Aula 2 | First Algorithm (Pseudocode) | [📝 My First Algorithm](/2026/03/22/my-first-algorithm-pseudocode.html) |
| Day 3 | Aula 3 | Input & Arithmetic Operators | [⌨️ Input, Variables, Operators](/2026/03/23/input-operators-and-variables.html) |
| Day 4 | Aula 4 | Logical & Relational Operators | [🔍 Logical and Relational Operators](/2026/03/24/logical-and-relational-operators.html) |

### Week 2: Scratch & Conditionals

| Day | Class | Topic | Post |
|-----|-------|-------|------|
| Day 5 | Aula 5 | Introduction to Scratch | [🎮 Learning Logic with Scratch](/2026/03/25/learning-logic-with-scratch.html) |
| Day 6 | Aula 6 | Solved Algorithm Exercises | [✅ Algorithm Exercises Solved (Part 1)](/2026/03/26/algorithm-exercises-solved-part1.html) |
| Day 7 | Aula 7 | Conditional Structures (IF/ELSE) | [🔀 Conditional Structures: IF, ELSE, ELSE IF](/2026/03/27/conditional-structures-if-else.html) |
| Day 8 | Aula 8 | Nested Conditions & Switch-Case | [📊 Nested Conditions and Switch-Case](/2026/03/28/nested-conditions-and-switch-case.html) |

### Week 3: Loops (Repetition Structures)

| Day | Class | Topic | Post |
|-----|-------|-------|------|
| Day 9 | Aula 9 | WHILE Loop | [🔄 While Loop in Algorithms](/2026/03/29/while-loop-in-algorithms.html) |
| Day 10 | Aula 10 | DO-WHILE Loop | [🔁 DO-WHILE: Execute First, Check Later](/2026/03/30/do-while-loop.html) |
| Day 11 | Aula 11 | FOR Loop | [📊 FOR Loop: When You Know the Count](/2026/03/31/for-loop.html) |
| Day 12 | Aula 12 | Nested Loops & Break/Continue | [🌀 Nested Loops and Loop Control](/2026/04/01/nested-loops-and-loop-control.html) |
| Day 13 | - | Loop Exercises | [💪 10 Loop Exercises Solved](/2026/04/02/loop-exercises-solved.html) |

### Week 4: Procedures, Functions, Arrays & Matrices

| Day | Class | Topic | Post |
|-----|-------|-------|------|
| Day 14 | Aula 12 | Procedures | [📦 Procedures: Reusable Code](/2026/04/03/procedures-reusable-code.html) |
| Day 15 | Aula 13 | Functions | [🔧 Functions: Returning Values](/2026/04/04/functions-returning-values.html) |
| Day 16 | Aula 14 | Arrays (Vectors) | [📚 Arrays: Storing Multiple Values](/2026/04/05/arrays-vetores.html) |
| Day 17 | Aula 15 | Matrices | [🗂️ Matrices: 2D Arrays](/2026/04/06/matrices-2d-arrays.html) |
| Day 18 | - | Final Project | [🎯 Module 1 Final Project](/2026/04/07/algorithms-final-project.html) |

---

## 🗓️ Module 2: Java Basics

*Based on Guanabara's Java Course (15 classes + exercises)*

### Week 5: Getting Started with Java

| Day | Class | Topic | Post |
|-----|-------|-------|------|
| Day 19 | Aula 1 + Ex 01 | Java History | [📜 History of Java](/2026/04/08/history-of-java.html) |
| Day 20 | Aula 2 + Ex 02 | How Java Works | [⚙️ How Java Works](/2026/04/09/how-java-works-jvm-jre-jdk.html) |
| Day 21 | Aula 3 + Ex 03 | Installing JDK | [💻 Installing JDK and Setting PATH](/2026/04/10/installing-jdk.html) |
| Day 22 | Aula 4 + Ex 04 | First Java Program | [☕ Hello World in Java](/2026/04/11/hello-world-java.html) |
| Day 23 | Aula 5 + Ex 05 | Swing & JavaFX Intro | [🖼️ GUI in Java: Swing vs JavaFX](/2026/04/12/swing-javafx-intro.html) |

### Week 6: Types, Operators & Input

| Day | Class | Topic | Post |
|-----|-------|-------|------|
| Day 24 | Aula 6 + Ex 06 | Primitive Types | [📊 Primitive Types in Java](/2026/04/13/primitive-types-java.html) |
| Day 25 | Aula 7 + Ex 07 | Arithmetic & Math | [🧮 Arithmetic Operators and Math Class](/2026/04/14/arithmetic-operators-math-class.html) |
| Day 26 | Aula 8 + Ex 08 | Logical Operators | [🔍 Logical and Relational Operators in Java](/2026/04/15/logical-relational-operators-java.html) |
| Day 27 | - | Calculator Project | [🧮 Building a Calculator in Java](/2026/04/16/calculator-java-project.html) |

### Week 7: Conditionals

| Day | Class | Topic | Post |
|-----|-------|-------|------|
| Day 28 | Aula 9 + Ex 09 | Conditionals (Part 1) | [🔀 IF and ELSE in Java](/2026/04/17/if-else-java.html) |
| Day 29 | Aula 10 + Ex 10 | Conditionals (Part 2) | [📊 SWITCH CASE in Java](/2026/04/18/switch-case-java.html) |
| Day 30 | - | Exercises | [✅ Conditional Exercises Solved](/2026/04/19/conditional-exercises-java.html) |

### Week 8: Loops in Java

| Day | Class | Topic | Post |
|-----|-------|-------|------|
| Day 31 | Aula 11 + Ex 11 | WHILE and DO-WHILE | [🔄 While and Do-While in Java](/2026/04/20/while-do-while-java.html) |
| Day 32 | Aula 12 + Ex 12 | FOR Loop | [📊 FOR Loop in Java](/2026/04/21/for-loop-java.html) |
| Day 33 | Aula 13 + Ex 13 | Nested Loops | [🌀 Nested Loops and Break/Continue](/2026/04/22/nested-loops-java.html) |
| Day 34 | - | Loop Exercises | [💪 Loop Exercises in Java](/2026/04/23/loop-exercises-java.html) |

### Week 9: Arrays, Methods & Final Project

| Day | Class | Topic | Post |
|-----|-------|-------|------|
| Day 35 | Aula 14 + Ex 14 | Arrays | [📚 Arrays in Java](/2026/04/24/arrays-java.html) |
| Day 36 | Aula 15 + Ex 15 | Methods | [🔧 Methods in Java](/2026/04/25/methods-java.html) |
| Day 37 | - | Exercises | [✅ Arrays & Methods Exercises](/2026/04/26/arrays-methods-exercises.html) |
| Day 38 | - | Final Project | [🎯 Module 2 Final Project](/2026/04/27/java-final-project.html) |

---

## 🗓️ Module 3: Object-Oriented Programming (OOP)

*Based on "Head First Java 3rd Ed." & University Core*

| Week | Topic | Reading | Posts |
|------|-------|---------|-------|
| Week 10 | Classes and Objects | Head First: Ch 1-4 | [🏗️ Classes and Objects in Java](/2026/05/01/classes-objects-java.html) |
| Week 11 | Inheritance | Head First: Ch 7-8 | [🌳 Inheritance: Reusing Code](/2026/05/08/inheritance-java.html) |
| Week 12 | Polymorphism | Head First: Ch 8-9 | [🔄 Polymorphism: One Interface, Many Forms](/2026/05/15/polymorphism-java.html) |
| Week 13 | Encapsulation & Abstraction | Head First: Ch 9 | [🔒 Encapsulation and Abstraction](/2026/05/22/encapsulation-abstraction-java.html) |

---

## 🗓️ Module 4: Advanced Java & Backend (Spring Boot)

*The Bridge to Professional Development*

| Week | Topic | Focus | Posts |
|------|-------|-------|-------|
| Week 14 | Collections Framework | ArrayList, HashMap | [📦 Collections: ArrayList, HashMap](/2026/05/29/collections-java.html) |
| Week 15 | Exception Handling | Try/Catch, Exceptions | [⚠️ Exception Handling in Java](/2026/06/05/exceptions-java.html) |
| Week 16 | File I/O | Java Streams, I/O | [📁 File Input/Output in Java](/2026/06/12/file-io-java.html) |
| Week 17 | Intro to Spring Boot | REST APIs, HTTP | [🚀 My First Spring Boot API](/2026/06/19/spring-boot-intro.html) |
| Week 18 | Database Integration | Spring Data JPA | [🗄️ Connecting Java to a Database](/2026/06/26/database-jpa-java.html) |

---

## 📝 How to Follow Along

1. **Bookmark this page** — I update it after each study session
2. **Click on any post link** — each one contains my notes, code, and reflections
3. **Code along with me** — try the exercises before checking my solutions
4. **Check the GitHub repository** — all code is available there

---

## 🔗 Quick Links

[🏠 Home](/path) | [👤 About Me](/path) | [📅 Schedule](/path) | [🐙 GitHub](/path)
