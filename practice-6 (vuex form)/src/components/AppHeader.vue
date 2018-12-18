<template>
  <header>
    <h1>Site</h1>
    <p v-if="formSubmitted">Hello, {{ name }}</p>
    <hr>
  </header>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',

  computed: {
    ...mapGetters([
      'name',
      'formSubmitted'
    ])
  }
}
</script>
