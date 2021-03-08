<template>
<div>
    <v-app :style="{ background: $vuetify.theme.themes.light.background }">
        <div>
            <v-row>
                <v-col cols="3"></v-col>
                <v-col cols="6">
                    <img src="/spots/pic_hokkaido.jpg" class="slideshow">
                    <img src="/spots/pic_tokyo.jpg" class="slideshow fadeout">
                    <img src="/spots/pic_kanagawa.jpg" class="slideshow fadeout">
                    <img src="/spots/pic_saitama.jpg" class="slideshow fadeout">
                    <img src="/spots/pic_aichi.jpg" class="slideshow fadeout">
                    <img src="/spots/pic_kyoto.jpg" class="slideshow fadeout">
                    <img src="/spots/pic_osaka.jpg" class="slideshow fadeout">
                    <img src="/spots/pic_fukuoka.jpg" class="slideshow fadeout">
                    <img src="/spots/pic_okinawa.jpg" class="slideshow fadeout">
                </v-col>
                <v-col cols="3"></v-col>
            </v-row>
        </div>
        <div>
            <v-row>
                <v-col cols="3"></v-col>
                <v-col cols="6">
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
                </v-col>
                <v-col cols="3"></v-col>
            </v-row>
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
    components: {
    },
    mounted() {
        const images = document.getElementsByClassName('slideshow');
        this.slideshow(images);
        setInterval(() => {
            this.index = this.index < images.length - 1 ? this.index + 1 : 0;
                this.slideshow(images);
        }, 5000);
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
        slideshow(images) {
            const current = images[this.index];
            const prev = images[this.index - 1] ? images[this.index - 1] : images[images.length - 1];
            current.classList.add('fadein');
            current.classList.remove('fadeout');
            prev.classList.remove('fadein');
            prev.classList.add('fadeout');
        }
    }
}
</script>

<style>
.fadein {
  opacity: 1;
  transition: opacity 0.5s;
}

.fadeout {
  opacity: 0;
  transition: opacity 0.5s;
}

.slideshow {
  position: absolute;
}

</style>