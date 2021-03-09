<template>
	<v-card
	>
			<v-card
			dark
			flat
			>
			<v-btn
					absolute
					bottom
					color="pink"
					right
					fab
			>
					<v-icon>mdi-plus</v-icon>
			</v-btn>

			<v-card-title class="pa-2 purple lighten-3">
					<h3 class="title font-weight-light text-center grow">
					Time table
					</h3>
			</v-card-title>
			<v-img
					src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
					gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
			>
					<v-container class="fill-height">
					<v-row align="center">
							<strong class="display-4 font-weight-regular mr-6">8</strong>
							<v-row justify="end">
							<div class="headline font-weight-light">
									Monday
							</div>
							<div class="text-uppercase font-weight-light">
									February 2015
							</div>
							</v-row>
					</v-row>
					</v-container>
			</v-img>
			</v-card>

			<v-card-text class="py-0">
			<v-timeline
					align-top
					dense
			>
					<v-timeline-item
					color="pink"
					small
					>
					<v-row class="pt-1">
							<v-col cols="3">
							<strong>1-3pm</strong>
							</v-col>
							<v-col>
							<a href="https://www.jalan.net/kankou/spt_14104ae2180146722/"><strong>{{$store.getters.spotName || "undecided"}}</strong></a>
							<div class="caption">
								main spot
							</div>
							<v-avatar>
								<v-img
								:src="$store.getters.spotImageURL" />
							</v-avatar>
							</v-col>
					</v-row>
					</v-timeline-item>

					<v-timeline-item
					color="teal lighten-3"
					small
					>
					<v-row class="pt-1">
							<v-col cols="3">
							<strong>4-6pm</strong>
							</v-col>
							<v-col>
							<div v-if="$store.getters.cafeURL==''">
								<strong>{{this.$store.getters.cafeName || "undecided"}}</strong>
							</div>
							<div v-else>
								<a :href="$store.getters.cafeURL"><strong>{{$store.getters.cafeName || "undecided"}}</strong></a>
							</div>
							<div class="caption mb-2">
								cafe
							</div>
							<v-avatar>
								<v-img
								:src="$store.getters.cafeImageURL"
								></v-img>
							</v-avatar>
							</v-col>
					</v-row>
					</v-timeline-item>

					<v-timeline-item
					color="pink"
					small
					>
					<v-row class="pt-1">
							<v-col cols="3">
							<strong>7-9pm</strong>
							</v-col>
							<v-col>
							<div v-if="$store.getters.restaurantURL==''">
								<strong>{{this.$store.getters.restaurantName || "undecided"}}</strong>
							</div>
							<div v-else>
								<a :href="$store.getters.restaurantURL"><strong>{{$store.getters.restaurantName || "undecided"}}</strong></a>
							</div>
							<div class="caption mb-2">
									dinner
							</div>
							<v-avatar>
								<v-img
								:src="$store.getters.restaurantImageURL"
								></v-img>
							</v-avatar>
							</v-col>
					</v-row>
					</v-timeline-item>

					<v-timeline-item
					color="teal lighten-3"
					small
					>
					<v-row class="pt-1">
							<v-col cols="3">
							<strong>10pm-</strong>
							</v-col>
							<v-col>
							<div v-if="$store.getters.nightViewURL==''">
								<strong>{{this.$store.getters.nightViewName || "undecided"}}</strong>
							</div>
							<div v-else>
								<a :href="$store.getters.nightViewURL"><strong>{{$store.getters.nightViewName || "undecided"}}</strong></a>
							</div>
							<div class="caption">
									night view
							</div>
							<v-avatar>
								<v-img
								:src="$store.getters.nightViewImageURL"
								></v-img>
							</v-avatar>
							</v-col>
					</v-row>
					</v-timeline-item>
			</v-timeline>
			</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "timeTable",

	data() {
		return {
			spot: "",
			cafe: "",
			dinner: "",
			nightView: "",
		};
	},
	created() {
		this.spot = this.$store.getters.spotName;
	}
}
</script>