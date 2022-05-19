import { Nav } from '../../components/Navbar';

export const Home = {
  render: async () => {
    const view = `
    ${Nav}
      <div>
        <h1>Home Page</h1>
      </div>
    `;

    return view;
  },
  afterRender: async () => {},
};
