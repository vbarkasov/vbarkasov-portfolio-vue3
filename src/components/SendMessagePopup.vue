<template>
  <transition name="fade">
    <div id="sendmail-popup" class="modal" v-if="emailPopupIsShown" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">Send message</h2>
            <button @click.prevent="hidePopup" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form
            class="sendmail-form"
            name="sendmail-form"
            @submit.prevent="onSubmit"
            method="POST"
          >
            <div class="modal-body">
              <div class="form-group">
                <label for="user-message">Your message *</label>
                <textarea
                  v-model="state.message"
                  class="form-control"
                  id="user-message"
                  rows="3"
                  required></textarea>
              </div>
              <div class="form-group">
                <label for="user-email">Your email for answer *</label>
                <input
                  v-model="state.email"
                  type="email"
                  class="form-control"
                  id="user-email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="form-group">
                <label for="user-name">Your name</label>
                <input v-model="state.name" type="text" class="form-control" id="user-name" placeholder="Name">
              </div>
              <!-- <vue-recaptcha
                      ref="recaptcha"
                      :sitekey="state.gRecaptchaSitekey"
                      @expired="onCaptchaExpired"
                      @verify="sendMail"
                   ></vue-recaptcha>-->
              <div v-if="state.userMessage" :class="['alert-' + state.userMessageType]" class="mb-0 mt-3 alert">
                {{ state.userMessage }}
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">
                <span v-if="state.emailSent">
                  Send again
                </span>
                <span v-else>
                  Send
                </span>
              </button>
              <button
                @click.prevent="emailPopupIsShown = false"
                type="button"
                class="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { onMounted, reactive, computed, ref } from 'vue'
import { useReCaptcha } from 'vue-recaptcha-v3'
import { useEmailPopupStore } from '@/stores/emailPopup'

export default {
  setup () {
    const emailPopup = useEmailPopupStore()
    const recaptcha = ref(null)

    const state = reactive({
      userMessage: '',
      userMessageType: '',
      message: '',
      email: '',
      name: '',
      // gRecaptchaSitekey: '',
      emailSent: false
    })

    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

    const showPopup = (e) => {
      e.preventDefault()
      state.userMessage = ''
      state.userMessageType = ''
      emailPopup.showEmailPopup()
    }

    const hidePopup = () => {
      state.userMessage = ''
      state.userMessageType = ''
      emailPopup.hideEmailPopup()
    }

    const onSubmit = async () => {
      // (optional) Wait until recaptcha has been loaded.
      await recaptchaLoaded()
      // Execute reCAPTCHA with action "login".
      const token = await executeRecaptcha('login')

      if (!token) {
        state.userMessage = 'Please confirm that you are human'
        state.userMessageType = 'danger'
      } else {
        sendMail(token)
      }

      // Do stuff with the received token.
      /*document.querySelector('[name="g-recaptcha-response"]').click()
      const el = document.querySelector('[name="g-recaptcha-response"]')*/

      /*if (el.value === '') {
        state.userMessage = 'Please confirm that you are human'
        state.userMessageType = 'danger'
      } else {
        sendMail(el.value)
      }*/
    }

    const sendMail = (recaptchaToken) => {
      if (state.message === '' || state.email === '' || state.name === '') {
        state.userMessage = 'Please enter all data before sending a message'
        state.userMessageType = 'danger'
        return
      }

      fetch('/sendmail.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          message: state.message,
          'g-recaptcha-response': recaptchaToken
        })
      })
        .then(response => response.json())
        .then(() => {
          state.userMessage = 'The message is sent successfully'
          state.userMessageType = 'success'
          state.emailSent = true
        })
        .catch(() => {
          state.userMessage = 'The message is not delivered'
          state.userMessageType = 'danger'
        })
    }

    const onCaptchaExpired = () => {
      recaptcha.reset()
    }

    /*onMounted(() => {
      const recaptchaScript = document.createElement('script')
      recaptchaScript.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
      recaptchaScript.async = true
      recaptchaScript.defer = true
      document.head.appendChild(recaptchaScript)
      state.emailSent = false
    })*/

    const emailPopupIsShown = computed({
      get() {
        return emailPopup.emailPopupIsShown
      },
      set(emailPopupIsShown) {
        if(emailPopupIsShown === true) {
          emailPopup.showEmailPopup()
        } else if(emailPopupIsShown === false) {
          emailPopup.hideEmailPopup()
        }
      }
    })

    return {
      state,
      showPopup,
      hidePopup,
      onSubmit,
      onCaptchaExpired,
      sendMail,
      emailPopupIsShown
    }
  }
}
</script>

<style scoped>
  .modal {
    display: block;
  }
</style>
