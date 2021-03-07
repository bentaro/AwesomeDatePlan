<template>
<div>
	<h1 style="font-size:35px">デートプラン</h1>
	<v-container fluid>

		<v-row>
			<v-col cols="3">
				<timeTable />
			</v-col>
			<v-col cols="1"></v-col>

			<v-col cols="7">
				<MapPanel />
			</v-col>
			<v-col cols="1"></v-col>

		</v-row>

	</v-container>
</div>
</template>

<script>
import MapPanel from "../components/MapPanel";
import timeTable from "../components/timeTable";

export default {
	components: {
		MapPanel,
		timeTable,
	}
}
</script>