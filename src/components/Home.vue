<template>
	<div class="content">
		<search-comp @searchEvent="onSearch($event)"></search-comp>
		<component :is="detail" :video="selectedVideo"></component>
		<list-comp :videosArray="videos"></list-comp>
	</div>
</template>

<script>
import VideoSearch from './VideoSearch.vue';
import VideoDetail from './VideoDetail.vue';
import VideoList from './VideoList.vue';
import HttpComp from './HttpComp.vue'
import YISearch from 'youtube-api-search';

const api_key = 'AIzaSyAI7EUhh8TfsOK6HsEfHiv-x5YmzKTj61U';

export default {
	components: {
		'search-comp': VideoSearch,
		'detail-comp': VideoDetail,
		'list-comp': VideoList,
		'http-comp': HttpComp
	},

	data: function(){
		return {
			videos: [],
			selectedVideo: null,
			term: 'bike',
			detail: ''
		}
	},
	methods: {
		onSearch(term) {
			YISearch({key: api_key, term: term}, (videos) => {
				this.videos = videos;
				this.detail = 'detail-comp';
				this.selectedVideo = videos[0];
				console.log(this.selectedVideo)
			})
		}
	},
	created() {
		this.onSearch(this.term);
	}
}
</script>

<style></style>
