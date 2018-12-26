<template>
  <div>
    <h2>Cart</h2>
    <hr>
    <div
      v-if="!products.length"
      class="alert alert-warning"
    >Your cart is empty</div>

    <template v-else>
      <table class="table table-bordered table-hover">
        <thead>
          <th>Title</th>
          <th>Price</th>
        </thead>
        <tbody>
          <tr
            v-for="(product, ndx) in products"
            :key="ndx"
          >
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
          </tr>
        </tbody>
      </table>
      <button
        @click="onOrder"
        class="btn btn-success"
      >Order Now</button>
      <button
        @click="clearCart"
        class="btn btn-warning"
      >Clear Cart</button>
    </template>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',

  computed: {
    ...mapGetters('products', {
      productsAll: 'items'
    }),

    ...mapGetters('cart', {
      productsInCart: 'products'
    }),

    products() {
      return this.productsAll.filter((product) => {
        return this.productsInCart.indexOf(product.id_product) !== -1;
      });
    }
  },

  methods: {
    ...mapActions('cart', {
      clearCart: 'clear'
    }),

    onOrder() {
      this.$router.push('/checkout');
    }
  }
}
</script>
