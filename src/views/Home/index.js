import { Nav } from '../../components/Navbar';
import img from '../../img/dracula.jpg'

export const Home = {
  render: async () => {
    const view = `
    ${Nav}
      <div class="container">
        <h1>Home Page</h1>

        <div class="card">
          <p class="__title">Este é o meu CARD</p>

          <img class="image" src="${img}" alt="Dracula image">

          <button class="button _success">Clique aqui que nada acontece</button>
        </div>
      </div>
    `;

    return view;
  },
  afterRender: async () => {},
};
