<template>
	<section>
		
		<h1 class="entry-title">{{ page.title.rendered }}</h1>
		<div class="entry-content" v-html="this.page.content.rendered"></div>

	</section>
</template>

<script>
	export default {
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
			this.$http.get(wp.root + 'wp/v2/pages/' + this.$route.meta.id)
			.then(response => {
				this.page = response.data
			})
			.catch(error => {
				console.log(error)
			})
		},
	}
</script>