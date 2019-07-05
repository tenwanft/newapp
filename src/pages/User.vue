<template>
    <div class="common-wrapper">

	    <div class="head-img">
			<span class="my-img"><img src="../assets/images/defaul.png" /></span>    	
			<p>{{$store.state.user.data.nikename}}</p>
    		<p @click="logout">注销</p>
    	</div>
		
	    <ul class="padding-list current-half-width">
    		<li>
    			<a id="waite4Payment" href="">
    				<p id="waite4PaymentSum">0</p>
    				<p>待付款</p>
    			</a>
    		</li>
    		<li>
    			<a id="waitDeliveryOrderList" href="">
    				<p id="waitDeliveryOrderListSum">0</p>
    				<p>待确认收货</p>
    			</a>
    		</li>

		</ul>
	
	    <ul class="menu-list">
        	<li>
                <a id="quanbudingdan" href="">
        			<img src="../assets/images/547bc6b5Ncc52a3b8.png" alt="">
                	<p>全部订单</p>
                </a>
            </li>
        				
        	<li>
                <a id="wodeqianbao" href="">
        			<img src="../assets/images/547bc6dbN3dabf32a.png" alt="">
                	<p>我的账户</p>
                </a>
            </li>
        				
        	<li>
                <a id="liulanjilu" href="">
        			<img src="../assets/images/547bc70aNf7e3462a.png" alt="">
                	<p>浏览记录</p>
                </a>
            </li>
        				
        	<li>
            	<a id="wodeguanzhu" href="">
        			<img src="../assets/images/547bc6eaN6c97383c.png" alt="">
                	<p>我的关注</p>
                </a>
            </li>
        				
        			   
        </ul>
			

            <ul class="couponIn-list">
    			                    <li>
    					<a id="wodebigouma" href="">
                            <div class="couponIn-item">
                                <div class="couponIn-icon"><img src="../assets/images/55546b06Nbd7a17eb.png"></div>
                                <div class="couponIn-item-info">
                                    <span class="info-title">查看订单</span>
                                    <span class="info-hint">></span>
                                </div>
                            </div>

							<div class="couponIn-item">
								<div class="couponIn-icon"><img src="../assets/images/55546b06Nbd7a17eb.png"></div>
								<div class="couponIn-item-info">
									<span class="info-title">收货地址</span>
									<span class="info-hint">></span>
								</div>
							</div>
							<div class="couponIn-item">
								<div class="couponIn-icon"><img src="../assets/images/55546b06Nbd7a17eb.png"></div>
								<div class="couponIn-item-info">
									<span class="info-title">我的投诉</span>
									<span class="info-hint">></span>
								</div>
							</div>
    					</a>
                    </li>
    			</ul>
    </div>
</template>
<script>
import store from '../plugins/store.js'
export default {
  data(){
    return {
      data:{}
    }
  },
  methods:{
    logout(){
      axios({
        url:'/api/logout',
        method:'put'
      }).then(
        res=>{
          if(res.data.err===0){
            this.$router.push('/login')
          }
        }
      )
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('user beforeRouteEnter')

    if(store.state.user.err===1){
      next('/login')
    }else{
      next()
  
  }
}}
</script>

<style scoped>
.common-wrapper{background-color:#eee;}
.head-img{width:100%;height:114px;margin-top:45px;background-color:#8e0c3a;}
.head-img p{color:#fff}
.head-img span{display:block;width:60px;height:60px;padding-top:10px;margin:0 auto;}
.head-img span img{border:1px solid #ccc;border-radius: 50%}

.current-half-width{height:48px;background:#fff;}
.current-half-width li{float:left;width:50%;height:48px;}
.current-half-width li p{font:14px/22px ""}


.menu-list{height:147px;background:#fff;margin:5px 0;display: flex;align-items: center;}
.menu-list li{width:25%;}
.menu-list li a img{width:60px;height:60px;}
.couponIn-list{background-color:#fff;border-bottom:5px solid #eee;}

.couponIn-item{width:100%;height:90px;display:flex;align-items: center;border-bottom:1px solid #ccc;}
.couponIn-item .couponIn-icon{flex:1;}
.couponIn-item-info{flex:2;display:flex;}
.couponIn-item-info .info-title{flex:2}
.couponIn-item-info .info-hint{flex:1}
</style>



