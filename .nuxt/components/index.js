export { default as MapPanel } from '../../components/MapPanel.vue'

export const LazyMapPanel = import('../../components/MapPanel.vue' /* webpackChunkName: "components/map-panel" */).then(c => c.default || c)
