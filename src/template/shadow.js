export default function component(templateId, componentName ) {
  class CustomElement extends HTMLElement {
    constructor() {
      super()
      const root = this.attachShadow({ mode: 'open' });
      const templateContent = document.getElementById(templateId).content;
      root.appendChild(templateContent.cloneNode(true));
    }
  }
  customElements.define(componentName, CustomElement);
  const element = new CustomElement();

  return element;
}
