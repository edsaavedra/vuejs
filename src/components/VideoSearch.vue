<template>
	<input type="text" placeholder="Search" @keyup="emitSearch(term)" v-model="term">
</template>
<script>
	export default {
		data() {
			return {
				term: 'dog'
			}
		},
		methods: {
			emitSearch(e) {
				this.$emit('searchEvent', e)
			}
		}
	}
</script>
