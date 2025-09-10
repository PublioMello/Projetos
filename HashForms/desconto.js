function toggleDiscount() {
  const discountBody = document.getElementById("aplicar-desconto-body");
  const icon = document.getElementById("toggle-icon");

  // Alternar visibilidade do formulario disconto

  if (
    discountBody.style.display === "none" ||
    discountBody.style.display === ""
  ) {
    discountBody.style.display = "block";
    icon.classList.add("bx-chevron-up");
    icon.classList.remove("bx-chevron-down");
  } else {
    discountBody.style.display = "none";
    icon.classList.add("bx-chevron-down");
    icon.classList.remove("bx-chevron-up");
  }
}

const discountCupons = {
  DESCONTO10: 0.1,
  DESCONTO20: 0.2,
  DESCONTO50: 0.5,
};

function applyDiscount() {
  const discountCode = document
    .getElementById("codigo-desconto")
    .value.trim()
    .toUpperCase();

  const discountMessage = document.getElementById("discount-message");
  const totalPriceElement = document.getElementById("total-price");
  discountMessage.innerText = "";
  // verificar se o cupom é valido
  if (discountCupons[discountCode]) {
    const discount = discountCupons[discountCode];
    const originalPrice = 1200;
    const discountedPrice = 1200 * (1 - discount);

    // Atualizar preco com desconto
    totalPriceElement.innerText = `Preço Total: R$ ${discountedPrice.toFixed(
      2
    )} `;

    // Amazenar cupom no local storage
    localStorage.setItem("discount", discountCode);

    // Exibir Mensagem de desconto
    discountMessage.innerText = `O desconto ${discountCode.toUpperCase()} foi aplicado`;
    discountMessage.style.color = "green";
    // limpar cambo input
    document.getElementById("codigo-desconto").value = "";
  } else {
    discountMessage.innerText = "O código não é valido!";
    discountMessage.style.color = "red";
    // limpar cambo input
    document.getElementById("codigo-desconto").value = "";
    totalPriceElement.innerText = `Preço Total: R$ 1.200,00 `;
  }
}

function checkStoreDiscount() {
  const storageDiscount = localStorage.getItem("discount");
  const discountMessageElement = document.getElementById("discount-message");

  // veririfcar se ha cupom no local storage

  if (storageDiscount) {
    localStorage.removeItem("discount");
  }
  discountMessageElement.innerText = "";
}

window.onload = checkStoreDiscount;
