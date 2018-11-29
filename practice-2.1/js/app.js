new Vue({
  el: '.sample',
  data: {
    formSubmitted: false,
    info: [
      {
        name: 'Name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/
      },
      {
        name: 'Phone',
        value: '234',
        pattern: /^[0-9]{7,14}$/
      },
      {
        name: 'Email',
        value: '',
        pattern: /.+/
      },
      {
        name: 'Some Field 1',
        value: '',
        pattern: /.+/
      },
      {
        name: 'Some Field 2',
        value: '',
        pattern: /.+/
      }
    ],
    controls: []
  },
  beforeMount() {
    this.info.forEach((item) => {
      this.controls.push({
        error: !item.pattern.test(item.value),
        activated: item.value != ''
      });
    });
  },
  methods: {
    onInput(ndx, value) {
      const
        data = this.info[ndx],
        control = this.controls[ndx];

      data.value = value;
      control.error = !data.pattern.test(value);
      control.activated = true;
    }
  },
  computed: {
    amountValidFields() {
      let amount = 0;

      this.controls.forEach((control) => {
        if (!control.error) amount++;
      });

      return amount;
    },
    progress() {
      return {
        width: `${this.amountValidFields / this.info.length * 100}%`
      }
    }
  }
});