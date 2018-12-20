<template>
  <div>
    <h2>Products</h2>
    <hr>
    <div class="row">
      <div
        v-for="(product, ndx) in products"
        :key="ndx"
        class="col-md-4"
      >
        <router-link
          tag="h3"
          :to="`product/${product.id_product}`"
        ><a>{{ product.title }}</a></router-link>
        <p>{{ product.price }}</p>
        <button
          v-if="!isProductInCart(product.id_product)"
          @click="addToCart(product.id_product)"
          class="btn btn-primary"
        >Add to cart</button>
        <button
          v-else
          @click="removeFromCart(product.id_product)"
          class="btn btn-warning"
        >Remove from cart</button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductsList',

  computed: {
    ...mapGetters('products', {
      products: 'items'
    }),

    ...mapGetters('cart', {
      inCart: 'products'
    }),

  },

  methods: {
    ...mapActions('cart', {
      addToCart: 'add',
      removeFromCart: 'remove'
    }),

    isProductInCart(id_product) {
      return this.inCart.indexOf(id_product) !== -1
    }
  }
}
</script>
