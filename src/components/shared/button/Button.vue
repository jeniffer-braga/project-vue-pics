<template>
   <button @click="enableAction()" class="button" :class="styleOfButton" :type="type">{{ title }}</button>
</template>

<script>
export default {
   props: {
      type: {
         type: String,
         required: true
      }, 
      title: {
         type: String,
         required: true
      },
      buttonStyle: String,
      confirmation: Boolean
   },

	methods: {
		enableAction() {
         if (this.confirmation) {
            if (confirm('DESEJA ' + this.title + ' A IMAGEM?')) {
				   this.$emit('activatedButton'); 
			   }
            return; 
         } 
         this.$emit('activatedButton');
		}
	},

   computed: {

      styleOfButton() {
         if (this.buttonStyle == 'default' || !this.buttonStyle) return 'default-button'; 
         if (this.buttonStyle == 'danger') return 'danger-button';
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
.default-button {
   background: darkcyan;
   color: white;
}
</style>