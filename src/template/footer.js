export default function footerComponent() {
  const template = document.createElement('template');
  template.id = 'footer-template';
  template.innerHTML = `${require('./footer.html')}`;

  return template;
}
