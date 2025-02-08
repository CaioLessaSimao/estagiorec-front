import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import AlunosView from './views/AlunosView.vue'
import EmpresasView from './views/EmpresasView'
import OrientadoresView from './views/OrientadoresView'
import EstagiosView from './views/EstagiosView'
import LoginView from './views/LoginView.vue'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import EstagiosAlunoView from './views/EstagiosAlunoView.vue'
import EstagiosEmpresaView from './views/EstagiosEmpresaView.vue'
import EstagiosOrientadorView from './views/EstagiosOrientadorView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/alunos', name: 'Alunos', component: AlunosView},
        {path: '/empresas', name: 'Empresas', component: EmpresasView},
        {path: '/orientadores', name: 'Orientadores', component: OrientadoresView},
        {path: '/estagios', name: 'Estagios',component: EstagiosView},
        {path: '/', name: 'Login', component: LoginView},
        {path: '/estagios/aluno/:id', name: 'EstagiosAluno', component: EstagiosAlunoView},
        {path: '/estagios/empresa/:id', name: 'EstagiosEmpresa', component: EstagiosEmpresaView},
        {path: '/estagios/orientador/:id', name: 'EstagiosOrientador', component: EstagiosOrientadorView},
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
