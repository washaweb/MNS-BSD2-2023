<template>
  <main>
    <!-- ici pour récupérer le paramètre de la route, j'utilise l'objet global $route -->
    <!-- <h1>Une Todo qui a l'id : {{ $route.params.id }}</h1> -->
    <h1>Une Todo qui a l'id : {{ id }}</h1>

    <pre>
      {{ $route }}
    </pre>
  </main>
</template>

<script>
export default {
  props: ['id']
}
</script>
