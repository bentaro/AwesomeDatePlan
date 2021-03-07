<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

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

    <v-card-title>店舗情報</v-card-title>

    <v-card-text>
      <v-chip-group
        column
      >
        <v-chip>営業時間: 11:00~20:00</v-chip>
        <v-chip>休業日: 年中無休（NEWoMan休業日に準ずる）</v-chip>

      </v-chip-group>

      <!-- <v-if>を忘れない -->
      <div>ホームページ</div><a href="https://www.toraya-group.co.jp/toraya-cafe/shops/yokohama/">https://www.toraya-group.co.jp/toraya-cafe/shops/yokohama/</a>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="orange lighten-3"
        @click="reserve"
      >
        TimeTableに追加
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "cafeCard",
  props: ["cafe"],

  methods: {
    confirm() {

    }
  }
};
</script>