// on importe la méthode pour déclarer un store
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
// j'importe mes données utilisateurs
import { users } from '@/datas/users.js'

// on exporte le store que l'on crée avec defineStore('nom du store', {objet du store})
export const useUserStore = defineStore('user', {
  // le state est l'équivalent d'un data dans un composant
  state: () => ({
    users
  }),

  // les getters sont l'équivalent des computed dans un composant
  getters: {
    firstuser() {
      return this.users[0]
    }
  },

  // les actions sont l'équivalent des methods dans un composant
  actions: {
    addUser(firstname, lastname) {
      this.users.push({
        id: uuidv4(),
        image: '/users/user-' + (this.users.length + 1) + '.jpg',
        firstname,
        lastname
      })
    },
    removeUser(id) {
      this.users = this.users.filter((user) => user.id !== id)
    }
  }
})
