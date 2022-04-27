<template>
   <div class="static-content px-4 mx-auto">
    <h1 class="text-center">Contacts</h1>
    <address>
      <strong>Telegram: </strong>
      <a href="https://t.me/vbarkasov">@vbarkasov</a>
    </address>

    <address>
      <strong>Email:</strong>
      <a
        href=""
        @click.prevent="showPopup"
      >
        vbarkasov4pub@gmail.com
      </a>
    </address>
  </div>
</template>

<script>
// Title: Vladimir Barkasov - Contacts
import { useEmailPopupStore } from '@/stores/emailPopup'

export default {
  setup() {
    const emailPopup = useEmailPopupStore()
    const showPopup = emailPopup.showEmailPopup

    return {
      showPopup
    }
  }
}
</script>

<style scoped>
.static-content {
  max-width: 300px;
}
</style>
