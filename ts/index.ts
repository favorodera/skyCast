import {createApp} from 'vue'
import {createPinia} from 'pinia'
import index from '../vue/index.vue'
import '../scss/index.scss'

const webpage = createApp(index)
webpage.use(createPinia())
webpage.mount('.root-container')