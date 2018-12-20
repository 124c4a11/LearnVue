<template>
  <div>
    <h2>{{ product.title }}</h2>
    <router-link :to="{ name: 'products' }">Back to products</router-link>
    <hr>
    <p>{{ product.price }}</p>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Product',

  computed: {
    ...mapGetters('products', [
      'item'
    ]),

    id() {
      return this.$route.params.id
    },

    product() {
      return this.item(this.id);
    }
  }
}
</script>
