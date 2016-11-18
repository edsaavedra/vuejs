<template>
	<div class="col-md-4 list-group">
		<item-comp v-for="video in videosArray" :singleVideo="video"></item-comp>
	</div>
</template>
<script>
	import VideoListItem from './VideoListItem.vue';

	export default{
		props: ['videosArray'],
		components: {
			'item-comp': VideoListItem
		}
	}
</script>
