<template>
  <tr v-if="bill">
    <td>{{ bill.date }} - {{ bill.description }} - {{ bill.billnum }}</td>
    <td>{{ bill.client.firstName }} {{ bill.client.lastName }}</td>
    <td class="text-end">{{ bill.totalHT.toFixed(2) }} HT</td>
    <td class="text-end">{{ bill.totalTTC.toFixed(2) }} TTC</td>
    <td class="d-flex justify-content-end gap-2">
      <button @click="childDeleteBill(bill.id)" class="btn btn-outline-danger">
        <i class="fa-solid fa-trash me-1" />
        Supprimer
      </button>
      <button @click="childEditBill(bill.id)" class="btn btn-outline-info">
        <i class="fa-solid fa-pen me-1" />
        Editer
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['bill'],
  methods: {
    // supprime une facture en fonction de son id
    childDeleteBill(id) {
      this.$emit('onDeleteBill', id)
    },
    // edite une facture en fonction de son id
    childEditBill(id) {
      console.log('editer la facture', id)
    }
  }
}
</script>
