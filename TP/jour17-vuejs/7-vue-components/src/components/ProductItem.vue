<template>
  <div class="product" v-if="product">
    <div class="product-img">
      <img :src="product.image" :alt="product.product" />
      <div class="product-variants">
        <a
          href="#"
          :style="{ backgroundColor: variant.color }"
          @mouseover="previewImage(variant)"
          v-for="variant in product.variants"
          :key="variant.variantId"
          >{{ variant.variantColor }}
        </a>
      </div>
    </div>
    <div class="product-info">
      <h4>{{ product.product }}</h4>
      <p class="product-inventory" v-if="product.inventory > 10">
        {{ product.inventory }} produits en notInStock
      </p>
      <p class="product-inventory" v-else-if="product.inventory <= 10 && product.inventory > 0">
        Presque épuisé
      </p>
      <p class="product-inventory" v-else>Pas en stock</p>
      <ul class="product-details">
        <li v-for="(detail, index) in product.details" :key="index">{{ detail }} - {{ index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// le parent m'envoie une prop du nom de inventory
export default {
  props: ['product'], //les props sont des datas qui viennent des propriétés du composants déclarées dans
  methods: {
    previewImage(variant) {
      // on reçoit en paramètre, l'un des objets du tableau variants[]
      // console.log(variant)
      console.log(variant)
      // ici je change la variable image pour celle de la variante

      // eslint-disable-next-line
      this.product.image = variant.variantImage
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  max-width: 280px;
  .product-img {
    position: relative;
    img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      object-position: center;
    }
    .product-variants {
      position: absolute;
      bottom: 8px;
      left: 8px;
      display: flex;
      gap: 8px;
      a {
        display: block;
        width: 40px;
        height: 40px;
        text-indent: -99999em;
      }
    }
  }
  .product-info {
    position: relative;
    padding: 4px 16px 16px;
    h4 {
      font-size: 20px;
      margin: 8px 0;
    }
    .product-inventory {
      background-color: #f4f4f4;
      display: inline-block;
      position: absolute;
      right: 8px;
      top: -8px;
      padding: 4px 8px;
    }
    .product-details {
      margin: 0;
      padding: 0;
      display: inline-block;
      list-style-type: none;
    }
  }
}
</style>
