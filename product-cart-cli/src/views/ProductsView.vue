<template>
    <main class="wrapper">
        <h1>Products</h1>
        <div class="card-container">
          <ProductCard v-for="(product,index) in inventory.slice(0,6)"
          :key="product.id"
          class="card"
          :index="index"
          :product="product"
          :addToCart="addToCart"/>
          <!-- <div v-for="(product,i) in inventory" :key="product.id" class="card">
            <div class="card-title">
              {{product.name}}
            </div>
            <div class="card-body">
              <i class="icofont-10x icofont-{{product.icon}}"></i>
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>{{product.type}}</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    ${{product.price.USD}}
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" v-model="product.quantity" min="1" pattern="[1-9]+">
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button @click="addToCart(product.name,i)" class="btn btn-light">
                Add to cart
              </button>
            </div>
          </div> -->

          <!-- <div class="card">
            <div class="card-title">
              Pineapples
            </div>
            <div class="card-body">
              <i class="icofont-10x icofont-pineapple"></i>
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>Fruit</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    $1.62
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" value="0">
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button class="btn btn-light">Add to cart</button>
            </div>
          </div> -->

          <!-- <div class="card">
            <div class="card-title">
              Cherries
            </div>
            <div class="card-body">
              <i class="icofont-10x icofont-cherry"></i>
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>Fruit</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    $1.04
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" value="0">
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button class="btn btn-light">Add to cart</button>
            </div>
          </div> -->
          <!-- <div class="card">
            <div class="card-title">
              Carrots
            </div>
            <div class="card-body">
              <i class="icofont-10x icofont-carrot"></i>
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>Vegetable</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    $4.82
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" value="0">
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button class="btn btn-light">Add to cart</button>
            </div>
          </div> -->

          <!-- <div class="card">
            <div class="card-title">
              Pineapples
            </div>
            <div class="card-body">
              <i class="icofont-10x icofont-pineapple"></i>
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>Fruit</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    $1.62
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" value="0">
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button class="btn btn-light">Add to cart</button>
            </div>
          </div> -->

          <!-- <div class="card">
            <div class="card-title">
              Cherries
            </div>
            <div class="card-body">
              <i class="icofont-10x icofont-cherry"></i>
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>Fruit</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    $1.04
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" value="0">
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button class="btn btn-light">Add to cart</button>
            </div>
          </div> -->
        </div>
      </main>
</template>
<script>
// import Food from '../food.json'
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: 'MyProducts',
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard
  }
}
</script>
