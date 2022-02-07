<template>
	<div class="page">

		<my-component-menu :routes="routes"/>

		<transition name="page-content">
			<router-view></router-view>
		</transition>
		
	</div> 
</template>

<script>
import { routes } from './routes'; 
import Menu from './components/shared/menu/Menu.vue';

export default {

	components: {
		'my-component-menu': Menu
	},

	data() {
		return {
			routes : routes.filter(route => route.menu) 
		}
	}
}	
</script>

<style>
.page {
	font-family: Helvetica, sans-serif;
	width: 96%;
	margin: 0 auto;
}
.page-content-enter, .page-content-leave-active {
   opacity: 0;
}
.page-content-enter-activce, .page-content-leave-active {
   transition: opacity .4s;
}
</style>
