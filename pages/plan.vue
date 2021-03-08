<template>
  <div>
	<v-container fluid>
			<v-row>
				<v-col cols="12" sm="6" lg="3">
					<timeTable />
				</v-col>

				<v-col cols="12" sm="6" lg="9">
					<v-card class="mx-auto" color="orange accent-1">
						<v-card-title style="font-size:30px">おすすめのカフェ</v-card-title>

							<v-row>
								<div v-for="cafe in $store.CafeInfoList" :key="cafe.cafe_id">
									<v-col
										v-for="n in 9"
										:key="n"
										class="d-flex child-flex"
										cols="12"
										sm="6"
										lg="4"

									>
										<v-img
											:src="cafe.pictuers"
											aspect-ratio="1"
											class="grey lighten-2"
										>
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
										</v-img>
									</v-col>
								</div>
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
