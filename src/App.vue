<template>
	<div id="app">

		<header-import></header-import>

		<!-- Dynamic content -->
		<main class="main">
	
		  <transition name="fade">
			<!-- <keep-alive> -->
				<router-view :key="$route.path"></router-view>
			<!-- </keep-alive> -->
			</transition>

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

	// .fade-enter-active,
	// .fade-leave-active {
	// 	transition: transform .5s ease-in-out, opacity .5s ease-in-out;
	// }

	// .fade-enter,
	// .fade-leave-to {
	// 	transform: translateY(-1rem);
	// 	opacity: 0;
	// }
</style>