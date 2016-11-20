<template>
	<div class="video-detail col-md-8">
		<div class="embed-responsive embed-responsive-16by9">
			<div class="loading">{{load}}</div>
			<iframe class="enbed-reposive-item" :src="url" />
		</div>
		<div class="details">
			<div>{{title | toUppercase}}</div>
			<div>{{description}}</div>
		</div>
	</div>
</template>

<script>
	import {eventBus} from '../main';

	export default {
		props: ['video'],
		data: function(){
			return {
				load : 'loading',
				url : '',
				title: '',
				description: ''}
		},
		methods: {
			setVideo(video) {
				this.url = 'https://youtube.com/embed/' + video.id.videoId;
				this.title = video.snippet.title;
				this.description = video.snippet.description;
			}
		},
		filters: {
			toUppercase(v, t){
				return v.toUpperCase()
			}
		},
		created() {
			this.setVideo(this.video);
			eventBus.$on('selectedVideo', (data) => {
				this.setVideo(data)
			})
		}
	}
</script>
