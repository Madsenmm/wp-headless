<template>
	<div class="widget">
		<div class="widget__inner">
			<h4 class="widget__title"><slot name="title">{{this.type}}</slot></h4>

			<div class="widget__content">
				<!-- <slot name="content">Placeholder content</slot> -->
		
				<ul :class="this.filterList" v-if="this.type == 'farver'">
					<button :class="[filterClass]" v-for="item in terms" :key="item.id">{{item.name}}</button>
				</ul>

				<div :class="this.filterList" v-else-if="this.type == 'stoerrelser'">
					<button :class="[filterClass]" v-for="item in terms" :key="item.id">{{item.name}}</button>
				</div>

				<div v-else>
					Nothing to see
				</div>
			
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Widget',
		props: {
			type: String,
			id: Number,
		},

		data() {
			return {
				filterList: 'filter__list',
				filterClass: 'filter--btn',
				terms: [],
			}
		},

		mounted() {
			// const args = {
			// 	name: this.type.toUpperCase(),
			// 	slug: `pa_${this.type}`,
			// };

			this.$WC.get(`products/attributes/${this.id}/terms`).then((response) => {
				var json = response.data;
				this.terms = json;
			})
		}

	}
</script>



<style lang="scss" scoped>
	.widget {
		& + & {
			margin-top: 3rem;
		}

		&__inner {
			background-color: var(--white);
			color: var(--black);
		}

		&__title {
			text-align: center;
			border-bottom: .1rem solid var(--grey-light);
			padding: 1.2rem 1.5rem;
			margin: 0 !important;
		}

		&__content {
			padding: 1.7rem 1.5rem;
		}
	}

	.filter {

		&__list {
			display: flex;
			flex-wrap: wrap;
		}

		&--btn {
			width: 5rem;
			height: 5rem;
			margin-top: .5rem;
			margin-right: .5rem;
			color: var(--grey-light);
			background-color: var(--white);
			border: .1rem solid var(--grey-border);
			outline: 0;
			cursor: pointer;
			font-size: .9em;
			line-height: 1;
			padding: .5rem;
			flex-grow: 1;
			text-align: center;
			transition: all .4s ease;

			&.active,
			&:hover {
				border-color: var(--black);
				color: var(--black);
			}
		}
	}
</style>