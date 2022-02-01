<template>
	<div class="page-body">
		<h1 class="title-text">{{ title }}</h1>
		<input class="filter" type="search" placeholder="Filtre por parte do título" @input="filter = $event.target.value">

		<ul class="pictures-list">
			<li class="pictures-list-item" v-for="picture of picturesWithFilter" :key="picture">

				<my-component-box :title="picture.titulo">
					<img  class="box-image" :src="picture.url" :alt="picture.title">
				</my-component-box>

			</li>
		</ul>
	</div> 
</template>

<script>
	import Box from './components/shared/box/Box.vue'; 

	export default {

		components: {
			'my-component-box': Box
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

		created() {
			this.$http.get('http://localhost:3000/v1/fotos')
				.then(res => res.json())
				.then(resPictures => this.pictures = resPictures, err => console.log(err)); 
		}
	}	
</script>

<style>
	.page-body {
		font-family: Helvetica, sans-serif;
		width: 96%;
		margin: 0 auto;
	}
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
	.box-image {
	  width: 100%;
  	}
</style>
