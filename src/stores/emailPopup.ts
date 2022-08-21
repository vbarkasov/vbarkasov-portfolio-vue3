import { defineStore } from 'pinia'

export const useEmailPopupStore = defineStore('counter', {
  state: () => ({
    emailPopupIsShown: false
  }),
  getters: {
    getPopupVisibleStatus(state) {
      return state.emailPopupIsShown
    }
  },
  actions: {
    showEmailPopup () {
      this.emailPopupIsShown = true
    },
    hideEmailPopup: function () {
      this.emailPopupIsShown = false
    }
  }
})
