'use strict';


new Vue({
  el: '#app',
  data: {
    formSubmitted: false,
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    guests: []
  },
  computed: {
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  methods: {
    addGuest() {
      this.guests.push('');
    },
    removeGuest(ndx) {
      this.guests.splice(ndx, 1);
    }
  }
});