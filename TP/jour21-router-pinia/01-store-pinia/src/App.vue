<template>
  <MainHeader />
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
export default {
  components: {
    RouterView,
    MainHeader
  }
}
</script>
