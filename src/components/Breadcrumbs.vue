<template>
	<div>
		<ul class="breadcrumb">
			<li v-for="route in breadcrumbsList">
				<router-link :to="{name: route.name}">
					{{ route.value }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	 export default {
	 	name: "Breadcrumb",
	 	data() {
	 		return {
	 			breadcrumbsList: []
	 		}
	 	},
	 	mounted() {
	 		this.CreateBreadCrump()
	 	},
	 	methods: {
	 		CreateBreadCrump() {
				 debugger;
	 			// console.log(this.$session.get('access_token'))
	 			var breadcrumbsstring = this.$breadcrumbs[0].meta['breadcrumb']
	 			var crump = breadcrumbsstring.split('/')
	 			for (var i = 0; i < crump.length; i++) {
	 				var key = crump[i]
	 				key = key.replace(/ /g, '')
	 				key = key.toLowerCase()
	 				if (key === 'home') {
	 					key = 'dashboard'
	 				}
	 				var json = {
	 					'name': key,
	 					'value': crump[i]
	 				}
	 				this.breadcrumbsList.push(json)
	 			}
	 		}
	 	}
	 }
</script>