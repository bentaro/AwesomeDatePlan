<template>
<div>
    <div>
        <div align="center">
            <div style="font-size:30px;">
                次のデートはどこへ行きますか？
            </div>
            <v-form>
                <v-container>
                    <v-row justify="center" align-content="center">
                        <v-col
                        cols="12"
                        sm="6"
                        md="4">
                            <v-text-field
                            label="次のデートの目的地"
                            placeholder="Dense & Rounded"
                            filled
                            rounded
                            dense
                            v-model="inputText">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-btn @click="search" dense filled depressed>
                            検索
                        </v-btn>
                    </v-row>
                </v-container>
            </v-form>
        </div>
    </div>
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
