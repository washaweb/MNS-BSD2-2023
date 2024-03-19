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
        <RouterLink
          class="btn btn-outline-primary"
          active-class="active text-primary"
          :to="{ name: 'user', params: { id: user.id } }"
        >
          Voir la fiche
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { users } from '@/datas/users.js'

export default {
  data() {
    return {
      users
    }
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
