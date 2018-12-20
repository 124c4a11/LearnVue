<template>
  <div>
    <h2>Page not found</h2>
    <hr>
    <router-link :to="{ name: 'products' }">Start from to main page</router-link>
  </div>
</template>


<script>
export default {
  name: 'E404'
}
</script>
