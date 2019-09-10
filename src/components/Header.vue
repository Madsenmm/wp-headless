<template>
	<header class="header">

		<nav v-if="navItems.length">
			<router-link v-for="(item, index) in navItems" :key="index" tag="a" :to="item.path" exact>{{ item.name }}</router-link>
		</nav>

	</header>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				navItems: [],
			}
		},
		created() {
			this.navItems = this.$router.options.routes;
		},
	}
</script>


<style lang="scss" scoped>
	.header {
		padding-top: 3rem;
		padding-bottom: 3rem;
	} 
</style>