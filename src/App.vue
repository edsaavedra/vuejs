<template>
	<div>
		<header-component></header-component>
		<home-component></home-component>
		<footer-component></footer-component>
	</div>
</template>

<script>
import Home from './components/Home.vue'
export default {
	components: {
		'home-component': Home
	}
}
</script>

<style scoped></style>
