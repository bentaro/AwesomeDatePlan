import Vue from 'vue'

const components = {
  MapPanel: () => import('../../components/MapPanel.vue' /* webpackChunkName: "components/map-panel" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
