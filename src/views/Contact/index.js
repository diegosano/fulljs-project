import axios from 'axios';

import { Nav } from '../../components/Navbar';

import Loader from '../../img/loader.gif';

export const Contact = {
  render: async () => {
    const view = `
      ${Nav}

      <div>
        <h1>Contact Page</h1>

        <img id="loader" src="${Loader}" style="display: none"/>

        <form id="contact-form" action="">
          <input type="text" name="name" id="name" placeholder="Seu nome" />
          <input type="tel" name="phone" id="phone" placeholder="Telefone" />
          <input type="submit" value="Enviar"  />
        </form>
      </div>
    `;

    return view;
  },
  afterRender: async () => {
    const form = document.getElementById('contact-form');

    const loader = document.getElementById('loader');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      console.log(event)

      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;

      try {
        loader.style.display = 'block';

        await axios.post(
          'https://webhook.site/58159816-029c-42f3-a2e9-9d7ef359953b',
          {
            name,
            phone,
          }
        );
      } catch (error) {
        console.log(error);
      } finally {
        loader.style.display = 'none';
      }
    });
  },
};
