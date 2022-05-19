export const Error = {
  render: async () => {
    const view = `
      <div>
        <h1>Error 404</h1>
      </div>
    `;

    return view;
  },
  afterRender: async () => {},
};
