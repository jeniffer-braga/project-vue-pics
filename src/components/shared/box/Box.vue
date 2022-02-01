<template>
	<div class="box">
		<h2 class="box-title">{{ title }}</h2>
		<slot class="box-content"></slot>
	</div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
	.box {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }
  .box-title {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  .box-image {
	  width: 100%;
  }
</style>
