<!-- Le template est la vue du document -->
<template>
  <div class="container">
    <div class="product">
      <div class="product-img">
        <img :src="image" :alt="product" />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="inventory > 10">{{ inventory }}</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Presque épuisé</p>
        <p v-else>Pas en stock</p>

        <ul>
          <!-- on boucle sur le tableau details (qui vient des datas), et pour chaque case/index du tableau, on créer un tag li dans lequel on affiche l'élément du tableau (ici detail) -->
          <li v-for="(detail, index) in details" :key="index">{{ detail }} - {{ index }}</li>
          <!-- <li>80% coton</li>
          <li>20% polyester</li>
          <li>Genre mixte</li> -->
        </ul>

        <select name="details" id="details">
          <!-- rendre les options dynamique avec un v-for -->
          <option v-for="color in colors" :key="color.value" :value="color.value">
            {{ color.text }}
          </option>
        </select>
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
      details: ['80% coton', '20% polyester', 'Genre mixte'],
      colors: [
        { value: 0, text: 'Rouge' },
        { value: 1, text: 'Blanche' },
        { value: 2, text: 'Noire' }
      ]
    }
  },
  mounted() {},
  methods: {}
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

for (const person in humans) {
  console.log(person.name)
  console.log(person.age)
}
</script>
