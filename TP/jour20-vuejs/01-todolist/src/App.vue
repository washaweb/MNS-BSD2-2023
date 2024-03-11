<template>
  <main class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <!-- titre -->
        <h1 class="my-4">Todo list exemple</h1>

        <pre>
          {{ todos[0].title }}
        </pre>
        <!-- liste des todos dans une card -->
        <div class="card">
          <!-- titre de la card -->
          <div class="card-header d-flex justify-content-between align-items-center">
            <span>Ajouter une todo :</span>
            <button type="button" class="btn btn-primary" @click="onAddTodo()">
              <i class="bi bi-plus-lg"></i>
              <span class="visually-hidden">Ajouter une todo</span>
            </button>
          </div>
          <!-- liste des todos -->
          <ul class="list-group list-group-flush">
            <!-- item de todo -->

            <!-- pour boucler on utilise le template tag: v-for qui permet de réaliser une boucle sur un tableau de données (ici todos[] ), lorsqu'on boucle, il faut donner une clée unique à l'aide de :key pour que vuejs puisse identifier l'élément lors des raffraichissement des données en cas de modification des valeurs. -->
            <li
              v-for="todo in todos"
              :key="todo.id"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <span class="flex-1 d-flex align-items-center">
                <!-- case à cocher pour terminer la tâche -->
                <span class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`ended-${todo.id}`"
                    v-model="todo.ended"
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
                    v-model="todo.title"
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
                  @click="onDeleteTodo(todo.id)"
                >
                  <i class="bi bi-trash"></i>
                  <span class="visually-hidden">Supprimer</span>
                </button>
                <button type="button" class="btn btn-info text-white" @click="onEditTodo(todo)">
                  <i class="bi" :class="todo.edit ? 'bi-floppy-fill' : 'bi-pencil-fill'"></i>
                  <span class="visually-hidden">Éditer</span>
                </button>
              </span>
            </li>
            <!-- fin item de todo -->
          </ul>
        </div>
      </div>
    </div>

    <hr class="my-4" />
    <!-- on peut utiliser un composant dans le template -->
    <Card>
      <!-- on utilise les templates pour "viser" les slots nommés dans le composant -->
      <template #header> Titre de la card </template>
      Un autre texte du bouton
    </Card>
    <!-- ici on ne change que le slot par défaut -->
    <Card> Autre texte</Card>

    <!-- si on ne met rien, il prendra la valeur du slot par défaut -->
    <Card />
  </main>
</template>

<script>
// on importe un composant exemple "Card"
import Card from '@/components/Card.vue'

import todos from '@/datas/todos.js'

export default {
  // on déclare le composant ici
  components: {
    Card
  },
  data() {
    return {
      todos
    }
  },
  methods: {
    // une méthode pour supprimer une todo
    onDeleteTodo(id) {
      // ici on cherche l'index de la todo à supprimer dans le tableau des todos
      const todoIndex = this.todos.findIndex((todo) => todo.id === id)
      // maintenant qu'on a l'index, on peut la supprimer avec la méthode array.splice
      this.todos.splice(todoIndex, 1)
    },

    // une méthode pour ajouter une todo
    onAddTodo() {
      // on pousse une nouvelle todo {} dans le tableau des todos
      this.todos.push({
        id: this.todos.length + 1,
        title: 'Nouvelle todo',
        ended: false,
        edit: false
      })
    },

    // une méthode pour ajouter une todo (affiche le formulaire)
    onEditTodo(todo) {
      todo.edit = !todo.edit
    }
  }
}
</script>
