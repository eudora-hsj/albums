import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/app.css'
import MasonryWall from '@yeger/vue-masonry-wall'


createApp(App)
    .use(router)
    .use(MasonryWall)
    .mount('#app')

