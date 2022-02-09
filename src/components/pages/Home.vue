<template>
	<div>
	   <h1 class="text">{{ title }}</h1>
	   <p v-show="message" class="text">{{ message }}</p>
		<input class="filter" type="search" placeholder="Filtre por parte do título" @input="filter = $event.target.value">

		<ul class="pictures-list">
			<li class="pictures-list-item" v-for="picture of picturesWithFilter" :key="picture">

				<my-component-box :title="picture.titulo">
					<my-component-box-image :url="picture.url" :alt="picture.titulo" v-my-transform:scale.animate="1.2"/>

					<router-link :to="{ name: 'alter', params: { id : picture._id} }">
						<my-component-button type="button" title="ALTERAR"/>
					</router-link>               

					<my-component-button 
						type="button" 
						title="EXCLUIR" 
						buttonStyle="danger"
						:confirmation="true"
						@activatedButton="remove(picture)"
					/>
				</my-component-box>

			</li>
		</ul>
	</div> 
</template>

<script>
import Box from '../shared/box/Box.vue'; 
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue'; 
import Button from '../shared/button/Button.vue';
import transform from '../../directives/Transform'; 
import PictureService from '../../domain/picture/PictureService'; 

export default {

	components: {
		'my-component-box': Box, 
		'my-component-box-image': ResponsiveImage,
		'my-component-button': Button
	}, 

	directives: {
		'my-transform': transform
	},

	data() {
		return {
			title: 'Vue pictures',
			pictures: [],
			filter: '',
			message: ''
		}
	},

	computed: {
		picturesWithFilter() {
			if (this.filter) { 
				let exp = new RegExp(this.filter.trim(), 'i');
				return this.pictures.filter(picture => exp.test(picture.titulo));
			} else {
				return this.pictures; 
			}
		}
	},

	methods: {
		remove(picture) {
         this.service
            .deletePicture(picture._id) 
            .then(() => {
               let indice = this.pictures.indexOf(picture);
               this.pictures.splice(indice, 1);
               this.message = 'IMAGEM REMOVIDA COM SUCESSO';
            }, 
            err => {
               this.message = 'NÃO FOI POSSÍVEL REMOVER A IMAGEM';
               console.log(err);  
            }); 
		}
	},

	created() {
      this.service = new PictureService(this.$resource);
      this.service
         .listPictures()
		   .then(resPictures => this.pictures = resPictures, err => console.log(err)); 
	}
}	
</script>

<style scoped>
.text {
	text-align: center;
}
.filter {
	display: block;
	width: 100%;
}
.pictures-list {
	list-style: none;
}
.pictures-list-item {
	display: inline-block;
}
</style>
