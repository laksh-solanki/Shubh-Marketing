import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  function signIn(userData) {
    user.value = userData
  }

  function signOut() {
    user.value = null
  }

  return { user, signIn, signOut }
})
