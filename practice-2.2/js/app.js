new Vue({
  el: '.sample',
  data: {
    submitted: false,
    scrolled: false,
    flags: {
      agree: false,
      spam: false
    },
    spam: ''
  },
  methods: {
    onScroll(e) {
      if (e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 10) this.scrolled = true;
    }
  }
});