# 🚀 Classificador de Nível de Herói

Este projeto é um exercício em JavaScript do Bootcamp em Lógica de Programação, da plataforma DIO, projetado para praticar e validar o conhecimento básico em operadores, variáveis, laços de repetição e estruturas de decisões. 

O desafio consiste em:

1. Receber dados de entrada (nome e XP de um herói);

2. Processar esses dados usando regras de negócio predefinidas;

3. Retornar uma classificação (nível) com base nessas regras.


## 🎯 Objetivo

O objetivo principal é criar um script que utilize estruturas básicas de programação para classificar um ou mais heróis (lista) em um "ranking" com base na sua quantidade de Experiência (XP). Ao final, o script deve exibir uma mensagem formatada para cada herói, indicando seu nome e o nível alcançado.

## ⚙️ Como o Código Funciona

- const listaDeHerois (Variável e Laço):

Primeiro, define-se uma lista (array) de heróis. Cada herói é um objeto com as propriedades { nome: "..." , xp: ... }. Em seguida, usa-se um laço for...of para iterar (passar um por um) por cada heroi dentro dessa listaDeHerois. O restante da lógica é executado para cada herói, um de cada vez.

- let nomeHeroi, xpHeroi, nivelHeroi (Variáveis):

Dentro do laço, armazena-se o nome e o XP do herói atual em variáveis. A variável nivelHeroi é iniciada como uma string vazia. Ela será preenchida pela estrutura de decisão.

- switch (true) (Estrutura de Decisão e Operadores):

Esta é a parte principal. Usa-se um padrão chamado "true switch". Em vez de colocar uma variável no switch (como switch(xpHeroi)), coloca-se o valor booleano true, porque isso permite usar expressões lógicas (que retornam true ou false) em cada case posterior. O switch irá procurar o primeiro case cuja expressão resulte em true e executará aquele bloco. Se um herói possuir XP que se encaixa em alguma das condições, aquele bloco será executado e retornará o nível correspondente do herói (ex: prata). No mesmo bloco, usa-se o break para encerrar o switch.

- default (Tratamento de Exceção):

O bloco default captura qualquer valor que não se encaixe em nenhum dos case, tratando essas lacunas como um nível Não classificado.

- console.log(...) (Saída):

Ao final de cada iteração do laço, o script exibe a mensagem formatada no console com o nome e o nível recém-definido, encerrando o script.

## 🖥️ Como Executar o Código

Para que este script JavaScript rode fora do navegador, você precisa do Node.js, que é um ambiente de execução para JavaScript no lado do servidor (no terminal). 

- Pré-requisito: Instalar o Node.js

Se você ainda não o tem, baixe e instale a versão "LTS" (Long-Term Support) do site oficial: nodejs.org.

Passo 1: Baixar e abrir o arquivo

Após baixar este repositório (ou cloná-lo), abra seu editor de código (como o VSCode, Sublime, Atom, etc.) e abra a pasta do arquivo.

Passo 2: Abrir o Terminal

Abra a interface de linha de comando do seu editor de código.

Passo 3: Instalar Pacote npm e Executar o Script

Digite npm install no terminal para instalar o pacote. Em seguida, digite node index.js para executá-lo.

Passo 6: Ver a Saída

Após pressionar Enter, o Node irá ler o seu arquivo, executar o JavaScript e imprimir a saída diretamente no seu terminal. Você deverá ver o seguinte:

--- 🚀 Iniciando Classificador de Nível de Herói (Versão Switch) ---
O Herói de nome **Aragorn** está no nível de **Ascendente**
O Herói de nome **Goku** está no nível de **Radiante**
O Herói de nome **Link** está no nível de **Platina**
O Herói de nome **Samus** está no nível de **Ferro**
O Herói de nome **Kratos** está no nível de **Imortal**
O Herói de nome **Mario** está no nível de **Prata**
O Herói de nome **Batman** está no nível de **Não classificado (XP em intervalo indefinido)**
--- ✅ Classificação Concluída (Versão Switch) ---
O Herói de nome **Batman** está no nível de **Não classificado (XP em intervalo indefinido)**
--- ✅ Classificação Concluída (Versão Switch) ---
Pronto! O script foi executado com sucesso.
