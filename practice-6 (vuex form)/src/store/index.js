import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    formSubmitted: false,
    formProcess: false,
    info: [
      {
        name: 'Name',
        value: 'John',
        pattern: /^[a-zA-Z ]{2,30}$/,
        status: false
      },
      {
        name: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/,
        status: false
      },
      {
        name: 'Email',
        value: '',
        pattern: /.+/,
        status: false
      },
      {
        name: 'Some Field 1',
        value: '',
        pattern: /.+/,
        status: false
      },
      {
        name: 'Some Field 2',
        value: '',
        pattern: /.+/,
        status: false
      }
    ],
  },

  actions: {
    submit(store) {
      store.commit('startSubmit');

      setTimeout(() => {
        store.commit('submitted');
      }, 1000);
    }
  },

  getters: {
    info: (state) => state.info,

    name: (state) => state.info[0].status ? state.info[0].value : '',

    formSubmitted: (state) => state.formSubmitted,

    formProcess: (state) => state.formProcess,

    amountValidFields(state) {
      let amount = 0;

      state.info.forEach((control) => {
        if (control.status) amount++;
      });

      return amount;
    }
  },

  mutations: {
    setInfoValue(state, payload) {
      state.info[payload.ndx].value = payload.value;
    },

    setInfoStatus(state, payload) {
      state.info[payload.ndx].status = payload.status;
    },

    startSubmit(state) {
      state.formProcess = true;
    },

    submitted(state) {
      state.formSubmitted = true;
      state.formProcess = false;
    }
  }
});