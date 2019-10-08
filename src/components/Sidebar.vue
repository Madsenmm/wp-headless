<template>
	<aside class="sidebar">
		<h2>{{this.title}}</h2>

		<widget-import type="farver" id="2">
			<template v-slot:title>Farver</template>
			<!-- <template v-slot:content>New content</template> -->
		</widget-import>

		<widget-import type="stoerrelser" id="3">
			<template v-slot:title>Størrelser</template>
		</widget-import>

	</aside>
</template>


<script>
	import Widget from '@/components/Widget';

	export default {
		name: 'Sidebar',
		components: {
			'widget-import': Widget,
		},

		data() {
			return {
				title: 'Sidebar',
			}
		},
	}
</script>