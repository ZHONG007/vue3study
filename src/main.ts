import { createApp } from 'vue'
import { pinia } from './stores'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
const app = createApp(App).use(pinia).use(Antd).use(router)
app.mount('#app')
