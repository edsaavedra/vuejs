<template>
	<div>
		<search-comp></search-comp>
		<detail-comp :video="selectedVideo"></detail-comp>
		<list-comp></list-comp>
	</div>
</template>

<script>
import VideoSearch from './VideoSearch.vue';
import VideoDetail from './VideoDetail.vue';
import VideoList from './VideoList.vue';
import YISearch from 'youtube-api-search';

const api_key = 'AIzaSyAI7EUhh8TfsOK6HsEfHiv-x5YmzKTj61U';

export default {
	data: function(){
		return {
			videos: [],
			selectedVideo: null
		}
	},
	components: {
		'search-comp': VideoSearch,
		'detail-comp': VideoDetail,
		'list-comp': VideoList
	},
	methods: {
		onSearch(term) {
			YISearch({key: api_key, term: term}, (videos) => {
				this.videos = videos;
				this.selectedVideo = videos[0];
				console.log(videos)
			})
		}
	},
	created(){
		this.onSearch('dog')
	}
}
</script>

<style></style>
