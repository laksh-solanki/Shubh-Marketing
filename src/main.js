import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.bundle'

let docTitle = document.title
window.addEventListener('blur', () => {
  document.title = 'Come Back To Accurx App'
})
window.addEventListener('beforeunload', () => {
  document.title = docTitle
})
window.addEventListener('focus', () => {
  document.title = docTitle
})
