<template>
	<div>
		<header-component></header-component>
		<transition name="slide" mode="out-in">
			<router-view></router-view>
		</transition>
		<footer-component></footer-component>
	</div>
</template>

<script>
import Home from './components/Home.vue';
export default {
	components: {
		'home-component': Home
	}
}
</script>

<style scoped>
	.slide-leave-acive{transition: all 1s; opacity: 0}
	.slide-leave{transform: translateX(50px); opacity: 1}
	.slide-enter-active{}
	.slide-enter{}
</style>

