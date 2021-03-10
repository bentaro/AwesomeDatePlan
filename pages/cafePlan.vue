<template>
  <div>
	  <v-app>
		<v-container>
			<v-row>
				<v-col cols="12" sm="6" lg="4" xl="3">
					<timeTable />
				</v-col>

				<v-col cols="12" sm="6" lg="8" xl="9">
					<v-card class="mx-auto" color="orange accent-1">
						<v-card-title style="font-size:30px">おすすめのカフェ</v-card-title>

							<v-card-actions>
								<v-spacer />
								<v-btn
									color="secondary"
									elevation="5"
									large
									raised
									rounded
									to="/cafeList"
								>Details</v-btn>
							</v-card-actions>

							<v-row>
								<v-col
									v-for="cafe in $store.getters.cafeInfoList"
									:key="cafe.cafe_id"
									class="d-flex child-flex"
									cols="12"
									sm="6"
									lg="4"
								>
									<img :src="cafe.picture" aspect-ratio="1" class="grey lighten-2" />
										<template v-slot:placeholder>
											<v-row
												class="fill-height ma-0"
												align="center"
												justify="center"
											>
												<v-progress-circular
													indeterminate
													color="grey lighten-5"
												></v-progress-circular>
											</v-row>
										</template>
								</v-col>
							</v-row>

							<v-card-actions>
								<v-spacer />
								<v-btn
									color="secondary"
									elevation="5"
									large
									raised
									rounded
									to="/cafeList"
								>Details</v-btn>
							</v-card-actions>

					</v-card>
				</v-col>
			</v-row>
		</v-container>
	  </v-app>
  </div>
</template>

<script>
import timeTable from "../components/timeTable";

export default {
	data() {
		return {
		}
	},
	components: {
		timeTable,
	},
};
</script>
