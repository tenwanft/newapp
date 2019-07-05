<template>
    <div class="details">
        <img :src="src" />
        <div class="product_pro">
            <del>￥{{detail.productPromo.jxPrice}}</del>                    <span class="red">￥{{detail.productPromo.price}}</span>
            <div class="clear"></div>
        </div>
                                
        <div class="pro_btn clearfix">
            <button type="button" class="login_btn_n float_l" name="btn-shopping" value="1" onclick="location.href='order_confirm.html'" style="width:49%; background:#de166c;">即刻购买</button>
            <!-- <button type="button" class="login_btn_n float_r" name="btn-shopping" value="0" onclick="location.href='cart.html'" style="width:49%;">加入购物袋</button> -->
            <router-link tag="button" type="button" class="login_btn_n float_r" name="btn-shopping" value="0" to="/buycar" style="width:49%;">加入购物袋</router-link>
        </div>

        <div class="share clearfix">
            	<div class="share_btns float_l">
                    <i>分享：</i>
                    <span>
                        <a title="分享到新浪微博" href="javascript:sina(); void(0);" onclick="ga('send', 'event','MProductDetail', 'sinaShare','26909');"  class="ico_sina_s"></a>
                        <div class="clear"></div>
                    </span>
                </div>
                <div class="addsc float_r">
                	<a href="javascript:void(0);" onClick="addSC();ga('send', 'event','MProductDetail', 'addFav','26909');"><i>加入收藏</i></a>
                </div>
                <div class="addsc_y float_r" style="display:none"><i>已收藏</i></div>
                            </div>
            <div class="pro_true">
                <p>美西时尚<span class="pro_true_font">100%</span>正品保证，<span class="pro_true_font">7</span>日退换货服务。<br>订购热线：400-600-6618</p>
            </div>
            <div class="detail1">
            	<p class="xq">商品信息</p>
                <div class="detail1_n">
                    <table width="100%">
                        <colgroup>
                            <col width="60px" />
                        </colgroup>
                        <tr><th>品　　牌：</th><td><a href="/brands/0-4-0-0-0-10-1-0.html" title="Bottega Veneta 葆蝶家" target="_blank" style="color:#8e0c3a;">{{dataName}}</a></td></tr>
                        <tr><th>活　　动：</th><td>{{detail.clubDiscountTip}}</td></tr>
                        <tr><th>美西编号：</th><td>{{detail.productPromo.endTimeLen}}</td></tr>                        <tr><th>货　　号：</th><td>115653 V0016 6577</td></tr>                        <tr><th>尺　　寸：</th><td>宽40cm，高26cm，厚3cm，肩带高度10cm</td></tr>                        <tr><th>材　　质：</th><td>羊皮</td></tr>                        <tr><th>颜　　色：</th><td>红色</td></tr>                        <tr><th>产　　地：</th><td>意大利</td></tr>                        <tr><th>商品内部：</th><td>驼色麂皮内里，一个拉链袋，内附一面皮质方镜</td></tr>                        <tr><th>商品外部：</th><td>红色小羊皮材质，经典编织设计，袋口拉链闭合，编织皮质边饰，一根短肩带</td></tr>                                            </table>
                </div>
            </div>
            
            <div class="detail1">
            	<p class="xq">了解品牌</p>
                <div class="detail1_n">
                    <p>{{detail.productPromo.advWords}}</p>
                </div>
            </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import * as types from '../store/types.js'
export default {
    name:'Detail',
    // data(){
    //     return {msg:''}
    // },
    computed:mapGetters(['detail']),
    props:['id','dataName','src'],
    mounted(){
        let dataName = this.dataName;
      
        this.$store.dispatch(types.UPDATE_DETAIL,this.id)
    }
}
</script>

<style scoped>
    .share {padding:5px; border-top:1px solid #ccc; border-bottom:1px solid #ccc; margin:10px 0 10px 0;}
    .share_match {padding:5px; border-top:1px solid #ccc; margin:10px 0 0px 0;}
    .share_btns a, .share_btns i {float:left; display:inline; margin:0 3px;}

    .product_pro {width:250px; margin:0 auto;}
    .product_pro del {width:50%; color:#ccc; display:block; float:left;}
    .product_pro span {width:50%; display:block; float:left;}
    .detail1 {text-align:left; padding-top:10px; font-size:12px;}
    .xq {padding:3px 5px; height:18px; background:#eee;}
    .detail1_n {padding:5px;}
    .detail1_n td, .detail_n th {vertical-align:top;}
    .goC {padding-top:15px;}
    .pro_true { font-size: 12px; text-align: left;}
    .pro_true_font {color: #8E0C3A;}
    .login_btn_n {width:100%; height:40px; margin:15px 0 10px 0; background:#8e0c3a; border-radius:3px; color:#fff; text-shadow:1px 1px 2px #333; font-size:14px;}

    /* .details{margin-top:45px;} */
</style>

