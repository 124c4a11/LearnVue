<template>
  <form v-if="!formSubmitted" @submit.prevent="onSubmit">
    <div class="progress">
      <div class="progress-bar" :style="progressWidth"></div>
    </div>
    <AppInput
      v-for="(item, ndx) in info"
      :key="ndx"
      :name="item.name"
      :value="item.value"
      :pattern="item.pattern"
      @update:value="onChangeValue(ndx, $event)"
      @changeStatus="onChangeStatus(ndx, $event)"
    />
    <button
      class="btn"
      :class="btnClass"
      :disabled="amountValidFields < info.length"
    >{{ btnText }}</button>
  </form>

  <table v-else class="table table-bordered">
    <tr v-for="(item, ndx) in info" :key=ndx>
      <td>{{ item.name }}</td>
      <td>{{ item.value }}</td>
    </tr>
  </table>
</template>


<script>
import {mapGetters} from 'vuex';
import AppInput from './AppInput.vue';

export default {
  name: 'AppForm',

  components: {
    AppInput
  },

  computed: {
    ...mapGetters([
      'info',
      'formSubmitted',
      'formProcess',
      'amountValidFields'
    ]),

    progressWidth() {
      return {
        width: `${this.amountValidFields / this.info.length * 100}%`
      };
    },

    btnClass() {
      return (this.formProcess) ? 'btn-default' : 'btn-primary';
    },

    btnText() {
      return (this.formProcess) ? 'Loading...' : 'Send Data';
    }
  },

  methods: {
    onChangeValue(ndx, value) {
      this.$store.commit('setInfoValue', {
        ndx,
        value
      });
    },

    onChangeStatus(ndx, isValid) {
      this.$store.commit('setInfoStatus', {
        ndx,
        status: isValid
      });
    },

    onSubmit() {
      this.$store.dispatch('submit');
    }
  }
}
</script>
