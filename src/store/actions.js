import axios from 'axios'
import {
    VIEW_NAV,
    VIEW_FOOT,
    
    UPDATE_HOME,
     UPDATE_LIST,
    
    UPDATE_DETAIL,
    UPDATE_USER,
    UPDATE_BANNER,

    ADD_ITEM,
    CHANGE_ITEM,
    REMOVE_ITEM,
    CLEAR_BUYCAR,   
   
} from './types'

export default {
    [VIEW_NAV]:({state,commit},payload)=>{commit(VIEW_NAV,payload)},
    [VIEW_FOOT]:({state,commit},payload)=>commit(VIEW_NAV,payload),
    [UPDATE_HOME]:async({state,commit},payload)=>{
        let res = await axios({url:'m_v1/statics/getzx.htm'})
        console.log(res)
    },
    [UPDATE_BANNER]:async({state,commit},payload)=>{
        let res = await axios({url:'m_v1/statics/getzx.htm'})
        // console.log(res)
    },
    [UPDATE_LIST]:async({state,commit},payload)=>{
        let res = await axios({url:'/m_v1/statics/getzx.htm',params:{topicId:1165,pageNum:3}
    })
    // console.log(res.data.promoList)
   
        commit(UPDATE_LIST,res.data.promoList)
    },
    [UPDATE_DETAIL]:async({state,commit},payload)=>{
        let res = await axios({url:`/m_v1/goods/detailPromo/${payload}`})
        console.log(res.data)
        commit(UPDATE_DETAIL,res.data)
    },
    [UPDATE_USER]:({state,commit},{username,password})=>{
        return axios({
            url:'/api/login',
            method:'post',
            data:{username,password,save:false}
        }).then(res=>{
            console.log(res.data)
            commit(UPDATE_USER,res.data)
            localStorage.setItem('newsapp_user',JSON.stringify(res.data))//同步一份locastorage
            return res.data
        })
    }
}