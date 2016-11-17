<template>
	<div className="video-detail col-md-8">
		<div className="embed-responsive embed-responsive-16by9">
			<div class="loading">{{load}}</div>
			<iframe className="enbed-reposive-item" :src="url" />
		</div>
		<div className="details">
			<div>{{video.snippet.title}}</div>
			<div>{{video.snippet.description}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['video'],
		data: function(){
			if(!video)
				return {load : 'loading'}
			return {
				url: 'https://youtube.com/' + this.video
			}
		}
	}
</script>
