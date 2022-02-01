<template>
	<div class="page-body">
		<h1 class="title-text">{{ title }}</h1>

		<ul class="pictures-list">
			<li class="pictures-list-item" v-for="picture of pictures" :key="picture">

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
				pictures: []
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
	.pictures-list {
		list-style: none;
	}
	.pictures-list-item {
		display: inline-block;
	}
</style>
