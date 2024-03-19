<template>
  <div class="container">
    <h1>User {{ user.firstname }} {{ user.lastname }}</h1>

    <img class="img-fluid" :src="user.image" :alt="user.firstname" />

    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import { users } from '@/datas/users.js'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    user() {
      return users.find((user) => user.id === +this.id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
