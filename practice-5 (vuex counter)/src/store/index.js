import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    counter: 1
  },

  getters: {
    counter: (state) => state.counter
  },

  mutations: {
    increment(state) {
      state.counter++;
    },

    decrement(state) {
      state.counter--;
    }
  }
});