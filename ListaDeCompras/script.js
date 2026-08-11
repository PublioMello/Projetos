// ==========================================
// ESTADO
// ==========================================
let items = []; // cada item: { id, name, qty, price }
let nextId = 1;

// ==========================================
// REFERÊNCIAS DO DOM (já prontas)
// ==========================================
const itemForm = document.getElementById("item-form");
const nameInput = document.getElementById("item-name");
const qtyInput = document.getElementById("item-qty");
const priceInput = document.getElementById("item-price");
const itemsBody = document.getElementById("items-body");
const emptyMessage = document.getElementById("empty-message");
const totalValueEl = document.getElementById("total-value");

// ==========================================
// FUNÇÕES — implemente a lógica aqui
// ==========================================

function addItem(item) {
  // TODO:
  // - adicionar `item` ao array `items`
  // - chamar renderItems()
}

function removeItem(id) {
  // TODO:
  // - remover de `items` o item cujo id é igual a `id`
  // - chamar renderItems()
}

function calculateTotal() {
  // TODO:
  // - somar (qty * price) de todos os itens em `items`
  // - retornar o valor total (dica: usar items.reduce(...))
  return 0;
}

function renderItems() {
  // TODO:
  // - limpar o conteúdo de `itemsBody`
  // - para cada item em `items`, criar uma linha <tr> com:
  //     nome, quantidade, preço unitário formatado, subtotal (qty * price)
  //     e um botão de remover com data-id="{item.id}" e classe "remove-btn"
  // - mostrar/esconder `emptyMessage` conforme `items` está vazio ou não
  // - atualizar `totalValueEl` chamando calculateTotal()
  // dica de formatação: `R$ ${valor.toFixed(2).replace(".", ",")}`
}

// ==========================================
// EVENTOS (já conectados)
// ==========================================
itemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newItem = {
    id: nextId++,
    name: nameInput.value.trim(),
    qty: Number(qtyInput.value),
    price: Number(priceInput.value),
  };

  if (!newItem.name || newItem.qty <= 0) return;

  addItem(newItem);
  itemForm.reset();
  qtyInput.value = 1;
  nameInput.focus();
});

// Delegação de evento: um único listener cuida de todos os botões
// de remover, mesmo os criados dinamicamente em renderItems()
itemsBody.addEventListener("click", (event) => {
  if (!event.target.classList.contains("remove-btn")) return;
  const id = Number(event.target.dataset.id);
  removeItem(id);
});

// Chamada inicial
renderItems();
