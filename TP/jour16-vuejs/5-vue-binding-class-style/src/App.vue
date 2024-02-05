<!-- Le template est la vue du document -->
<template>
  <div class="container">
    <div class="product">
      <div class="product-img">
        <img :src="image" :alt="product" />
      </div>
      <!-- on boucle sur les variantes de produit -->
      <p>
        <!-- autre syntaxe pour l'attribut style
            :style="`background-color: ${variant.color}`" -->
        <a
          href="#"
          :style="{ backgroundColor: variant.color }"
          class="color-box"
          @mouseover="previewImage(variant)"
          v-for="variant in variants"
          :key="variant.variantId"
          >{{ variant.variantColor }}
        </a>
      </p>

      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="inventory > 10">{{ inventory }}</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Presque épuisé</p>
        <p v-else>Pas en stock</p>
        <ul>
          <li v-for="(detail, index) in details" :key="index">{{ detail }} - {{ index }}</li>
        </ul>
      </div>
    </div>
    <!-- le bouton déclenche au click la méthode addToCart qui ajoute un élément au panier -->
    <!-- <button v-on:click="addToCart()">Ajouter au panier</button> -->
    <button @click="addToCart()">Ajouter au panier</button>
    <button @click="resetCart()">Effacer le panier</button>
    <div class="cart">
      <p>Panier ({{ cart }})</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: 'Socks',
      image: 'https://picsum.photos/200/300?image=1',
      inventory: 20,
      details: ['80% coton', '20% polyester', 'Genre mixte'],
      colors: [
        { value: 0, text: 'Rouge' },
        { value: 1, text: 'Blanche' },
        { value: 2, text: 'Noire' }
      ],
      variants: [
        {
          variantId: 2234,
          variantColor: 'Vert',
          color: 'green',
          variantImage: 'https://picsum.photos/200/300?image=1'
        },
        {
          variantId: 2235,
          variantColor: 'Bleu',
          color: 'blue',
          variantImage: 'https://picsum.photos/200/300?image=2'
        }
      ],
      // la propriété cart, permet de savoir combien d'éléments j'ai dans mon panier
      cart: 0
    }
  },
  mounted() {},
  // on décrit les méthodes utilisable dans notre composant
  methods: {
    // ici ajoute un élément au panier
    addToCart() {
      this.cart += 1
    },
    resetCart() {
      this.cart = 0
    },
    previewImage(variant) {
      // on reçoit en paramètre, l'un des objets du tableau variants[]
      // console.log(variant)

      // ici je change la variable image pour celle de la variante
      this.image = variant.variantImage
    }
  }
}

const humans = [
  {
    name: 'John',
    age: 21
  },
  {
    name: 'Marie',
    age: 18
  },
  {
    name: 'Jack',
    age: 16
  }
]
</script>

<style lang="scss" scoped>
.color-box {
  width: 100px;
  height: 20px;
  margin-right: 20px;
  display: inline-block;
}
</style>
