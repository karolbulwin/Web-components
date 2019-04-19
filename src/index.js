import '../public/stylesheets/style.scss';
import mainComponent from './layout/main.js';
import headerComponent from './layout/header.js';
import footerComponent from './layout/footer.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

document.body.appendChild(headerComponent());
document.body.appendChild(mainComponent());
document.body.appendChild(footerComponent());
