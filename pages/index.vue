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
                v-model="inputText"
                label="次のデートスポット">
                </v-text-field>
                <v-card-actions>
                  <v-spacer />
                  <v-btn @click.native="search" depressed>
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
            inputText: "",
        };
    },
    components: {

    },
    methods: {
        search: function() {
            let url = "";
            console.log(this.inputText);
            /* this.$axios.$get(url)
            .then(res => {
                console.log(res);
                this.$router.push("/");
            })
            .catch(error => {
                console.log(error);
            }); */

            // DELETE
            this.$router.push("/");
        }
    }
}
</script>
