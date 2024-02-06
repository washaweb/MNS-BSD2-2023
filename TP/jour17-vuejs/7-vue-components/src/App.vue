<!-- Le template est la vue du document -->
<template>
  <div class="container">
    <!-- on a créé un composant product pour séparer la logique et le code de l'application -->
    <div class="product-list">
      <!-- ici on utilise le composant ProductItem pour représenter le template d'un produit -->
      <ProductItem
        @updateCart="addToCart()"
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />

      <!-- ici c'est la variable products qui représente la liste des données des produits -->
      <!-- <pre>{{ products }}</pre> -->
    </div>
    <button :disabled="!inStock" :class="{ notInStock: !inStock }" @click="addToCart()">
      Ajouter au panier
    </button>
    <button @click="resetCart()">Effacer le panier</button>
    <div class="cart">
      <p>Panier ({{ cart }})</p>
    </div>
  </div>
</template>

<script>
//pour pouvoir utiliser product il faut l'importer, le @ signifie '/src'
import ProductItem from '@/components/ProductItem.vue'

// importer la liste des produits sous la forme d'un tableau depuis le fichier seeds/products
import { products } from '@/seeds/products.js'

export default {
  // et ajouter le product aux composants de l'application
  components: {
    ProductItem
  },
  data() {
    return {
      inventory: 100,
      products, //ici on injecte les produits depuis le fichier seeds/products.js
      cart: 0
    }
  },
  computed: {
    inStock() {
      return this.inventory > 0
    }
  },
  // on décrit les méthodes utilisable dans notre composant
  methods: {
    // ici ajoute un élément au panier
    addToCart() {
      this.cart += 1
    },
    resetCart() {
      this.cart = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: 30px;
}

button {
  background-color: tomato;
  border: none;
  color: #fff;
  padding: 10px 30px;
  text-transform: uppercase;
  border-radius: 10px;
  margin-right: 4px;
}
button.notInStock {
  background-color: lightcoral;
}
</style>
