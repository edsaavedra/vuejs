<template>
	<div>
		<item-comp :videos="videos"></item-comp>
	</div>
</template>
<script>
	import VideoListItem from './VideoListItem.vue';

	export default{
		props: ['videos'],
		components: {
			'item-comp': VideoListItem
		}
	}
</script>
