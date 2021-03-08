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
});

export const getters = {
  cafeInfoList: state => state.cafeInfoList,
  spotName: state => state.spotName,
  cafeName: state => state.cafeName,
  restaurantName: state => state.restaurantName,
  nightViewName: state => state.nightViewName,
};

export const mutations = {
  setCafeInfoList(state, cafeInfoList) {
    state.cafeInfoList = cafeInfoList;
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
  }
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