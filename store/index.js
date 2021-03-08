import API from '~/plugins/api_url';

export const state = () => ({
  cafeInfoList: [],
  restaurantInfoList: [],
  nightViewInfoList: [],

  spotName: '',
  cafeName: '',
  restaurantName: '',
  nightViewName: '',

  spotImageURL: '',
  cafeImageURL: '',
  restaurantImageURL: '',
  nightViewImageURL: '',

  spotURL: '',
  cafeURL: '',
  restaurantURL: '',
  nightViewURL: '',
});

export const getters = {
  cafeInfoList: state => state.cafeInfoList,
  restaurantInfoList: state => state.restaurantInfoList,
  nightViewInfoList: state => state.nightViewInfoList,

  spotName: state => state.spotName,
  cafeName: state => state.cafeName,
  restaurantName: state => state.restaurantName,
  nightViewName: state => state.nightViewName,

  spotImageURL: state => state.spotImageURL,
  cafeImageURL: state => state.cafeImageURL,
  restaurantImageURL: state => state.restaurantImageURL,
  nightViewImageURL: state => state.nightViewImageURL,

  spotURL: state => state.spotURL,
  cafeURL: state => state.cafeURL,
  restaurantURL: state => state.restaurantURL,
  nightViewURL: state => state.nightViewURL,
};

export const mutations = {
  setCafeInfoList(state, cafeInfoList) {
    state.cafeInfoList = cafeInfoList;
  },
  setRestaurantInfoList(state, restaurantInfoList) {
    state.restaurantInfoList = restaurantInfoList;
  },
  setNightViewInfoList(state, nightViewInfoList) {
    state.nightViewInfoList = nightViewInfoList;
  },

  setSpot(state, spotName) {
      state.spotName = spotName;
  },
  setCafe(state, cafeName) {
    state.cafeName = cafeName;
  },
  setRestaurant(state, restaurantName) {
    state.restaurantName = restaurantName;
  },
  setNightView(state, nightViewName) {
    state.nightViewName = nightViewName;
  },

  setSpotImageURL(state, spotImageURL) {
    state.spotImageURL = spotImageURL;
  },
  setCafeImageURL(state, cafeImageURL) {
    state.cafeImageURL = cafeImageURL;
  },
  setRestaurantImageURL(state, restaurantImageURL) {
    state.restaurantImageURL = restaurantImageURL;
  },
  setNightViewImageURL(state, nightViewImageURL) {
    state.nightViewImageURL = nightViewImageURL;
  },

  setSpotURL(state, spotURL) {
    state.spotURL = spotURL;
  },
  setCafeURL(state, cafeURL) {
    state.cafeURL = cafeURL;
  },
  setRestaurantURL(state, restaurantURL) {
    state.restaurantURL = restaurantURL;
  },
  setNightViewURL(state, nightViewURL) {
    state.nightViewURL = nightViewURL;
  },
};

export const actions = {
  getCafeInfoList({ commit }, spotName) {
		let url = API.GET_CAFE_LIST + '?spot=' + spotName;
		this.$axios.$get(url)
			.then(cafeInfoList => {
				console.log(cafeInfoList);
				commit("setCafeInfoList", cafeInfoList);
			})
			.catch(error => {
				console.log(error);
			})
	},
};