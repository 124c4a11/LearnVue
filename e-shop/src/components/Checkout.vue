<template>
  <div>
    <h2>Order now</h2>
    <hr>
    <div
      v-if="!products.length"
      class="alert alert-warning"
    >Your cart is empty</div>

    <OrderForm
      v-else
      @formInput="onInput"
    />

    <div
      v-if="formSubmitted"
      class="alert alert-success"
    >Order successfully submitted</div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

import OrderForm from './OrderForm';

export default {
  name: 'Checout',

  components: {
    OrderForm
  },

  computed: {
    ...mapGetters('products', {
      productsAll: 'items'
    }),

    ...mapGetters('cart', {
      productsInCart: 'products'
    }),

    ...mapGetters('order', [
      'formSubmitted'
    ]),

    products() {
      return this.productsAll.filter((product) => {
        return this.productsInCart.indexOf(product.id_product) !== -1;
      });
    }
  },

  methods: {
    ...mapActions('order', [
      'sendOrder'
    ]),

    onInput() {
      this.sendOrder(this.products);
    }
  }
}
</script>
