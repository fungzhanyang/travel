import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: '西安'
	},
	actions: {
		updateCity (ctx, city) {
			ctx.commit('updateCity', city)
		}
	},
	mutations: {
		updateCity (state, city) {
			state.city = city
		}
	},
})