<template>
	<aside class="sidebar">
		<h2>Sidebar</h2>

		<div class="filter js-filter">
			<div v-for="(item, index) in widgets" :key="item.id">
				<h3>{{ item.name }}</h3>
				
				<ul v-if="item.terms.length">
					<li v-for="(term, index) in item.terms" :key="term.id">{{term.name}}</li>
				</ul>

			</div>
		</div>
	</aside>
</template>

<script>
	export default {
		name: 'Sidebar',
		data() {
			return {
				widgets: [],
			}
		},
		mounted() {

			this.$WC.get("products/attributes", {})
				.then((response) => {
					var data = response.data;
					var x = -1;

					for (var i = 0; i < data.length; i++) {
						var attribute = data[i];

						this.widgets.push({
							name: attribute.name,
							id: attribute.id,
						})

						this.$WC.get(`products/attributes/${id}/terms`).then((r) => {
							x++; // I thinks this is gonna break if terms don't match
							this.widgets[x].terms = r.data;
						});

					}
				})
			});

		},
	}
</script>