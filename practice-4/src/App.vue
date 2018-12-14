<template>
  <div id="app">
    <div class="container">
      <form v-if="!formSubmitted" @submit.prevent="formSubmitted = true">
        <div class="progress">
          <div class="progress-bar" :style="progress"></div>
        </div>
        <AppInput
          v-for="(item, ndx) in info"
          :key="ndx"
          :name="item.name"
          :pattern="item.pattern"
          :value.sync="item.value"
          @changeStatus="onChangeData(ndx, $event)"
        >
        </AppInput>
        <button
          class="btn btn-primary"
          :disabled="amountValidFields < info.length"
        >
          Send Data
        </button>
      </form>

      <table v-else class="table table-bordered">
        <tr v-for="(item, ndx) in info" :key=ndx>
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
import AppInput from './components/AppInput.vue'

export default {
  el: '#app',
  components: {
    AppInput
  },
  data() {
    return {
      formSubmitted: false,
      amountValidFields: 0,
      info: [
        {
          name: 'Name',
          value: 'John',
          pattern: /^[a-zA-Z ]{2,30}$/
        },
        {
          name: 'Phone',
          value: '',
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
    }
  },
  beforeMount() {
    this.info.forEach(() => {
      this.controls.push(false);
    });
  },
  methods: {
    onChangeData(ndx, status) {
      this.controls[ndx] = status;

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
}
</script>