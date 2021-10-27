
//test
import { createApp } from 'vue'
import App from './App.vue'
import treebear from '../packages/index'


const app = createApp(App)
app.use(treebear)
app.mount('#app')
