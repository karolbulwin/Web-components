export default function templateComponent() {
  const template = document.createElement('template');
  template.id = 'custom-element-template';
  template.innerHTML = `${require('./template.html')}`;

  return template;
}
