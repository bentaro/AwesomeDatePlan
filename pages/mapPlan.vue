<template>
<div>
	<h1>デートプラン</h1>
	<v-container fluid>

		<v-row>
			<v-col cols="4">
				<timeTable />
			</v-col>
			<v-col cols="1"></v-col>

			<v-col cols="6">
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
	},
}
</script>

<style>
h1 {
  padding: 0.5em;/*文字周りの余白*/
  color: #494949;/*文字色*/
  background: #fffaf4;/*背景色*/
  border-left: solid 5px #ffaf58;/*左線（実線 太さ 色）*/
}
</style>