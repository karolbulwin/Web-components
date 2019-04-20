export default function customTempComponent(templateId, templateFileName) {
  const template = document.createElement('template');
  template.id = templateId;
  template.innerHTML = `${require(`./${templateFileName}.html`)}`;

  return template;
}
