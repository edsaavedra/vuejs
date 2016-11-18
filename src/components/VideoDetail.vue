<template>
	<div class="video-detail col-md-8">
		<div class="embed-responsive embed-responsive-16by9">
			<div class="loading">{{load}}</div>
			<iframe class="enbed-reposive-item" :src="url" />
		</div>
		<div class="details">
			<div>{{title}}</div>
			<div>{{description}}</div>
		</div>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: ['video'],
		data: function(){
			return {
				load : 'loading',
				url : '',
				title: '',
				description: ''}
		},
		updated() {
			this.load = '';
			this.url = 'https://youtube.com/embed/' + this.video.id.videoId;
			this.title = this.video.snippet.title;
			this.description = this.video.snippet.description;
			console.log('updt')
		}
	}
</script>
