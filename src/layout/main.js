import custom from './custom-p.js';
import about from './about.js';

export default function mainComponent() {
  class CustomElement extends HTMLElement {
    constructor() {
      super();
    }
  }
  customElements.define('my-main', CustomElement);
  const main = new CustomElement();

  main.appendChild(custom());
  main.appendChild(about());

  return main;
}
