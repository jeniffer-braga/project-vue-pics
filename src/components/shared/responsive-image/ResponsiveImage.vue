<template>
   <img  class="box-image" :src="url" :alt="title">
</template>

<script>
export default {
	props: ['url', 'title']
}
</script>

<style scoped>
	.box-image {
	  width: 100%;
  	}
</style>