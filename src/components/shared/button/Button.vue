<template>
   <button @click="enableAction()" class="button danger-button" :type="type">{{ title }}</button>
</template>

<script>
export default {
   props: ['type', 'title'],
	methods: {
		enableAction() {
			if (confirm('Deseja excluir a imagem?')){
				this.$emit('activatedButton'); 
			}
		}
	}
}
</script>

<style scoped>
.button {
   display: inline-block;
	padding: 10px;
   border-radius: 3px;
   margin: 10px;
   font-size: 1.2em;
}
.danger-button {
   background: firebrick;
   color: white;
}
.bdefault-button {
   background: darkcyan;
   color: white;
}
</style>