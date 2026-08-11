# Gerador de Senha Aleatória

Estrutura pronta (HTML + CSS). Falta a lógica em `script.js`.

## O que já está pronto
- Layout completo (input de saída, botão copiar, slider de tamanho, checkboxes)
- Sincronização do label do slider com o valor selecionado
- `CHAR_SETS` com os conjuntos de caracteres (maiúsculas, minúsculas, números, símbolos)
- Referências do DOM e eventos já conectados

## O que você precisa implementar (em `script.js`)
1. `generatePassword()` — montar o conjunto de caracteres com base nos checkboxes marcados e sortear os caracteres da senha
2. `copyPassword()` — copiar a senha gerada para a área de transferência (`navigator.clipboard`) e mostrar um feedback visual

## Dicas
- `Math.random()` retorna um número entre 0 e 1
- `Math.floor(Math.random() * str.length)` dá um índice aleatório válido de uma string

## Como testar
Abra o `index.html` no navegador (ou use a extensão Live Server).
