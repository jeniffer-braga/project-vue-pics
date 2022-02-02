import Register from './components/pages/Register.vue';
import Home from './components/pages/Home.vue';

export const routes = [
   { path: '/', component: Home, name: 'Home' },
	{ path: '/register', component: Register, name: 'Cadastro' }
]; 