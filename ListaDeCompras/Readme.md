# Lista de Compras com Total

Estrutura pronta (HTML + CSS). Falta a lógica em `script.js`.

## O que já está pronto
- Layout completo (formulário, tabela, mensagem de lista vazia, total)
- Evento de submit do formulário já lê os campos e valida o básico
- Delegação de evento já pronta para os botões de remover (mesmo os criados dinamicamente)

## O que você precisa implementar (em `script.js`)
1. `addItem(item)` — adicionar o item ao array `items` e re-renderizar
2. `removeItem(id)` — remover o item do array pelo `id` e re-renderizar
3. `calculateTotal()` — somar `qty * price` de todos os itens (dica: `reduce`)
4. `renderItems()` — desenhar as linhas da tabela a partir do array `items`,
   mostrar/esconder a mensagem de "lista vazia" e atualizar o total exibido

## Como testar
Abra o `index.html` no navegador (ou use a extensão Live Server).
