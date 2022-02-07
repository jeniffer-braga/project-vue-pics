import Register from './components/pages/Register.vue';
import Home from './components/pages/Home.vue';

export const routes = [
   { path: '/', component: Home, title: 'Home', name: 'home', menu: true },
	{ path: '/register', component: Register, title: 'Cadastro', name: 'cadastro', menu: true },
   { path: '*', component: Home, menu: false }
]; 