<template>
     <div class="list">
        <ul class="clearfix" id="proList">
            <li v-for="(item,index) of list" :key="index" >
       
        <!-- <router-link class="pro_img" :to="{name:'detail',params:{aid:index},query:{dataName:item.commonProductInfo.pname,id:item.commonProductInfo.pid}}" > -->
        <router-link class="pro_img" :to="{name:'detail',params:{aid:index},query:{dataName:item.commonProductInfo.pname,id:item.commonProductInfo.pid,src:item.commonProductInfo.imgPath}}" >
            <img :src="`${item.commonProductInfo.imgPath}`" width="90%" alt="Bottega Veneta 葆蝶家 Veneta红色编织小羊皮女士中号单肩包" />
        </router-link>
        <p class="product_n"><router-link to="/detail" >{{item.commonProductInfo.pname}}
        </router-link></p>


        <div class="product_p">
            <span class="red">￥{{item.commonProductInfo.actPrice}}</span>
        </div>
            </li>
     
        </ul> 
        <div class="load" id="dataload" style="display:block;">
        	请稍候，商品加载中<img src="../assets/images/loading.gif" />
        </div>
        <a class="gt" href="#"></a>
    </div>
        

    
</template>

<script>
import * as types from '../store/types.js'
import {mapGetters} from 'vuex'
export default {
    mounted(){
     
        this.$store.dispatch(types.UPDATE_LIST)
    },
    computed:mapGetters(['list'])
}
</script>

<style scoped>
    .list {margin-top:10px;}
    .match_list {margin-top:10px;}
    .list li {width:50%; text-align:center; font-size:14px; float:left; position:relative;}
    .match_list li {width:50%; text-align:center; font-size:14px; float:left; position:relative;}
    .list .pro_img {display:block; position:relative;}
    .match_pl a {display:block; padding:5px 0;}

    .product_n {height:22px; width:90%; margin:0 auto; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}
    .product_p {height:45px; width:80%; margin:0 auto;}
    /* .gt {width:32px; height:31px; position:fixed; bottom:20px; right:20px; z-index:20; background:url(../images/gt.png) no-repeat;} */
    #proList{margin-top:45px}
    .load {border:1px solid #ccc; border-radius:3px; text-align:center; padding:5px 0; background:#f4f4f4;}
    .load img {vertical-align:middle; margin-left:3px;}
    .gt {width:32px; height:31px; position:fixed; bottom:20px; right:20px; z-index:20; background:url(../assets/images/gt.png) no-repeat;}

</style>


