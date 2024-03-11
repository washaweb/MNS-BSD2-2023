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
            <TodoLine
              v-for="todo in todos"
              :key="todo.id"
              :todo="todo"
              @delete="onDeleteTodo($event)"
              @edit="onEditTodo($event)"
              @input="onInputTodo($event)"
            />
            <!-- fin de todo -->
          </ul>
          <pre>
            {{ todos }}
          </pre>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// on importe le composant 'TodoLine'
import TodoLine from '@/components/TodoLine.vue'

import todos from '@/datas/todos.js'

export default {
  // on déclare le composant ici
  components: {
    TodoLine
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
    },

    onInputTodo(todo) {
      console.log('input', todo)
      // on récupère l'index de la todo qui est modifiée
      let i = this.todos.findIndex((t) => t.id === todo.id)
      console.log(i)
      // on met à jour les données de la todo dans cet index
      this.todos[i] = { ...this.todos[i], ...todo }
    }
  }
}
</script>
