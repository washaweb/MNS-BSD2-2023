<template>
  <div class="container">
    <h1 class="mb-4">Users view</h1>
    <ul class="list-group">
      <li
        v-for="user in users"
        :key="user.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span class="d-flex align-items-center">
          <img class="user-img me-3" :src="user.image" :alt="user.firstname" />
          <!-- <RouterLink class="nav-link" active-class="active text-primary" :to="`/user/${user.id}`"
            >{{ user.firstname }}
            {{ user.lastname }}
          </RouterLink> -->
          <span>{{ user.firstname }} {{ user.lastname }}</span>
        </span>
        <div class="d-flex">
          <!-- bouton de suppression, la methode removeUser() vient directement du stores/user.js -->
          <button class="btn btn-outline-danger me-2" @click="removeUser(user.id)">
            supprimer
          </button>

          <!-- bouton de consultation -->
          <RouterLink
            class="btn btn-outline-primary"
            active-class="active text-primary"
            :to="{ name: 'user', params: { id: user.id } }"
          >
            Voir la fiche
          </RouterLink>
        </div>
      </li>
    </ul>

    <!-- ici on affiche une donnée du store 'count' -->
    <pre>
      {{ counterStore.count }}
    </pre>
    <!-- ici on fait appel aux actions (méthodes) du store counter -->
    <button class="btn btn-secondary" @click="counterStore.decrement()">-</button>
    <button class="btn btn-secondary" @click="counterStore.increment()">+</button>
  </div>
  <pre>
    {{ firstuser }}
  </pre>

  <button class="btn btn-primary" @click="addUser('toto', 'tata')">Ajouter un utilisateur</button>
</template>

<script>
// ici on importe le store et la méthode mapStores de pinia, qui permet de décaler un store dans un composant
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import { mapActions, mapState, mapStores } from 'pinia'

export default {
  // le store se déclare dans les computed pour être déclaré dans le composant
  // à partir de là, nous avons accès à toutes les données du store (state, getters et actions) en utilisant this.counterStore.count par exemple, j'ai accès au state.count du store, en utilisant this.counterStore.increment() j'ai accès à l'action increment() du store...
  computed: {
    ...mapStores(useCounterStore), //ici on importe tout le store

    ...mapState(useUserStore, ['users', 'firstuser']) // ici on importe uniquement le state 'users' et le getter 'first' du state depuis le store userStore
  },
  methods: {
    // on importe ici les actions du store user
    ...mapActions(useUserStore, ['addUser', 'removeUser'])
  }
}
</script>

<style scopde>
.user-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
</style>
