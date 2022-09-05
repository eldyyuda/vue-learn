<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div @click="toggleSideBar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{totalQuantity}})</span>
    </div>
  </header>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <router-view :inventory="inventory" :addToCart="addToCart"/>
  <!-- #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} -->
<Sidebar
  v-if="showSideBar"
  :toggle="toggleSideBar"
  :cart="cart"
  :inventory="inventory"
  :remove="remove"/>
</template>
<script>
import Sidebar from '@/components/SidebarComponent.vue'
import Food from './food.json'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      showSideBar: false,
      inventory: Food,
      cart: {
      }
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    addToCart (name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
      console.log(this.cart)
    },
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
      console.log(this.showSideBar)
    },
    remove (name) {
      delete this.cart[name]
    }
  }
}
</script>

<style scoped>

</style>
