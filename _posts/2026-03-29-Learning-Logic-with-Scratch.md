---
layout: post
title: "📝 Learning Logic with Scratch"
date: 2026-03-31
categories: [algorithms, scratch, logic, programming]
excerpt: "Learning programming logic visually with Scratch — variables, operators, conditionals, loops, events and sprites explained through practical examples."
---

## About this content

This material introduces **programming logic through Scratch**, a visual block-based programming environment developed by MIT. Even though Scratch uses drag-and-drop blocks instead of typed code, every concept maps directly to real programming: variables, operators, conditionals, loops, and events. Each section includes a block representation and a logic explanation.

> 🔗 You can try all examples at [scratch.mit.edu](https://scratch.mit.edu) — no installation required.

---

## What is Scratch?

Scratch is a **visual programming language** where you build programs by snapping coloured blocks together, like puzzle pieces. Each block represents an instruction — the same instructions you write in text-based languages like Portugol, Python or JavaScript.

### The Scratch Interface

| Area | Purpose |
|------|---------|
| **Stage** | Where the program runs — sprites move and interact here |
| **Sprite Panel** | List of all characters and objects in the project |
| **Block Palette** | All available blocks, grouped by category and colour |
| **Scripts Area** | Where you drag and connect blocks to build your program |

### Block Categories

| Colour | Category | Examples |
|--------|----------|---------|
| 🟡 Yellow | Events | `when green flag clicked`, `when key pressed` |
| 🟠 Orange | Control | `if / then`, `repeat`, `forever` |
| 🔵 Blue | Motion | `move 10 steps`, `turn 90 degrees` |
| 🟣 Purple | Looks | `say "Hello"`, `change costume` |
| 🔴 Red | Sound | `play sound`, `stop all sounds` |
| 🟢 Green | Operators | `+`, `-`, `*`, `/`, `and`, `or`, `not` |
| 🟧 Dark Orange | Variables | `set variable to`, `change variable by` |
| 🩵 Light Blue | Sensing | `ask and wait`, `answer`, `touching?` |

---

## Events and Sprites

**Description:**  
Every Scratch program starts with an **event** — a trigger that tells the program when to begin. The most common is clicking the green flag. A **sprite** is any character or object on the stage that can move, speak, or react.

### Basic Event Structure
```
┌─────────────────────────────┐
│  when 🚩 green flag clicked │  ← Event (trigger)
├─────────────────────────────┤
│  say "Hello, World!" for 2s │  ← Action
└─────────────────────────────┘
```

### Multiple Events on the Same Sprite
```
┌──────────────────────────────────┐
│  when 🚩 green flag clicked      │
│  say "I am ready!" for 2 seconds │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  when [space] key pressed        │
│  move 10 steps                   │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  when this sprite clicked        │
│  say "You clicked me!" for 1s    │
└──────────────────────────────────┘
```

> 💡 Each sprite can have **multiple independent scripts** running at the same time. Events are the entry points that activate each one.

### Key Concept — Event-Driven Programming
```
User action  →  Event fires  →  Script runs  →  Result on stage

Click flag   →  green flag   →  sprite moves →  animation plays
Press Space  →  key pressed  →  sprite jumps →  jump animation
Click sprite →  sprite click →  sprite talks →  speech bubble
```

---

## Variables and Operators

**Description:**  
Variables in Scratch store values that can change during the program. Operators perform calculations or comparisons on those values, exactly like in Portugol.

### Creating a Variable
```
1. Click "Variables" in the Block Palette
2. Click "Make a Variable"
3. Give it a name: score, lives, speed, name...
4. Choose: For all sprites  OR  For this sprite only
```

### Variable Blocks
```
┌──────────────────────────────┐
│  set [score] to  0           │  ← assigns value 0
├──────────────────────────────┤
│  change [score] by  1        │  ← adds 1 to current value
├──────────────────────────────┤
│  show variable [score]       │  ← displays value on stage
└──────────────────────────────┘
```

### Operators

Scratch operator blocks are **oval-shaped** and fit inside other blocks as values.

**Arithmetic Operators:**
```
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│  ( 5 + 3 )    │   │  ( 10 - 4 )   │   │  ( 6 * 2 )    │
│  Result: 8    │   │  Result: 6    │   │  Result: 12   │
└───────────────┘   └───────────────┘   └───────────────┘

┌───────────────┐   ┌───────────────────┐
│  ( 10 / 4 )   │   │  ( 10 mod 3 )     │
│  Result: 2.5  │   │  Result: 1        │
└───────────────┘   └───────────────────┘
```

**Comparison Operators (return true / false):**
```
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│  ( score > 10 )  │   │  ( score < 5  )  │   │  ( score = 0  )  │
│  true if score   │   │  true if score   │   │  true if score   │
│  is above 10     │   │  is below 5      │   │  equals 0        │
└──────────────────┘   └──────────────────┘   └──────────────────┘
```

### Practical Example — Score Counter
```
┌───────────────────────────────┐
│  when 🚩 green flag clicked   │
│  set [score] to  0            │
│  set [lives] to  3            │
│  show variable [score]        │
│  show variable [lives]        │
└───────────────────────────────┘

┌───────────────────────────────┐
│  when this sprite clicked     │
│  change [score] by  1         │
│  say (join "Score: " score)   │
│      for 1 second             │
└───────────────────────────────┘
```

**Logic Equivalent (Portugol):**
```portugol
// What Scratch is doing internally:
algoritmo "ScoreCounter"
var
   score, lives : Inteiro
inicio
   score <- 0
   lives <- 3
   // when sprite is clicked:
   score <- score + 1
   Escreva("Score: ", score)
fimalgoritmo
```

---

## Conditionals — If / Then / Else

**Description:**  
Conditionals let the program **make decisions**. In Scratch, the `if / then` block runs its inner blocks only when the condition is **true**. The `if / then / else` block provides an alternative action when the condition is **false**.

### If / Then
```
┌──────────────────────────────────┐
│  if  < score > 10 >  then        │
│  │   say "You are winning!" 2s   │
│  end                             │
└──────────────────────────────────┘
```

### If / Then / Else
```
┌──────────────────────────────────┐
│  if  < lives > 0 >  then         │
│  │   say "Keep playing!" 2s      │
│  else                            │
│  │   say "Game Over!" 2s         │
│  │   stop all                    │
│  end                             │
└──────────────────────────────────┘
```

### Nested Conditionals
```
┌───────────────────────────────────────┐
│  if  < score > 50 >  then             │
│  │   if  < score > 100 >  then        │
│  │   │   say "CHAMPION!" for 3s       │
│  │   else                             │
│  │   │   say "Almost there!" for 2s   │
│  │   end                              │
│  else                                 │
│  │   say "Keep going!" for 2s         │
│  end                                  │
└───────────────────────────────────────┘
```

### Practical Example — Temperature Checker
```
┌────────────────────────────────────────────┐
│  when 🚩 green flag clicked                │
│  ask "What is the temperature today?" wait │
│  set [temp] to (answer)                    │
│                                            │
│  if  < temp > 30 >  then                   │
│  │   say "It is hot! Stay hydrated." 3s    │
│  else                                      │
│  │   if  < temp < 15 >  then               │
│  │   │   say "It is cold! Wear a coat." 3s │
│  │   else                                  │
│  │   │   say "Nice weather today!" 3s      │
│  │   end                                   │
│  end                                       │
└────────────────────────────────────────────┘
```

**Logic Equivalent (Portugol):**
```portugol
algoritmo "TemperatureChecker"
var
   temp : Real
inicio
   Escreva("What is the temperature today? ")
   Leia(temp)
   se temp > 30 entao
      Escreva("It is hot! Stay hydrated.")
   senao
      se temp < 15 entao
         Escreva("It is cold! Wear a coat.")
      senao
         Escreva("Nice weather today!")
      fimse
   fimse
fimalgoritmo
```

---

## Loops — Repeat and Forever

**Description:**  
Loops allow a set of blocks to run **multiple times** without repeating the code manually. Scratch has three types of loop blocks, each serving a different purpose.

### Three Types of Loop

| Block | Runs... | Use when... |
|-------|---------|-------------|
| `forever` | Endlessly until stopped | Game loops, animations, constant checking |
| `repeat (n)` | Exactly n times | Known number of repetitions |
| `repeat until < condition >` | Until condition becomes true | Waiting for something to happen |

### Forever Loop — Game Loop
```
┌──────────────────────────────────────────┐
│  when 🚩 green flag clicked              │
│  forever                                 │
│  │   if  < key [right arrow] pressed >   │
│  │   │   change x by  5                  │
│  │   end                                 │
│  │   if  < key [left arrow] pressed >    │
│  │   │   change x by  -5                 │
│  │   end                                 │
│  end                                     │
└──────────────────────────────────────────┘
```

> 💡 `forever` is the backbone of most Scratch games — it continuously checks for user input and updates the sprite position on every frame.

### Repeat (n) — Counting Loop
```
┌────────────────────────────────────┐
│  when 🚩 green flag clicked        │
│  set [counter] to  0               │
│  repeat  10                        │
│  │   change [counter] by  1        │
│  │   say (counter) for 0.5 seconds │
│  end                               │
│  say "Done!" for 2 seconds         │
└────────────────────────────────────┘
```

**Result:** counter counts from 1 to 10, then says "Done!".

### Repeat Until — Conditional Loop
```
┌───────────────────────────────────────┐
│  when 🚩 green flag clicked           │
│  set [lives] to  3                    │
│  repeat until  < lives = 0 >          │
│  │   wait 1 second                    │
│  │   say (join "Lives: " lives) 1s    │
│  │   change [lives] by  -1            │
│  end                                  │
│  say "Game Over!" for 2 seconds       │
└───────────────────────────────────────┘
```

**Logic Equivalent (Portugol):**
```portugol
algoritmo "LivesCounter"
var
   lives : Inteiro
inicio
   lives <- 3
   enquanto lives > 0 faca
      Escreva("Lives: ", lives)
      lives <- lives - 1
   fimenquanto
   Escreva("Game Over!")
fimalgoritmo
```

---

## Putting It All Together — Mini Game

**Description:**  
This example combines **events, variables, conditionals and loops** into a simple number guessing game. The sprite picks a secret number, the user guesses, and the sprite gives hints until the answer is correct.
```
┌──────────────────────────────────────────────────────┐
│  when 🚩 green flag clicked                          │
│                                                      │
│  set [secret] to  (pick random 1 to 10)              │
│  set [attempts] to  0                                │
│                                                      │
│  repeat until  < answer = secret >                   │
│  │                                                   │
│  │   ask "Guess a number between 1 and 10!" wait     │
│  │   change [attempts] by  1                         │
│  │                                                   │
│  │   if  < answer > secret >  then                   │
│  │   │   say "Too high! Try lower." for 1.5s         │
│  │   else                                            │
│  │   │   if  < answer < secret >  then               │
│  │   │   │   say "Too low! Try higher." for 1.5s     │
│  │   │   end                                         │
│  │   end                                             │
│  │                                                   │
│  end                                                 │
│                                                      │
│  say (join "Correct! You got it in " attempts) 3s    │
└──────────────────────────────────────────────────────┘
```

**Logic flow:**
```
Start
  │
  ▼
secret = random(1–10)
attempts = 0
  │
  ▼
┌─────────────────────┐
│  Ask user to guess  │ ◄──────────────────────┐
└─────────────────────┘                        │
  │                                            │
  ▼                                            │
attempts = attempts + 1                        │
  │                                            │
  ├── answer > secret ──► "Too high!"  ────────┤
  │                                            │
  ├── answer < secret ──► "Too low!"   ────────┤
  │                                            │
  └── answer = secret ──► "Correct! You got it in X attempts"
```

---

## Scratch vs Portugol — Concept Mapping

| Concept | Portugol | Scratch |
|---------|----------|---------|
| Start program | `inicio` | `when green flag clicked` |
| Output | `Escreva()` | `say [] for [] seconds` |
| Input | `Leia()` | `ask [] and wait` + `answer` |
| Variable | `var x : Inteiro` | `Make a Variable` |
| Assignment | `x <- 5` | `set [x] to 5` |
| Increment | `x <- x + 1` | `change [x] by 1` |
| If / Else | `se / senao / fimse` | `if / then / else / end` |
| While loop | `enquanto / fimenquanto` | `repeat until` |
| For loop | `para / fimpara` | `repeat (n)` |
| Infinite loop | — | `forever` |
| Logical AND | `E` | `and` block |
| Logical OR | `OU` | `or` block |
| Logical NOT | `NÃO` | `not` block |

---

## Key Takeaways

| Concept | Explanation |
|---------|-------------|
| Events | Every script needs a trigger — the green flag is the most common |
| Sprites | Characters and objects that hold scripts and react to events |
| Variables | Named containers that store values which can change during execution |
| Operators | Perform calculations (`+`, `-`, `*`, `/`, `mod`) or comparisons (`>`, `<`, `=`) |
| Conditionals | `if / then / else` — the program makes decisions based on conditions |
| Loops | `forever`, `repeat n`, `repeat until` — run blocks multiple times |
| Logic operators | `and`, `or`, `not` — combine conditions just like `E`, `OU`, `NÃO` in Portugol |

> 💡 Every concept in Scratch has a direct equivalent in text-based programming languages. Learning logic in Scratch makes the transition to Portugol, Python or JavaScript much smoother.

Happy coding! 🚀

---
