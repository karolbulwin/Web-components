import '../public/stylesheets/style.scss';
import headerComponent from './layout/header.js';
import mainComponent from './layout/main.js';
import buttonCreatorComponent from './customEle.js';
import footerComponent from './layout/footer.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

document.body.appendChild(headerComponent());
document.body.appendChild(mainComponent());
document.querySelector('main').appendChild(buttonCreatorComponent());

document.body.appendChild(footerComponent());
