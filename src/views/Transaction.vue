<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <Products />
      </div>
      <div class="col-md-5">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'Transaction',
  components: {
    Products,
    Cart
  }
}
</script>