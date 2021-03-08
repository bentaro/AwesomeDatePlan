<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-layout wrap justify-space-around>
        <!-- <v-flex v-for="cafe in $store.getters.cafeInfoList" :key="cafe.dist">
					<cafeCard :cafe="cafe" /> -->
          <cafeCard />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import cafeCard from "../components/cafeCard.vue";

export default {
	data() {
		return {
		}
	},
	components: {
		cafeCard,
	},
};
</script>
