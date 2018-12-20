<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>E-Shop</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div class="in-cart">In Cart: {{ amountProductsInCart }}</div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </header>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3 menu">
            <ul class="list-group">
              <router-link
                v-for="(item, ndx) in menuList"
                :key="ndx"
                :to="item.url"
                tag="li"
                class="list-group-item"
                active-class="active"
              ><a>{{ item.text }}</a></router-link>
            </ul>
          </div>
          <div class="col-sm-9">
            <transition
              name="fade"
              mode="out-in"
            ><router-view></router-view></transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',

  components: {
  },

  computed: {
    ...mapGetters('menu', {
      menuList: 'items'
    }),

    ...mapGetters('cart', [
      'amountProductsInCart'
    ]),
  }
}
</script>


<style>
@keyframes slideIn {
  from { transform: rotateY(90deg); }
  to { transform: rotateY(0); }
}

@keyframes slideOut {
  from { transform: rotateY(0); }
  to { transform: rotateY(90deg); }
}

.in-cart { font-weight: bold; }

.menu { border-right: 1px solid #ddd; }

.list-group-item { transition: background-color .3s, color .3s; }

.list-group-item.active a { color: inherit; }

.fade-enter-active { animation: slideIn .5s; }

.slide-leave-active { animation: slideOut .5s; }
</style>
