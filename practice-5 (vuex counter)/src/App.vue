<template>
  <div id="app">
    <div class="container">
      <Counter />
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';

export default {
  name: 'app',

  components: {
    Counter
  }
}
</script>