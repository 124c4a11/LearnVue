function getProducts() {
  return [
    {
      id_product: 1,
      title: 'Product 1',
      price: 20000
    },
    {
      id_product: 2,
      title: 'Product 2',
      price: 25000
    },
    {
      id_product: 3,
      title: 'Product 3',
      price: 30000
    },
  ];
}


export default {
  namespaced: true,

  state: {
    items: getProducts(),
  },

  getters: {
    items: (state) => state.items,

    itemsMap(state) {
      return state.items.reduce((acc, item) => {
        acc[item.id_product] = item;

        return acc;
      }, {});
    },

    item: (state, getters) => (id) => {
      return getters.itemsMap[id];
    }
  }
};