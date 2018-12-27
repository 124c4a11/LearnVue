import Vue from 'vue';
import Vuex from 'vuex';

import menu from './modules/menu.js';
import products from './modules/products.js';
import cart from './modules/cart.js';
import order from './modules/order.js'


Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    menu,
    products,
    cart,
    order
  }
});