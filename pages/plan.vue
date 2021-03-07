<template>
  <div>
	<v-container fluid>
			<v-row>
				<v-col cols="3">
					<timeTable />
				</v-col>

				<v-col cols="9">
					<v-card class="mx-auto" color="orange accent-1">
						<v-card-title style="font-size:30px">おすすめのカフェ</v-card-title>
						<v-container fluid>
							<v-row>
								<div v-for="url in this.cafeURL" :key=url>
									<v-col cols="6">
										<img :src=url />
									</v-col>
								</div>
							</v-row>
						</v-container>
					</v-card>
				</v-col>
			</v-row>
	</v-container>
  </div>
</template>

<script>
import timeTable from "../components/timeTable";

export default {
	data() {
		return {
			cafeURL: ["https://haccola.jp/wp/wp-content/uploads/640_Koujichu.jpg",
			"https://haccola.jp/wp/wp-content/uploads/640_Koujichu.jpg",
			"https://haccola.jp/wp/wp-content/uploads/640_Koujichu.jpg",
			"https://haccola.jp/wp/wp-content/uploads/640_Koujichu.jpg",
			"https://haccola.jp/wp/wp-content/uploads/640_Koujichu.jpg",
			"https://haccola.jp/wp/wp-content/uploads/640_Koujichu.jpg",
			"https://haccola.jp/wp/wp-content/uploads/640_Koujichu.jpg",
			"https://haccola.jp/wp/wp-content/uploads/640_Koujichu.jpg",
			"https://haccola.jp/wp/wp-content/uploads/640_Koujichu.jpg",]
		}
	},
	components: {
		timeTable,
	},
};
</script>
