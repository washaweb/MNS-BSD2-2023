<template>
  <main>
    <div class="container py-4">
      <div class="row">
        <div class="col-md-9">
          <h1 class="h2 mb-4"><i class="fa-solid fa-angle-down me-2 fs-3" />Liste des factures</h1>
        </div>
        <div class="col-md-3 text-end">
          <button @click="appCreateBill()" class="btn btn-outline-info" type="button">
            <i class="fa-solid fa-circle-plus me-1" />
            Créer une facture
          </button>
        </div>
      </div>

      <div class="border rounded-3 p-2">
        <table class="table align-middle mb-0">
          <tbody>
            <BillTableRow
              v-for="bill in bills"
              :key="bill.id"
              :bill="bill"
              @onDeleteBill="appDeleteBill($event)"
            />
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
  },
  methods: {
    // permet de créer une nouvelle facture
    appCreateBill() {
      console.log('create bill')
      this.bills.push({
        id: this.bills.length + 1,
        billnum: 209345600,
        description: 'Nouvelle facture',
        date: '07/02/2024',
        client: {
          idclient: 1,
          firstName: 'Marc',
          lastName: 'Scout',
          companyName: 'Lumon Industries'
        },
        prestations: [
          {
            description: 'Etude graphique UX',
            qty: 2,
            price: 450.0
          },
          {
            description: 'Création d’un site Wordpress',
            qty: 5,
            price: 450.0
          },
          {
            description: 'Hébergement annuel',
            qty: 1,
            price: 250.0
          }
        ],
        discount: 0.0,
        paid: 0.0,
        totalHT: 0,
        tva: 20,
        totalTTC: 0
      })
    },
    // permet de supprimer une facture en fonction de son id
    appDeleteBill(id) {
      const billIndex = this.bills.findIndex((bill) => bill.id === id)
      this.bills.splice(billIndex, 1)
      console.log('delete bill avec l’index: ', billIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
/* ici les futurs styles du composant écrit avevc du scss */
</style>
