<template>
	<section class="page">
		<sidebar-import></sidebar-import>
		
		<div class="page__inner section--l">
			<div class="container-fluid">
				<h1 class="entry-title">{{ page.title.rendered }}</h1>
				<div class="entry-content" v-html="this.page.content.rendered"></div>
			</div>
		</div>
		
	</section>
</template>

<script>
	import Sidebar from '@/components/Sidebar';

	export default {
		components: {
			'sidebar-import': Sidebar,
		},
		data() {
			return {
				page: {
					id: 0,
					slug: '',
					title: { rendered: '' },
					content: { rendered: '' }
				}
			}
		},
		mounted() {
			this.$http.get(WP.root + 'wp/v2/pages/' + this.$route.meta.id)
			.then(response => {
				this.page = response.data
			})
			.catch(error => {
				console.log(error)
			})
		},
	}
</script>