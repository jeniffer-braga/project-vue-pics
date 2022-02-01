<template>
	<div>
		<h1>{{ title }}</h1>
		<ul>
			<li v-for="picture of pictures" :key="picture">
				<img :src="picture.url" :alt="picture.title">
			</li>
		</ul>
	</div> 
</template>

<script>
	export default {
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

<style></style>
