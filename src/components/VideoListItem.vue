<template>
	<li class="list-group-item">
		<div class="video-list media">
			<div class="media-left">
				<img class="media-object" :src="singleVideo.snippet.thumbnails.default.url"/>
			</div>
			<div class="media-body">
				<div class="media-heading">{{singleVideo.snippet.title}}</div>
			</div>
		</div>
	</li>
</template>
<script>
	export default {
		props: ['singleVideo']
	}
</script>
