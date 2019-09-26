<template>
	<footer class="footer section--s section--secondary">
		<div class="container-fluid">
			<h2>{{ title }}</h2>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		data() {
			return {
				title: 'Footer title',
			}
		}	
	}
</script>