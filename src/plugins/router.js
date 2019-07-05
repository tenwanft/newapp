import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import User from '../pages/User.vue'
import Reg from '../pages/Reg.vue'
import Login from '../pages/Login.vue'
import Detail from '../pages/Detail.vue'
import List from '../pages/List.vue'
import Buycar from '../pages/Buycar.vue'
import Buycar_data from '../pages/Buycar_data.vue'
import ErrorPage from '../components/ErrorPage.vue'

let routes=[
    {path:'/home',component:Home},
    {path:'/list',component:List},
    {path:'/buycar',component:Buycar},
    {path:'/buycar-data',component:Buycar_data},
    {path:'/user',component:User},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/detail/:aid',name:'detail',component:Detail,props:(route)=>({id:route.query.id,dataName:route.query.dataName,src:route.query.src})},
    // {path:'/detail',component:Detail},
    
    {path:'*',component:ErrorPage},
    {path:'/',redirect:'/home'},
]

let router = new VueRouter({
    routes
})
export default router