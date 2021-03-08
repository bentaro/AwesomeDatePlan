<template>
<div>
    <v-app :style="{ background: $vuetify.theme.themes.light.background }">
        <div>
            <v-row
            align="center" justify="center" align-content="center">
                <v-col cols="12" lg="4"></v-col>
                <v-col cols="12" lg="4">
                    <v-img align="center" :aspect-ratio="4/3" src="/spots/pic_hokkaido.jpg" />

                    <!-- <v-img align="center" :aspect-ratio="4/3" src="/spots/pic_hokkaido.jpg"  class="slideshow" />
                    <v-img align="center" :aspect-ratio="4/3" src="/spots/pic_tokyo.jpg"  class="slideshow fadeout" />
                    <v-img align="center" :aspect-ratio="4/3" src="/spots/pic_kanagawa.jpg"  class="slideshow fadeout" />
                    <v-img align="center" :aspect-ratio="4/3" src="/spots/pic_saitama.jpg"  class="slideshow fadeout" />
                    <v-img align="center" :aspect-ratio="4/3" src="/spots/pic_aichi.jpg"  class="slideshow fadeout" />
                    <v-img align="center" :aspect-ratio="4/3" src="/spots/pic_kyoto.jpg"  class="slideshow fadeout" />
                    <v-img align="center" :aspect-ratio="4/3" src="/spots/pic_osaka.jpg"  class="slideshow fadeout" />
                    <v-img align="center" :aspect-ratio="4/3" src="/spots/pic_fukuoka.jpg"  class="slideshow fadeout" />
                    <v-img align="center" :aspect-ratio="4/3" src="/spots/pic_okinawa.jpg"  class="slideshow fadeout" /> -->

                    <v-card>
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
                        <v-btn @click="searchCafe" depressed>
                            検索
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4"></v-col>
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
    /* mounted() {
        const images = document.getElementsByClassName('slideshow');
        this.slideshow(images);
        setInterval(() => {
            this.index = this.index < images.length - 1 ? this.index + 1 : 0;
                this.slideshow(images);
        }, 5000);
    }, */

    created() {
        this.$store.commit("setSpotImageURL", "https://cdn.jalan.jp/jalan/img/1/kuchikomi/0851/KL/8e0f9_0000851568_2.jpg");
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
        /* slideshow(images) {
            const current = images[this.index];
            const prev = images[this.index - 1] ? images[this.index - 1] : images[images.length - 1];
            current.classList.add('fadein');
            current.classList.remove('fadeout');
            prev.classList.remove('fadein');
            prev.classList.add('fadeout');
        } */
    }
}
</script>

<style>
/* .fadein {
  opacity: 1;
  transition: opacity 0.5s;
}

.fadeout {
  opacity: 0;
  transition: opacity 0.5s;
}

.slideshow {
  position: absolute;
} */

</style>