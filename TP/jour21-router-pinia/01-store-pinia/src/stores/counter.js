// on importe la méthode pour déclarer un store
import { defineStore } from 'pinia'

// on exporte le store que l'on crée avec defineStore('nom du store', {objet du store})
export const useCounterStore = defineStore('counter', {
  // le state est l'équivalent d'un data dans un composant
  state: () => ({
    count: 0
  }),

  // les getters sont l'équivalent des computed dans un composant
  getters: {
    // permet de retourner des variables calculées
    doubleCount() {
      return this.count * 2
    }
  },
  // les actions sont l'équivalent des methods dans un composant
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
