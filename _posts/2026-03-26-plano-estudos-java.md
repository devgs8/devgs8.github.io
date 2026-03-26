# 🗺️ Meu Roadmap: Do Zero ao Backend Java

Este é um plano de estudos focado em **consistência ao invés de velocidade**. O objetivo é aprender sem ficar sobrecarregado (burnout). 
Você pode copiar este conteúdo e colar no seu site ou repositório do GitHub para ir marcando o "X" conforme avança!

---

## 🟢 Etapa 1: A Base de Tudo (Lógica e Sintaxe)
**Foco:** Traduzir os exercícios do VisuAlg para o código Java no IntelliJ.
**Material:** Curso do Guanabara + Exercícios Diários.

- [ ] Entender Variáveis e Tipos de Dados em Java (`int`, `double`, `String`, `boolean`).
- [ ] Operadores Matemáticos e Lógicos (`+`, `-`, `&&`, `||`).
- [ ] Estruturas Condicionais (Transformar o *Se/Senão* do VisuAlg no `if / else` e `switch`).
- [ ] Estruturas de Repetição (Transformar o *Para* e *Enquanto* no `for` e `while`).
- [ ] Trabalhar com Vetores (Arrays básicos).
- [ ] **Projeto Final da Etapa 1:** Criar um simulador de "Caixa Eletrônico" simples no console usando `Scanner` para ler o que o usuário digita e `if/else`/`while` para as opções.

---

## 🟡 Etapa 2: Entendendo o Java Real (Orientação a Objetos)
**Foco:** Parar de escrever "scripts soltos" e começar a modelar o mundo real.
**Material:** Livro "Use a Cabeça! Java" (Head First Java).

- [ ] Entender a diferença entre **Classe** (o molde) e **Objeto** (a coisa real).
- [ ] Criar Atributos (características) e Métodos (ações) nas classes.
- [ ] **Encapsulamento**: O famoso `private` e os métodos `getters` e `setters`.
- [ ] **Herança**: Fazer uma classe herdar coisas da outra (ex: `Cachorro` herda de `Animal`).
- [ ] **Polimorfismo**: Usar os objetos herdeiros de forma flexível (o capítulo do livro explica isso muito bem!).
- [ ] **Projeto Final da Etapa 2:** O jogo de "Batalha Naval" (DotCom) que o livro ensina a fazer, passo a passo.

---

## 🟠 Etapa 3: Ferramentas Necessárias do Java
**Foco:** Aprender o que você mais vai usar no dia a dia do Backend.

- [ ] **Coleções (Collections):** Aprender `ArrayList` para substituir os Vetores fixos.
- [ ] **Tratamento de Exceções:** Como evitar que o programa quebre usando `try / catch`.
- [ ] Trabalhar com Datas no Java (`LocalDate`).
- [ ] **Projeto Final da Etapa 3:** Criar um "Gerenciador de Tarefas (To-Do List)" no console, onde tudo fica salvo numa Lista, e se o usuário digitar algo errado, seu programa usa o `try/catch` pra não travar.

---

## 🔵 Etapa 4: O Início da Web e Backend (Spring Boot)
**Foco:** Tirar o código da "tela preta" do console e fazer ele conversar com a Internet.

- [ ] O que é a Web? Entender como funciona Cliente (Navegador) x Servidor (Seu Java).
- [ ] O que é uma API REST e o Formato JSON?
- [ ] Verbos HTTP: Diferença entre `GET` (buscar) e `POST` (enviar/salvar).
- [ ] Iniciar seu primeiro projeto Spring Boot usando o *Spring Initializr*.
- [ ] Criar a sua primeira Rota (`@RestController` e `@GetMapping`).
- [ ] **Projeto Final da Etapa 4:** Uma API simples no Spring Boot que retorne uma lista de personagens ou filmes em formato JSON quando acessamos pelo navegador.

---

## 🟣 Etapa 5: Banco de Dados de Verdade
**Foco:** Salvar dados permanentemente.

- [ ] Fundamentos Básicos de SQL (`SELECT`, `INSERT`, `UPDATE`, `DELETE`).
- [ ] Usar o Spring Data JPA para o Java conversar com o Banco sem precisar escrever muito SQL.
- [ ] Relacionar Tabelas (Ex: Um `Usuario` tem vários `Posts`).
- [ ] **Projeto Final da Etapa 5:** Evoluir a API da Etapa 4 conectando nela um banco de dados H2 ou PostgreSQL. Seu projeto completo de Backend está vivo!

---

> [!TIP]
> **A Regra de Ouro:** Não tente estudar as Etapas 4 e 5 antes de entender as Etapas 1 e 2. O Spring Boot faz muita "mágica" por trás dos panos usando Orientação a Objetos. Se a base (OO) estiver fraca, o Spring vira um pesadelo. Cada passo no seu tempo!
