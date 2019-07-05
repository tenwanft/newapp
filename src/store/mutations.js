import * as types from './types';

export default {
  [types.VIEW_NAV] : (state,payload) => state.bNav = payload ,
  [types.VIEW_FOOT] : (state,payload) => state.bFoot = payload ,
//   [types.VIEW_LOADING] : (state,payload) => state.bLoading = payload ,
  [types.UPDATE_HOME] : (state,payload) => state.home = payload ,
  [types.UPDATE_LIST] : (state,payload) => state.list= payload ,
  [types.UPDATE_FASHION] : (state,payload) => state.fashion = payload ,
  [types.UPDATE_BANNER] : (state,payload) => state.banner = payload ,
  [types.UPDATE_USER] : (state,payload) => state.user = payload ,
  [types.UPDATE_DETAIL] : (state,payload) => state.detail = payload ,

  [types.ADD_ITEM]:(state,payload)=>{
    state.buycar=payload;  //
  },
  [types.CHANGE_ITEM]:(state,payload)=>{
    state.buycar=payload; //替换的是actions传递过来的新值
  },
  [types.REMOVE_ITEM]:(state,payload)=>{
    state.buycar=payload;
  },
  [types.CLEAR_BUYCAR]:(state,payload)=>{
    state.buycar=payload;
  },
}