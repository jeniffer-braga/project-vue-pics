<template>
   <div>
      <h1 class="text">Cadastro</h1>
      <h2 class="text">{{ picture.titulo }}</h2>

      <h2 v-if="picture._id" class="text">Alterando imagem</h2>
      <h2 v-else class="text">Incluindo imagem</h2>

      <form @submit.prevent="savePicture()">
         <div class="control">
            <label for="title">TÍTULO</label>
            <input data-vv-as="título" name="title" id="title" autocomplete="off" v-model="picture.titulo" v-validate data-vv-rules="required|min:3|max:35">
            <span class="error" v-show="errors.has('title')">{{ errors.first('title') }}</span>
         </div>

         <div class="control">
            <label for="url">URL</label>
            <input name="url" id="url" autocomplete="off" v-model="picture.url" v-validate data-vv-rules="required">
            <span class="error" v-show="errors.has('url')">{{ errors.first('url') }}</span>
            <my-component-image v-show="picture.url" :url="picture.url" :title="picture.titulo"/>
         </div>

         <div class="control">
            <label for="description">DESCRIÇÃO</label>
            <textarea id="description" autocomplete="off" v-model.lazy="picture.descricao"></textarea>
         </div>

         <div class="text">
            <my-component-button title="SALVAR" type="submit"/>
            <router-link :to="{ name: 'home'}">
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
import PictureService from '../../domain/picture/PictureService'; 

export default {

   components: {
      'my-component-image': ResponsiveImage, 
      'my-component-button': Button
   },

   data() {
      return {
         picture: new Picture(),
         id: this.$route.params.id
      }
   },

   methods: {
      savePicture() {
         this.$validator
         .validateAll()
         .then(success => {

            if (success) {
               this.service
               .registerPicture(this.picture)
               .then(() => {

                  if (this.id) this.$router.push({ name: 'home' }); 

                  this.picture = new Picture();
                  alert('IMAGEM SALVA COM SUCESSO!'); 
               }, err => console.log(err));

            } else alert('NÃO FOI POSSÍVEL SALVAR A IMAGEM');
           
         });
      }
   },
   
   created() {
      this.service = new PictureService(this.$resource);

      if (this.id) {
         this.service
            .searchPicture(this.id)
            .then(picture => this.picture = picture);
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

.error {
   color: red;
}
</style>