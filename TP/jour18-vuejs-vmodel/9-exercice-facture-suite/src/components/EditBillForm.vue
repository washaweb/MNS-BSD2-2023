<!-- composant: EditBillForm -->
<template>
  <div v-if="form">
    <div class="row">
      <div class="col">
        <input class="form-control" type="text" v-model="form.description" />
        {{ form.description }}
      </div>
    </div>

    <div>
      <button class="btn btn-secondary me-2" @click="cancelForm()">Annuler</button>
      <button class="btn btn-primary" @click="saveForm()">Enregistrer</button>
    </div>
    <pre>
      {{ form }}
    </pre>
  </div>
</template>

<script>
export default {
  props: ['bill'],
  data() {
    return {
      form: null
    }
  },
  mounted() {
    // je fais une copie de la donnée pour pouvoir l'éditer en local dans mon composant
    this.form = { ...this.bill }
  },
  methods: {
    cancelForm() {
      // j'envoie un onCancel au parent
      this.$emit('onCancel')
    },
    saveForm() {
      // j'envoie le formulaire au parent
      this.$emit('onSave', this.form)
    }
  }
}
</script>

<style lang="scss" scoped></style>
