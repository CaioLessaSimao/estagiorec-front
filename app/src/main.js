import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import AlunosView from './views/AlunosView.vue'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/alunos', component: AlunosView},
    ]
});

const vuetify = createVuetify(
    {
        components,
        directives
    }
);

const app = createApp(App)

app.use(router);
app.use(vuetify);


app.mount('#app');
