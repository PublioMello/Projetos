import { Form } from "./Form.js";
import { Label } from "./Label.js";
import { Input } from "./Input.js";
import { Button } from "./Buttom.js";

document.addEventListener("DOMContentLoaded", () => {
  // Criar formulario
  const form = new Form();
  form.element.id = "pizza-order-form";

  // adicionar campos filhos ao formulario
  const nameLabel = new Label("Nome: ");
  const nameInput = new Input("text", "Digite o seu nome");
  nameInput.element.id = "name";

  form.addChild(nameLabel);
  form.addChild(nameInput);

  const pizzaLabel = new Label("Escolha o sabor da Pizza:");
  const pizzaInput = new Input("text", "Ex: Calabresa, Pepperoni...");
  pizzaInput.element.id = "pizza";

  form.addChild(pizzaLabel);
  form.addChild(pizzaInput);

  const quantityLabel = new Label("Diga a quantidade: ");
  const quantityInput = new Input("number", "Ex: 2, 3, 1/2...");
  quantityInput.element.id = "quantity";

  form.addChild(quantityLabel);
  form.addChild(quantityInput);

  const button = new Button("Fazer Pedido");
  form.addChild(button);

  // evento submissao do formulario
  form.element.addEventListener("submit", (event) => {
    event.preventDefault();

    const pedido = {
      nome: nameInput.element.value,
      Pizza: pizzaInput.element.value,
      Quantidade: quantityInput.element.value,
    };

    // Salvar no local storage
    const data = new Date();
    localStorage.setItem(`Ultimo Pedido : ${data}`, JSON.stringify(pedido));
    alert("Pedido Salvo com Sucesso");
  });
  form.render(document.body);
});
