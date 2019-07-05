import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import actions from '../store/actions.js'
import getters from '../store/getters.js'
import mutations from '../store/mutations.js'
import state from '../store/state.js'

let store = new Vuex.Store({
    actions,getters,mutations,state
})
export default store;
