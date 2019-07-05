<template>
    <div class="nav">
        	<div class="navTip">
            	<div class="float_l">时尚导航</div>
                <div class="float_r">FASHION</div>
                <div class="clear"></div>
            </div>
            <div class="nav_m">
            	<ul class="clearfix">
                	<li>
                    	<!-- <a href="goods_list.html" title="新品上架"> -->
                        <router-link tag="a" to="/list" title="新品上架" >
                        	<div  class="n_new" ></div>
                            <p>新品上架<br />NEW</p>
                        </router-link>
                    </li>
                    <li>
                    	<!-- <rou href="goods_list.html" title="包袋"> -->
                        <router-link tag="a" to="/list" title="包袋" >
                        	<div class="n_bag"></div>
                            <p>包袋<br />BAGS</p>
                        </router-link>
                    </li>
                    <li>
                    	<a href="goods_list.html" title="服装">
                        	<div class="n_clothes"></div>
                            <p>服装<br />CLOTHES</p>
                        </a>
                    </li>
                    <li>
                    	<a href="goods_list.html" title="特惠">
                        	<div class="n_sales"></div>
                            <p>特惠<br />SALES</p>
                        </a>
                    </li>
                    <li>
                    	<a href="goods_list.html" title="鞋履">
                        	<div class="n_shoes"></div>
                            <p>鞋履<br />SHOES</p>
                        </a>
                    </li>
                    <li>
                    	<a href="goods_list.html" title="配饰">
                        	<div class="n_accessories"></div>
                            <p>配饰<br />ACCESSORIES</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>

export default {
    
}
</script>
<style scoped>
.nav {background:#fff; border-top:1px solid #ccc; border-bottom:1px solid #ccc;}
.navTip {padding:10px; border-bottom:1px solid #ccc;}
.nav_m li {float:left; width:33.3%; text-align:center; margin:10px 0;}
.nav_m li a {display:block;}
.n_new, .n_bag, .n_clothes, .n_sales, .n_shoes, .n_accessories {width:64px; height:64px; background:url(../assets/images/nav.jpg) no-repeat; background-size:192px 128px; margin:0 auto;}
.n_new {background-position:0 0;}
.n_bag {background-position:-64px 0;}
.n_clothes {background-position:-128px 0;}
.n_sales {background-position:0 -64px;}
.n_shoes {background-position:-64px -64px;}
.n_accessories {background-position:-128px -64px;}
</style>



