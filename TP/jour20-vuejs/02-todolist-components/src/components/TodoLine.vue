<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="flex-1 d-flex align-items-center">
      <!-- case à cocher pour terminer la tâche -->
      <span class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          :id="`ended-${todo.id}`"
          v-model="form.ended"
        />

        <label class="visually-hidden" :for="`ended-${todo.id}`">
          <!-- si la tâche est pas terminée / sinon -->
          {{ todo.ended ? 'Ne plus terminer la tâche' : 'Terminer la tâche' }}
        </label>
      </span>

      <!-- Affichage du texte de la todo à l'aide de la syntaxe {{ expression }} 
      v-if permet de masquer l'élément lorsque edit vaut true -->
      <span
        v-if="!todo.edit"
        :class="{ 'text-decoration-line-through text-body-tertiary': todo.ended }"
        >{{ todo.title }}</span
      >

      <!-- Édition de la todo, v-else permet de masquer l'élément lorsque edit vaut false -->
      <label v-else>
        <!-- 
          quand on veut rendre un attribut html dynamique, il faut utiliser v-bind:value="todo.title", ou plus simplement :value="todo.title"
          on peut aussi écouter l'évément input avec @input="todo.title = $event.target.value", qui va mettre à jour la valeur de la variable à chaque fois que l'utilisateur saisi une frappe dans le champ de formulaire.
          Vue propose la syntaxe v-model qui permet de faire les deux en même temps (2 way data-binding), c'est à dire qu'il affiche la valeur dans le formulaire et le mets à jours automatiquement lors de la frappe.
          v-model="todo.title"
        -->
        <input
          type="text"
          class="form-control"
          placeholder="Ajouter une todo"
          v-model="form.title"
        />
        <span class="visually-hidden">Votre todo :</span>
      </label>
    </span>
    <!-- boutons de suppression/édition -->
    <span>
      <button
        v-if="!todo.edit"
        type="button"
        class="btn btn-danger me-2"
        @click="$emit('delete', todo.id)"
      >
        <i class="bi bi-trash"></i>
        <span class="visually-hidden">Supprimer</span>
      </button>
      <button type="button" class="btn btn-info text-white" @click="$emit('edit', todo)">
        <i class="bi" :class="todo.edit ? 'bi-floppy-fill' : 'bi-pencil-fill'"></i>
        <span class="visually-hidden">Éditer</span>
      </button>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object, //String, Boolean, Number, Object, Array
      required: true // si la donnée est requise, génère une erreur dans le cas ou elle n'est pas fournie

      // // la valeur par défaut (si elle n'est pas requise)
      // // dans le cas d'un objet, nous devons créer une fonction qui retourne l'objet
      // default() {
      //   return {
      //     id: 1,
      //     title: 'Todo exemple 1',
      //     ended: false,
      //     edit: false
      //   }
      // }
    }
  },
  emits: ['delete', 'edit', 'input'],
  data() {
    return {
      form: {
        ended: false,
        title: ''
      }
    }
  },
  mounted() {
    this.form.ended = this.todo.ended
    this.form.title = this.todo.title
  },
  watch: {
    // ici on écoute les changement sur le formulaire local :
    form: {
      handler(newVal, oldVal) {
        console.log('emit input with vals :', newVal, oldVal)

        // on met à jour la valeur de la todo dans l'objet parent en emmettant un événement input avec la nouvelle valeur de la todo — en mélangeant la valeur de todo et du formulaire grâce au spread opérator (... ).
        this.$emit('input', { ...this.todo, ...newVal })
      },
      deep: true // quand on écoute un objet, il faut écouter chaque propriété de l'objet
    }

    // on peut aussi écouter chaque valeur séparément :

    // ['form.ended'](newVal) {
    //   // console.log(newVal, oldVal)
    //   this.$emit('input', { ...this.todo, ended: newVal })
    // }
    // ['form.title'](newVal) {
    //   // console.log(newVal, oldVal)
    //   this.$emit('input', { ...this.todo, title: newVal })
    // }
  }
}
</script>
