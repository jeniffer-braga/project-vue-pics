<template>
	<div>
	   <h1 class="title-text">{{ title }}</h1>
		<input class="filter" type="search" placeholder="Filtre por parte do título" @input="filter = $event.target.value">

		<ul class="pictures-list">
			<li class="pictures-list-item" v-for="picture of picturesWithFilter" :key="picture">

				<my-component-box :title="picture.titulo">
					<my-component-box-image :url="picture.url" :alt="picture.titulo" v-my-transform/>
					<my-component-button 
						type="button" 
						title="EXCLUIR" 
						buttonStyle="default"
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

export default {

	components: {
		'my-component-box': Box, 
		'my-component-box-image': ResponsiveImage,
		'my-component-button': Button
	}, 

	data() {
		return {
			title: 'Vue pictures',
			pictures: [],
			filter: ''
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
			alert('Imagem ' + picture.titulo + ' removida.'); 
		}
	},

	created() {
		this.$http.get('http://localhost:3000/v1/fotos')
			.then(res => res.json())
			.then(resPictures => this.pictures = resPictures, err => console.log(err)); 
	}
}	
</script>

<style scoped>
.title-text {
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
