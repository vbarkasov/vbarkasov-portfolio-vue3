import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import { VueReCaptcha } from 'vue-recaptcha-v3'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faGooglePlay, faExternalLinkAlt)

const gRecaptchaSitekey =  import.meta.env.VITE_RECAPTCHA_SITEKEY
console.log('gRecaptchaSitekey: ' + import.meta.env.VITE_RECAPTCHA_SITEKEY)

loadFonts()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueReCaptcha, { siteKey: gRecaptchaSitekey })
app.component('fa-icon', FontAwesomeIcon)
app.mount('#app')




