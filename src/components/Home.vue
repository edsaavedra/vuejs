<template>
	<search-comp></search-comp>
	<detail-comp></detail-comp>
	<list-comp></list-comp>
</template>

<script>
import VideoSearch from './VideoSearch.vue';
import VideoDetail from './VideoDetail.vue';
import VideoList from './VideoList.vue';

const api_key = 'AIzaSyAI7EUhh8TfsOK6HsEfHiv-x5YmzKTj61U';

export default {
	compoentns: {
		'sarch-comp': VideoSearch,
		'detail-comp': VideoDetail,
		'list-comp': Videolist
	}
}
</script>

<style></style>
