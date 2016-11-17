<template>
	<div>
		<li v-for="video in videos">{{video.etag}}</li>
	</div>
</template>
<script>
	export default {
		props: ['videos']
	}
</script>
