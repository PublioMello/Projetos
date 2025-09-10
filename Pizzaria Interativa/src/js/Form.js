import { Component } from "./Component.js";

export class Form extends Component {
  constructor() {
    super("form");
    this.build();
  }

  addChild(compnent) {
    if (compnent instanceof Component) {
      this.element.appendChild(compnent.element);
    }
  }
}
