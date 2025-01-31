import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import AlunosView from './views/AlunosView.vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/alunos', component: AlunosView},
    ]
})

const app = createApp(App)

app.use(router);

app.mount('#app');
