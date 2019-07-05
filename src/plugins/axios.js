import Vue from 'vue';
import axios from 'axios'

Vue.prototype.$axios=axios
window.axios=axios
export default axios