<template>
  <div class="static-content px-4 mx-auto">
    <h1 class="text-center">Contacts</h1>
    <address>
      <strong>Telegram: </strong>
      <a
        href="https://t.me/vbarkasov"
        target="_blank"
      >
        @vbarkasov
      </a>
    </address>

    <address>
      <strong>Email:</strong>
      <a
        href="mailto:vbarkasov4pub@gmail.com"
        target="_blank"
      >
        vbarkasov4pub@gmail.com
      </a>
    </address>
  </div>
</template>

<script>
import { useEmailPopupStore } from '@/stores/emailPopup'
import { useMeta } from '@/composables/meta'

export default {
  setup() {
    const {
      setTitle
    } = useMeta()

    setTitle('Contacts')

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
