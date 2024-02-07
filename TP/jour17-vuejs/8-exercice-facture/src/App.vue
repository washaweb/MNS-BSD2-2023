<template>
  <main>
    <div class="container py-4">
      <div class="row">
        <div class="col-md-9">
          <h1 class="h2 mb-4"><i class="fa-solid fa-angle-down me-2 fs-3" />Liste des factures</h1>
        </div>
        <div class="col-md-3 text-end">
          <button class="btn btn-outline-info" type="button">
            <i class="fa-solid fa-circle-plus me-1" />
            Créer une facture
          </button>
        </div>
      </div>

      <div class="border rounded-3 p-2">
        <table class="table align-middle mb-0">
          <tbody>
            <BillTableRow v-for="bill in bills" :key="bill.id" :bill="bill" />
          </tbody>
        </table>
      </div>
      <!-- <pre>
        {{ bills }}
      </pre> -->
    </div>
  </main>
</template>

<script>
import BillTableRow from '@/components/BillTableRow.vue'
import { bills } from '@/seeds/bills.js'

export default {
  components: {
    BillTableRow
  },
  data() {
    return {
      bills
    }
  }
}
</script>

<style lang="scss" scoped>
/* ici les futurs styles du composant écrit avevc du scss */
</style>
