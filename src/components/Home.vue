<template>
	<div class="content">
		<search-comp @searchEvent="onSearch($event)"></search-comp>
		<detail-comp :video="selectedVideo"></detail-comp>
		<list-comp :videosArray="videos"></list-comp>
		<button @click="update">update</button>
	</div>
</template>

<script>
import VideoSearch from './VideoSearch.vue';
import VideoDetail from './VideoDetail.vue';
import VideoList from './VideoList.vue';
import YISearch from 'youtube-api-search';

const api_key = 'AIzaSyAI7EUhh8TfsOK6HsEfHiv-x5YmzKTj61U';

export default {
	components: {
		'search-comp': VideoSearch,
		'detail-comp': VideoDetail,
		'list-comp': VideoList
	},

	data: function(){
		return {
			videos: [],
			selectedVideo: null,
			term: ''
		}
	},

	methods: {
		onSearch(term) {
			YISearch({key: api_key, term: term}, (videos) => {
				this.videos = videos;
				this.selectedVideo = videos[0];
			})
		},
		update() {
			this.onSearch('cat')
		}
	}
}
</script>

<style></style>
