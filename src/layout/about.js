export default function component() {
  class CustomElement extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = 'Header and footer are Web Components. They allow to create reusable custom elements encapsulated away from the rest of the code.<br> Just inspect the side and see what I mean.';
    }
  }
  customElements.define('about-h-f', CustomElement);
  const element = new CustomElement();

  return element;
}
