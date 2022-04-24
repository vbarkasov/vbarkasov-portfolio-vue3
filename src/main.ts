import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import { VueReCaptcha } from 'vue-recaptcha-v3'

import App from './App.vue'
import router from './router'


const gRecaptchaSitekey =  import.meta.env.VITE_RECAPTCHA_SITEKEY
console.log('gRecaptchaSitekey: ' + import.meta.env.VITE_RECAPTCHA_SITEKEY)

loadFonts()

createApp(App)
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .use(VueReCaptcha, { siteKey: gRecaptchaSitekey })
    .mount('#app')



