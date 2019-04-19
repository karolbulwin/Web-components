export default function templateComponent() {
  const template = document.createElement('template');
  template.id = 'button-creator-template';
  template.innerHTML = `${require('./template.html')}`;

  return template;
}
