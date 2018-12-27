<template>
  <div class="form-group">
    <label>{{ name }}</label>
    <span
      v-if="activated"
      class="fa"
      :class="validClass"
    >
    </span>
    <input
      :value="value"
      @input="onInput"
      type="text"
      class="form-control"
    >
  </div>
</template>


<script>
export default {
  name: 'AppInput',

  props: {
    name: String,
    value: String,
    pattern: RegExp
  },

  data() {
    return {
      activated: this.value != ''
    }
  },

  computed: {
    isValid() {
      return this.pattern.test(this.value);
    },

    validClass() {
      return this.isValid ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger';
    }
  },

  methods: {
    onInput(e) {
      this.activated = true;

      this.$emit('update:value', e.target.value);
    }
  },

  watch: {
    isValid() {
      this.$emit('changeStatus', this.isValid);
    }
  },

  mounted() {
    this.$emit('changeStatus', this.isValid);
  }
}
</script>


<style scoped>
.fa { margin-left: .4em; }
</style>