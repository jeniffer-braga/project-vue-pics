<template>
	<div class="box">
    	<!-- @dblclick é igual a v-on:dblclick-->
		<h2 class="box-title" @dblclick="visible = !visible">{{ title }}</h2>
    	<transition name='box-fade'>
			<div class="box-content" v-show="visible">
				<slot></slot>
			</div>
    	</transition>
	</div>
</template>

<script>
export default {
   props: ['title'],

   data() {
		return {
			visible: true
		}
   }
}
</script>

<style scoped>
.box {
   padding: 0 auto;
   border: solid 2px grey;
   display: inline-block;
   margin: 5px;
   box-shadow: 5px 5px 10px grey;
   width: 200px;
   height: 100%;
   vertical-align: top;
   text-align: center;
}
.box-title {
   text-align: center;
   border: solid 2px;
   background: lightblue;
   margin: 0 0 15px 0;
   padding: 10px;
   text-transform: uppercase;
}
.box-fade-enter, .box-fade-leave-active {
   opacity: 0;
}
.box-fade-enter-activce, .box-fade-leave-active {
   transition: opacity .4s;
}
</style>
