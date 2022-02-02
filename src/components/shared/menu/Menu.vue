<template>
   <nav>
		<ul>
			<li v-for="route in routes" :key="route.name">
				<router-link :to="route.path">{{ route.name }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
   props: {
      routes: {
         type: Array,
         required: true
      }
   }
}
</script>

<style scoped>

</style>