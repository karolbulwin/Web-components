export default function component() {
  class CustomElement extends HTMLElement {
    constructor() {
      super();
      this.innerText = 'This is a Custom Element. It allow to define its own custom tags';
    }
  }
  customElements.define('my-p', CustomElement);
  const element = new CustomElement();

  return element;
}
