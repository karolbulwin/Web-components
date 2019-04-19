export default function buttonCreatorComponent() {
  class CustomElement extends HTMLElement {
    constructor() {
      super()
      const root = this.attachShadow({ mode: 'open' });
      const templateContent = document.getElementById('button-creator-template').content;
      root.appendChild(templateContent.cloneNode(true));
    }
  }
  customElements.define('button-creator', CustomElement);
  const element = new CustomElement();

  return element;
}
