import { Home, Error, Contact } from './views';
import { parseRequestURL, redirectTo, sleep } from '../src/services/utils';

const routes = {
  '/': Home,
  '/contact': Contact,
};

const router = async () => {
  const app = document.getElementById('app');

  const request = parseRequestURL();

  const parsedURL =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? `/:id${request.id}` : '') +
    (request.verb ? `/${request.verb}` : '');

  const page = routes[parsedURL] ? routes[parsedURL] : Error;

  app.innerHTML = await page.render();
  await page.afterRender();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
