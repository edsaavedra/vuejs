<template>
	<div>
		<input type="text" placeholder="Search" v-model="term" @keyup="this.$emit('search', term)">
		{{term}}
	</div>
</template>
<script>
	export default {
		data(){
			return {term: ''}
		}
	}
</script>
