<!-- Le template est la vue du document -->
<template>
  <div class="container">
    <!-- créer la structure d'un produit -->
    <div class="product">
      <div class="product-img">
        <!-- Lorsqu'on insère une variable dans un attribut html, il faut utiliser v-bind:src="" pour le rendre dynamique, on peut aussi utiliser simplement :src=""  -->
        <!-- <img v-bind:src="image" v-bind:alt="product" /> -->
        <img :src="image" :alt="product" />
        <!-- placer l'image ici -->
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <!-- affichage conditionnel dans le template -->
        <!-- v-if: si la condition n'est pas remplie, le tag n'est simplement pas rendu dans le code HTML -->
        <p v-if="inventory > 10">{{ inventory }}</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Presque épuisé</p>
        <p v-else>Pas en stock</p>

        <!-- avec v-show: si la condition n'est pas remplie, le tag est rendu dans le code HTML, mais il est en display: none; -->
        <div v-show="loading">Chargement en cours...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: 'Socks',
      image: 'https://picsum.photos/200/300',
      inventory: 20,
      loading: false
    }
  },
  mounted() {},
  methods: {}
}
</script>
