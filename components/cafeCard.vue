<template>
  <v-card
    class="mx-auto my-12"
    max-width="1200"
    hover
    href="https://www.toraya-group.co.jp/toraya-cafe/shops/yokohama/"
  >
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="4" lg="3">
          <v-img
            aspect-ratio="1"
            :src="cafe.picture"
          />
        </v-col>

        <v-col cols="12" sm="8" lg="9">

          <v-card-title>Cafe Badilico</v-card-title>
          <v-card-subtitle>落ち着いたカフェ</v-card-subtitle>

          <v-card-text>
            <div class="my-4 subtitle-1">
              <v-icon>mdi-antenna</v-icon> 神奈川県横浜市青葉区1-11-11
            </div>
            <div class="my-4 subtitle-1">
              横浜駅から徒歩2分<br>赤レンガから600m
            </div>

            <div>トラヤカフェは2003年に誕生し、2016年からは、“あん”を気軽に楽しんでいただきたいという想いで、“あんのある生活を”をコンセプトにした「トラヤカフェ・あんスタンド」を展開。</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
        </v-col>
      </v-row>

      <v-card-title>店舗情報</v-card-title>

      <v-card-text>
        <v-chip-group
          column
        >
          <v-chip>営業時間: 11:00~20:00</v-chip>
          <v-chip>休業日: 年中無休（NEWoMan休業日に準ずる）</v-chip>

        </v-chip-group>

      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="orange lighten-3"
          @click.native="addTimeTable"
          to="/mapPlan"
        >
          TimeTableに追加
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "cafeCard",
  props: ["cafe"],
  methods: {
    addTimeTable() {
      this.$store.commit("setCafe", this.cafe.name);
      this.$store.commit("setCafeImageURL", this.cafe.picture);
      this.$store.commit("setCafeURL", this.cafe.cafeURL); //TODO: modify
      this.$store.commit("addDstList", {name: this.cafe.name, position: {lng: 139.633435, lat: 35.453932}})

      // TODO: delete
      this.$store.commit("setRestaurant", "大徳壽");
      this.$store.commit("setRestaurantImageURL", "https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/143525/143525839.jpg?token=4ecc3fa&api=v2");
      this.$store.commit("setRestaurantURL", "http://daitokujyu.weblike.jp/wp/"); //TODO: modify
      this.$store.commit("addDstList", {name: "大徳壽", position: {lng: 139.634223, lat: 35.443802}});

      // TODO: delete
      this.$store.commit("setNightView", "港の見える丘公園");
      this.$store.commit("setNightViewImageURL", "https://ext.yakei.jp/photo/pc/minato1.jpg");
      this.$store.commit("setNightViewURL", "https://yakei.jp/japan/spot.php?i=minato"); //TODO: modify
		  this.$store.commit("addDstList", {name: "港の見える丘公園", position: {lng: 139.654746, lat: 35.440592}});
    }
  }
};
</script>