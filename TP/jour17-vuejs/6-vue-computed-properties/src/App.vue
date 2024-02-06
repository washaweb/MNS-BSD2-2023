<!-- Le template est la vue du document -->
<template>
  <div class="container">
    <p>
      {{ fullName }}
    </p>
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
    <!-- On crée une classe dynamique, le nom de la classe est notInStock, elle s'applique si la variable inStock est false  -->

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
export default {
  data() {
    return {
      product: 'Socks',
      firstName: 'John',
      lastName: 'Doe',
      image: 'https://picsum.photos/200/300?image=1',
      inventory: 100,
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
  computed: {
    inStock() {
      return this.inventory > 0
    },
    // ajouter une computed property pour obtenir le nom complet firstName lastName
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  },
  // hook qui se lance à l'instantiation du composant
  // les différents hooks disponibles dans le processus de mise à jour d'un composant
  //https://vuejs.org/guide/essentials/lifecycle
  mounted() {
    alert('toto')
  },
  updated() {
    console.log('updated')
  },
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
</script>

<style lang="scss" scoped>
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

.color-box {
  width: 100px;
  height: 20px;
  margin-right: 20px;
  display: inline-block;
}
</style>
