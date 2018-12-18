<template>
  <div>
    <div class="container">
      <AppHeader />
      <AppForm />
    </div>
  </div>
</template>


<script>
import AppHeader from './components/AppHeader.vue';
import AppForm from './components/AppForm.vue';

export default {
  name: 'app',

  components: {
    AppHeader,
    AppForm
  }
}
</script>
