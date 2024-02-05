<!-- Le template est la vue du document -->
<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <p class="counter">{{ count }}</p>
    <!-- <button v-on:click="incremente">Incrémenter</button> -->
    <button @click="incremente">Incrémenter</button>
  </div>
</template>

<!-- le script, c'est le controleur de la vue, 
  entre le controleur et la vue, on fait du "binding" d'attributs, çad qu'il y a une corrélation directe entre les variables du controleur et l'affichage de ces variables dans la vue, pas besoin de la mettre à jour, c'est vuejs qui s'en charge pour nous  -->
<script>
export default {
  data() {
    return {
      message: 'Hello John!',
      count: 1
    }
  },
  // mounted se déclenche automatiquement lorsque le composant est instantié
  mounted() {
    // ici on accède aux variables de datas avec le mot clé this

    this.incremente()
  },
  methods: {
    incremente() {
      // ici on accède aux variables de datas avec le mot clé this
      this.count++
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
.counter {
  font-weight: bold;
  font-size: 20px;
}
</style>
