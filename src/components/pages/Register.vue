<template>
   <div>
      <h1 class="text">Cadastro</h1>
      <h2 class="text"></h2>

      <form @submit.prevent="savePicture()">
         <div class="control">
            <label for="title">TÍTULO</label>
            <input id="title" autocomplete="off" v-model.lazy="picture.titulo">
         </div>

         <div class="control">
            <label for="url">URL</label>
            <input id="url" autocomplete="off" v-model.lazy="picture.url">
            <my-component-image v-show="picture.url" :url="picture.url" :title="picture.title"/>
         </div>

         <div class="control">
            <label for="description">DESCRIÇÃO</label>
            <textarea id="description" autocomplete="off" v-model.lazy="picture.descricao"></textarea>
         </div>

         <div class="text">
            <my-component-button title="SALVAR" type="submit"/>
            <router-link to="/">
               <my-component-button title="VOLTAR" type="button"/>
            </router-link>
         </div>
      </form>

   </div>
</template>

<script>
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue'; 
import Button from '../shared/button/Button.vue'; 
import Picture from '../../domain/picture/Picture'; 

export default {

   components: {
      'my-component-image': ResponsiveImage, 
      'my-component-button': Button
   },

   data() {
      return {
         picture: new Picture()
      }
   },

   methods: {
      savePicture() {
         this.$http.post('http://localhost:3000/v1/fotos', this.picture)
            .then(() => this.picture = new Picture(), err => console.log(err)); 
         alert('IMAGEM SALVA COM SUCESSO!'); 
      }
   }
}
</script>

<style scoped>
.text {
   text-align: center;
}
.control {
   font-size: 1.2em;
   margin-bottom: 20px;
}
.control label {
   display: block;
   font-weight: bold;
}
.control label + input, .control textarea {
   width: 100%;
   font-size: inherit;
   border-radius: 5px
}
</style>