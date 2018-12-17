<template>
  <div class="counter">
    <h2>{{ counter }}</h2>
    <hr>
    <button class="btn btn-warning" @click="decrement">- 1</button>
    <button class="btn btn-success" @click="increment">+ 1</button>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Counter',

  computed: {
    ...mapGetters(['counter'])
  },

  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>


<style>
.counter { text-align: center; }
.btn + .btn { margin-left: 5px; }
</style>
