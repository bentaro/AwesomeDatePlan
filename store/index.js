import API from '~/plugins/api_url';

export const state = () => ({
  cafeInfoList: [],
  spotName: '',
});

export const getters = {
  cafeInfoList: state => state.cafeInfoList,
  spotName: state => state.spotName,
};

export const mutations = {
  setCafeInfoList(state, cafeInfoList) {
    state.cafeInfoList = cafeInfoList;
  },
  setSpot(state, spotName) {
      state.spotName = spotName;
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