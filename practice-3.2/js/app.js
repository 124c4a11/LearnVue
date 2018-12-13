Vue.component('app-input', {
  props: ['name', 'value', 'pattern'],
  template: `
    <div class="form-group">
      <label>{{ name }}</label>
      <span
        v-if="activated"
        class="fa"
        :class="validClass">
      </span>
      <input
        type="text"
        class="form-control"
        :value="value"
        @input="onInput">
    </div>
  `,
  data() {
    return {
      activated: this.value != '',
    }
  },
  computed: {
    validClass() {
      return this.pattern.test(this.value) ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger';
    }
  },
  methods: {
    onInput(e) {
      this.activated = true;

      this.$emit('changedata', {
        value: e.target.value,
        valid: this.pattern.test(e.target.value)
      });
    }
  }
});


new Vue({
  el: '.sample',
  data: {
    formSubmitted: false,
    amountValidFields: 0,
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
    this.info.forEach(() => {
      this.controls.push(false);
    });
  },
  methods: {
    onChangeData(ndx, data) {
      this.info[ndx].value = data.value;
      this.controls[ndx] = data.valid;

      let amount = 0;

      this.controls.forEach((control) => {
        if (control) amount++;
      });

      this.amountValidFields = amount;
    }
  },
  computed: {
    progress() {
      return {
        width: `${this.amountValidFields / this.info.length * 100}%`
      }
    }
  }
});