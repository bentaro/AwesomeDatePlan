<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-card>
        <GmapMap
          map-type-id="roadmap"
          :center="maplocation"
          :zoom="zoom"
          :style="styleMap"
          :options="mapOptions"
        >
          <GmapMarker
          :key="index"
          v-for="(marker, index) in $store.getters.dstList"
          :position="marker.position"
          :clickable="true"
          :draggable="false"
          @click="toggleInfoWindow(marker, index)"
          />
          <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen=false">
          <div v-html="infoContent"></div>
          </GmapInfoWindow>

        </GmapMap>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: "MapPanel",
  components: {
  },
  data() {
    return {
      maplocation: {lng: 139.642894, lat: 35.452594},
      zoom: 15,
      infoContent: '',
      infoWinOpen: false,
      currentMidx: null,
      styleMap: {
        width: '100%',
        height: '600px',
      },
      mapOptions: {
        streetViewControl: false,
        styles: [],
      },
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
    }
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      console.log(this.infoWindowPos);
      this.infoContent = this.getInfoWindowContent(marker);
      console.log(this.infoContent);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent: function (marker) {
      return (
      `<div class="">
        <div>
          <div>
            <div class="m-2"><span style="font-weight: bold;">目的地: </span>
              ${marker.name}
            </div>
          </div>
        </div>
      </div>`);
    },
  }
}
</script>