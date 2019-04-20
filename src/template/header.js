export default function headerComponent() {
  const template = document.createElement('template');
  template.id = 'header-template';
  template.innerHTML = `${require('./header.html')}`;

  return template;
}
