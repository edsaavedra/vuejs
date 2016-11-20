<template>
	<li class="list-group-item" @click="selectVideo(singleVideo)">
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
	import {eventBus} from '../main'
	export default {
		props: ['singleVideo'],
		methods: {
			selectVideo(video){
				eventBus.$emit('selectedVideo', video);
			}
		}
	}
</script>
