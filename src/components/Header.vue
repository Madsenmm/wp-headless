<template>
	<header class="header section--s">
		<div class="container-fluid">

			<router-link key="home" tag="a" to="/" class="header__logo">
				<h1>Import-wheels</h1>
			</router-link>

			<nav class="nav" v-if="navItems.length">
				<ul class="nav__list">
					<li class="nav__item" v-for="(item, index) in navItems" :key="index">
						<router-link tag="a" :to="item.path" exact class="nav__link">{{ item.name }}</router-link>
					</li>
				</ul>
			</nav>

		</div>
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

<!-- 
<style lang="scss" scoped>
	.header {
		padding-top: 3rem;
		padding-bottom: 3rem;
	} 
</style> -->