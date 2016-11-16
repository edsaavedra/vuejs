<template>
	<div>
		<item-comp></item-comp>
	</div>
</template>
<script>
	import VideoListItem from './VideoListItem.vue';

	export default{
		components: {
			'item-comp': VideoListItem
		}
	}
</script>
