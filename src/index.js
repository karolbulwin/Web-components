import '../public/stylesheets/style.scss';
import mainComponent from './layout/main.js';

import component from './template/tempComponent.js'
import shadow from './shadow.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

document.body.appendChild(component('header-template', 'header'));
document.body.appendChild(shadow('header-template', 'my-header'));

// document.body.appendChild(mainComponent());
// document.querySelector('main').appendChild(shadow('button-creator-template', 'button-creator'));

document.body.appendChild(component('footer-template', 'footer'));
document.body.appendChild(shadow('footer-template', 'my-footer'));
