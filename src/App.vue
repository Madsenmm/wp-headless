<template>
	<div id="app">

		<header-import></header-import>

		<!-- Dynamic content -->
		<main class="main">
			<!-- <keep-alive> -->
				<router-view></router-view>
			<!-- </keep-alive> -->
		</main>

		<footer-import></footer-import>
		
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import Footer from '@/components/Footer';

	export default {
		name: 'App',
		components: {
			'header-import': Header,
			'footer-import': Footer,
		}
	}
</script>

<style lang="scss">
	@import "./assets/scss/main";
</style>