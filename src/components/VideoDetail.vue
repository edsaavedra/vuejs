<template>
	<div className="video-detail col-md-8">
		<div className="embed-responsive embed-responsive-16by9">
			<iframe className="enbed-reposive-item" :src="url"/>
		</div>
		<div className="details">
			<div>{{title}}</div>
			<div>{{description}}</div>
			<button @click="updateVideo">get it</button>
		</div>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: ['video'],
		data: function () {
			if(!this.video)
				return {loading: true}
			return {
				url: '',
				title: '',
				description: ''
			}
		},
		methods: {
			updateVideo: function() {
				this.url = "https://youtube.com/embed/" + this.video.id.videoId;
				this.title = this.video.snippet.title;
				this.description = this.video.snippet.description;
			}
		},
		mounted() {
			this.url = "https://youtube.com/embed/" + this.video.id.videoId;
			this.title = this.video.snippet.title;
			this.description = this.video.snippet.description;
		}
	}
</script>
