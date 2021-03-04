
<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <GmapMap
          map-type-id="roadmap"
          :center="maplocation"
          :zoom="zoom"
          :style="styleMap"
          :options="mapOptions"
        >
        </GmapMap>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      maplocation: { lng: 139.558, lat: 35.4895 },
      zoom: 10,
      styleMap: {
        width: '100%',
        height: '400px',
      },
      mapOptions: {
        streetViewControl: false,
        styles: [],
      },
    }
  },
}
</script>