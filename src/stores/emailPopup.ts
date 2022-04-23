import { defineStore } from 'pinia'

export const useEmailPopupStore = defineStore({
  id: 'counter',
  state: () => ({
    emailPopupIsShown: false
  }),
  getters: {
    emailPopupIsShown: (state) => state.emailPopupIsShown
  },
  actions: {
    showEmailPopup() {
      this.emailPopupIsShown = true
    },
    hideEmailPopup() {
      this.emailPopupIsShown = false
    }
  }
})
