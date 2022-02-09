import Register from './components/pages/Register.vue';
import Home from './components/pages/Home.vue';

export const routes = [
   { path: '/', component: Home, title: 'Home', name: 'home', menu: true },
	{ path: '/register', component: Register, title: 'Cadastro', name: 'register', menu: true },
   { path: '/register/:id', component: Register, title: 'Cadastro', name: 'alter', menu: false },
   { path: '*', component: Home, menu: false }
]; 