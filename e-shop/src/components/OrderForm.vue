<template>
  <form v-if="!formSubmitted" @submit.prevent="onSubmit">
    <div class="progress">
      <div class="progress-bar" :style="progressWidth"></div>
    </div>
    <AppInput
      v-for="(item, ndx) in formFields"
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
      :disabled="amountValidFields < formFields.length"
    >{{ btnText }}</button>
  </form>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import AppInput from './AppInput.vue';

export default {
  name: 'AppForm',

  components: {
    AppInput
  },

  computed: {
    ...mapGetters('order', [
      'formFields',
      'formSubmitted',
      'formProcess',
      'amountValidFields'
    ]),

    progressWidth() {
      return {
        width: `${this.amountValidFields / this.formFields.length * 100}%`
      };
    },

    btnClass() {
      return (this.formProcess) ? 'btn-default' : 'btn-primary';
    },

    btnText() {
      return (this.formProcess) ? 'Loading...' : 'Send Order';
    }
  },

  methods: {
    ...mapActions('order', [
      'setFormFieldsValue',
      'setFormFieldsStatus'
    ]),

    onChangeValue(ndx, value) {
      this.setFormFieldsValue({ ndx, value });
    },

    onChangeStatus(ndx, isValid) {
      this.setFormFieldsStatus({ ndx, status: isValid });
    },

    onSubmit() {
      this.$emit('formInput');
    }
  }
}
</script>
