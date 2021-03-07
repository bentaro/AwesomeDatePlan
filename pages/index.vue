<template>
<div>
    <v-app :style="{ background: $vuetify.theme.themes.light.background }">
        <div class="my-auto">
            <v-card class="mx-lg-15 tile" color="white" align="center">
                <v-card-title style="font-size:25px;">
                    次のデートはどこへ行きますか？
                </v-card-title>
                <v-text-field
                placeholder="Dense & Rounded"
                filled
                rounded
                dense
                v-model="spotName"
                label="次のデートスポット">
                </v-text-field>
                <v-card-actions>
                  <v-spacer />
                  <v-btn @click.native="searchCafe" to="/plan" depressed>
                    検索
                  </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </v-app>
</div>
</template>

<script>
export default {
    data() {
        return {
            spotName: "",
        };
    },
    components: {
    },
    methods: {
			searchCafe: function() {
				this.$store.commit("setSpot", this.spotName);
				this.$store.dispatch("getCafeInfoList", this.spotName)
					.then(_ => {
						this.$router.push("/plan");
					})
					.catch(error => {
						console.log(error);
					})
			},
    }
}
</script>
