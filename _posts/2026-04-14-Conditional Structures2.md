---
layout: post
title: "🔀 Estruturas Condicionais 2 — Condições Aninhadas e Escolha Caso"
date: 2026-04-14
categories: [algorithms, logic, conditional, visualg, exercises]
excerpt: "Domine estruturas condicionais aninhadas e a estrutura Escolha-Caso em algoritmos — com exemplos práticos de IMC, doações, salário de funcionários e aproveitamento escolar."
---

## Sobre este conteúdo

Este material dá continuidade ao estudo das **estruturas condicionais** (tomada de decisão) em algoritmos. Aqui vamos além do `Se-Então-Senão` simples e exploramos **condições aninhadas** e a estrutura **Escolha-Caso**.

> 🎯 O objetivo é aprender a lidar com **múltiplas possibilidades de escolha** em algoritmos.

---

## Por que condições aninhadas?

Na vida real, as decisões raramente são binárias. Exemplo:

> Se eu tiver **muito dinheiro**, vou para a Disney.  
> Senão, se eu tiver **pouco dinheiro**, posso visitar uma província do meu país.  
> Senão, fico em casa.

Infelizmente, a vida não é tão simples assim. Temos **várias possibilidades de escolha**.

---

## Estrutura Condicional Aninhada (If-Then-Else aninhado)

**Estrutura em VisualG:**

```
Se (situacao 1) entao
    Bloco A
senao
    Se (situacao 2) entao
        Bloco B
    senao
        Bloco C
    FimSe
FimSe
```

**Exemplo prático — Viagem:**

```
Se (dinheiro >= 10000) entao
    Escreva("Partiu Disney")
senao
    Se (dinheiro >= 5000) e (dinheiro < 10000) entao
        Escreva("Visitar familia")
    senao
        Escreva("#chateado")
    FimSe
FimSe
```

---

## Exemplo 1 — Média Escolar com Recuperação

Agora temos **três possibilidades**: Aprovado, Recuperação ou Reprovado.

```
algoritmo "MediaEscolar"
var
    N1, N2, M: real

inicio
    Escreva("Primeira Nota: ")
    Leia(N1)
    Escreva("Segunda Nota: ")
    Leia(N2)
    
    M <- (N1 + N2) / 2
    
    EscrevaL("A media do aluno foi ", M:4:2)
    
    Se (M >= 7) entao
        EscrevaL("Aluno APROVADO")
    senao
        Se (M >= 5) e (M < 7) entao
            EscrevaL("Aluno em RECUPERACAO")
        senao
            EscrevaL("Aluno REPROVADO")
        FimSe
    FimSe
fimalgoritmo
```

---

## Exemplo 2 — Classificação do IMC (Múltiplas condições)

Cálculo do IMC com **7 faixas de classificação**:

**Fórmula:** IMC = Massa (kg) / (Altura × Altura) (m)

```
algoritmo "ClassificacaoIMC"
var
    IMC: real
inicio
    Escreva("Digite o IMC: ")
    Leia(IMC)

    Se (IMC < 17) entao
        EscrevaL("Magreza grave")
    senao
        Se (IMC >= 17) e (IMC < 18.5) entao
            EscrevaL("Abaixo do peso")
        senao
            Se (IMC >= 18.5) e (IMC < 25) entao
                EscrevaL("Peso ideal")
            senao
                Se (IMC >= 25) e (IMC < 30) entao
                    EscrevaL("Sobrepeso")
                senao
                    Se (IMC >= 30) e (IMC < 35) entao
                        EscrevaL("Obesidade")
                    senao
                        Se (IMC >= 35) e (IMC < 40) entao
                            EscrevaL("Obesidade severa")
                        senao
                            EscrevaL("Obesidade morbida")
                        FimSe
                    FimSe
                FimSe
            FimSe
        FimSe
    FimSe
fimalgoritmo
```

---

## Estrutura Escolha-Caso (Switch-Case)

Para situações com **múltiplas opções fixas**, a estrutura `Escolha-Caso` é mais limpa que vários `Se` aninhados.

**Estrutura em VisualG:**

```
Escolha (variavel)
    Caso valor1
        Bloco A
    Caso valor2
        Bloco B
    Caso valor3
        Bloco C
    OutroCaso
        Bloco D
FimEscolha
```

---

## Exemplo 3 — Doação (Criança Esperança)

```
algoritmo "CRIANCA ESPERANCA"
var
   D: Inteiro
   valor: Real

inicio
   EscrevaL("------------------------------")
   EscrevaL("     CRIANCA ESPERANCA        ")
   EscrevaL("------------------------------")
   EscrevaL("  MUITO OBRIGADO POR AJUDAR   ")
   EscrevaL("------------------------------")
   EscrevaL(" [1] PARA DOAR R$10")
   EscrevaL(" [2] PARA DOAR R$25")
   EscrevaL(" [3] PARA DOAR R$50")
   EscrevaL(" [4] PARA DOAR OUTROS VALORES")
   EscrevaL(" [5] PARA CANCELAR")
   Escreva("ESCOLHA UMA OPCAO: ")
   Leia(D)

   Escolha(D)
      Caso 1
           valor <- 10
      Caso 2
           valor <- 25
      Caso 3
           valor <- 50
      Caso 4
           Escreva("QUAL O VALOR DA DOACAO? R$")
           Leia(valor)
      Caso 5
           valor <- 0
      OutroCaso
           valor <- -1
   FimEscolha

   EscrevaL("------------------------------")

   Se (valor > 0) entao
        EscrevaL("    SUA DOACAO FOI DE R$", valor)
        EscrevaL("  MUITO OBRIGADO!")
   Senao
        Se (valor = 0) entao
             EscrevaL("    DOACAO CANCELADA")
             EscrevaL("  VOLTE SEMPRE!")
        Senao
             EscrevaL("    OPCAO INVALIDA!")
             EscrevaL("  TENTE NOVAMENTE")
        FimSe
   FimSe

   EscrevaL("------------------------------")

fimalgoritmo
```

---

## Exemplo 4 — Reajuste Salarial por Dependentes

Valores múltiplos no mesmo `Caso`:

```
algoritmo "DependenteFuncionario"

Var
   Nome: Caracter
   Sal, NSal: Real
   Dep: Inteiro

Inicio
   Escreva("Qual e o nome do Funcionario: ")
   Leia(Nome)
   Escreva("Qual e o Salario do Funcionario R$: ")
   Leia(Sal)
   Escreva("Qual e a Quantidade de Dependentes: ")
   Leia(Dep)
   
   Escolha Dep
        Caso 0
            NSal <- Sal + (Sal * 5/100)
        Caso 1, 2, 3
            NSal <- Sal + (Sal * 10/100)
        Caso 4, 5, 6
            NSal <- Sal + (Sal * 15/100)
        OutroCaso
            NSal <- Sal + (Sal * 18/100)
   FimEscolha
   
   EscrevaL("O novo salario do funcionario ", Nome, " sera de R$", NSal:5:2)

Fimalgoritmo
```

---

## Exemplo 5 — Aproveitamento Escolar (Notas A, B, C, D, E)

```
algoritmo "AproveitamentoEscolar"
var
    N1, N2, Media: real
inicio
    Escreva("Primeira Nota: ")
    Leia(N1)
    Escreva("Segunda Nota: ")
    Leia(N2)

    Media <- (N1 + N2) / 2

    Escreval("---")
    Escreval("MEDIA: ", Media:4:1)

    Se (Media >= 9) entao
        Escreval("APROVEITAMENTO: A")
    senaose (Media >= 7) entao
        Escreval("APROVEITAMENTO: B")
    senaose (Media >= 5) entao
        Escreval("APROVEITAMENTO: C")
    senaose (Media >= 4) entao
        Escreval("APROVEITAMENTO: D")
    senao
        Escreval("APROVEITAMENTO: E")
    FimSe

    Escreval("---")
    Escreval("*** Fim da execucao.")

fimalgoritmo
```

---

## Tabela Resumo

| Estrutura | Sintaxe VisualG | Quando usar |
|-----------|----------------|-------------|
| Aninhada | `Se` ... `Senao` ... `Se` ... `FimSe` ... `FimSe` | Múltiplas condições com diferentes critérios |
| Escolha-Caso | `Escolha` ... `Caso` ... `OutroCaso` ... `FimEscolha` | Múltiplas opções fixas (menu, valores discretos) |

---

## Próximos passos

Nos próximos exercícios:
- Combinar estruturas condicionais com laços de repetição
- Validação de entrada do usuário
- Algoritmos mais complexos com múltiplas decisões

> 📌 **Dica de prática:** Sempre idente seu código com TAB. Teste todas as possibilidades — incluindo valores no limite (ex: média exatamente 7, IMC exatamente 25).

```
Continue praticando. Cada algoritmo é construído uma decisão de cada vez. 🚀
```
