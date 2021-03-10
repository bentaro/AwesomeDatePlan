<template>
<div>
    <v-app :style="{ background: $vuetify.theme.themes.light.background }">
        <div class="my-auto">
            <v-card class="mx-auto tile" color="white" align="center" max-width="750">
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
            index: 0,
        };
    },

    // TODO: delete
    created() {
        this.$store.commit("setSpotImageURL", "https://cdn.jalan.jp/jalan/img/1/kuchikomi/0851/KL/8e0f9_0000851568_2.jpg");
        this.$store.commit("addDstList", {name: "赤レンガ倉庫", position: {lng: 139.642894, lat: 35.452594}});
    },
    methods: {
        searchCafe: function() {
            this.$store.commit("setSpot", this.spotName);
            this.$store.dispatch("getCafeInfoList", this.spotName)
                .then(_ => {
                    this.$router.push("/cafePlan");
                })
                .catch(error => {
                    console.log(error);
                })
        },
    }
}
</script>