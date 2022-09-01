let app = Vue.createApp({ 
    data() {
      return {
        showSideBar:false,
        inventory: []
        // {
        //   carrots: 0,
        //   pineapples: 0,
        //   cherries: 0
        // },
        ,
        cart: {
        }
      }
    },
    computed:{
      // cartTotal(){
      //   return(this.cart.carrots*4.82).toFixed(2)
      // },
      totalQuantity(){
        return Object.values(this.cart).reduce((acc,curr)=>{
          return acc+curr
        },0)
      }
  
  },
    methods: {
      addToCart(name,i) {
        if (!this.cart[name])this.cart[name]=0
        this.cart[name] += this.inventory[i].quantity
        console.log(this.cart)
        this.inventory[i].quantity=0
      },
      toggleSideBar(){
        this.showSideBar= !this.showSideBar
        console.log(this.showSideBar)
      },
      remove(name){
          delete this.cart[name]
      }
    },
    async mounted() {
      const res = await fetch('../json/food.json')
      const data = await res.json()
      this.inventory=data 
      console.log(this.inventory)
    },
  })
  app.component('sidebar',{
  props:['toggle','cart','inventory','remove'],
  computed:{
      // cartTotal(){
      //   return(this.cart.carrots*4.82).toFixed(2)
      // },
  
  },
  methods: {
      getPrice(name){
          const product = this.inventory.find((p)=>{
              return p.name === name
          })
          return product.price.USD
      },
      calculateTotal(){
          const name = Object.keys(this.cart)
          console.log(name)
          const total = Object.entries(this.cart).reduce((
              acc,curr)=>{
                return acc +(curr[1]*this.getPrice(curr[0]))
              },0)
          console.log(total)
          return total.toFixed(2)
      }
  },
  template:`
  <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button @click="toggle" class="cart-close">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(quantity,key,i) in cart" :key="i">
              <td><i class="icofont-carrot icofont-3x"></i></td>
              <td>{{key}}</td>
              <td>\${{getPrice(key)}}</td>
              <td class="center">{{quantity}}</td>
              <td>\${{quantity*getPrice(key)}}</td>
              <td class="center">
                <button class="btn btn-light cart-remove" @click="remove(key)">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="center" v-if="!Object.keys(cart).length"><em>No items in cart</em></p>
        <hr>
        <div class="spread">
          <span><strong>Total:</strong>\${{calculateTotal()}}</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
  `
  })
  app.mount('#app')