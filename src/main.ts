
//test
import { createApp } from 'vue'
import App from './App.vue'
import treebear from './index'

import './components/_styles/main.scss'

const app = createApp(App)
app.use(treebear)
app.mount('#app')
