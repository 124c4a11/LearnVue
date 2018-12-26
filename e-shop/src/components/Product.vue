<template>
  <div>
    <h2>{{ product.title }}</h2>
    <router-link :to="{ name: 'products' }">Back to products</router-link>
    <hr>
    <p>{{ product.price }}</p>
    <button
      v-if="!isProductInCart"
      @click="addToCart(id)"
      class="btn btn-primary"
    >Add to cart</button>
    <button
      v-else
      @click="removeFromCart(id)"
      class="btn btn-warning"
    >Remove from cart</button>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Product',

  computed: {
    ...mapGetters('products', [
      'item'
    ]),

    ...mapGetters('cart', {
      inCart: 'products'
    }),

    id() {
      return parseInt(this.$route.params.id);
    },

    product() {
      return this.item(this.id);
    },

    isProductInCart() {
      return this.inCart.indexOf(this.id) !== -1;
    }
  },

  methods: {
    ...mapActions('cart', {
      addToCart: 'add',
      removeFromCart: 'remove'
    })
  }
}
</script>
