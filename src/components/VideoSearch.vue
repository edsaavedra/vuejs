<template>
	<div class="col md-col-12 form-group">
		<input type="text" placeholder="Search" @keyup="emitSearch(term)" v-model="term" class="form-control">
	</div>
</template>
<script>
	export default {
		data() {
			return {
				term: ''
			}
		},
		methods: {
			emitSearch(e) {
				this.$emit('searchEvent', e)
			}
		}
	}
</script>
