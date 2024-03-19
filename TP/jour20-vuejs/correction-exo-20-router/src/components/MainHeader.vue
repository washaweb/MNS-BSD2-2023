<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Exemple app</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active text-primary" to="/Users"
            >Users</RouterLink
          >
        </li>
        <!-- <li class="nav-item">
          <RouterLink class="nav-link" active-class="active text-primary" to="/User/1"
            >User 1</RouterLink
          >
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  }
}
</script>

<style lang="scss" scoped></style>
