import template from '../template/template.js';

export default function mainComponent() {
  const main = document.createElement('main');
  const container = document.createElement('div');
  const h2 = document.createElement('h2');

  h2.innerText = 'Create web-component';
  container.appendChild(h2);
  container.classList.add('container');
  main.appendChild(container);
  main.appendChild(template());

  return main;
}
