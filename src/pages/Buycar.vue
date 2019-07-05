<template>
    <section>
        <div id="content" >
	        <div class="content_m">
    	        <div class="login_m">
                <!--无商品-->
                <div class="k_sc" align="center" style="height:230px;">
                    <div class="all_img" style="padding-top:30px;"><img src="../assets/images/sc_n.gif" /></div>
                    <p style="height:20px; padding-top:15px;">您的购物袋还是空的哦。</p>                    
                </div>
            </div>
            <!-- <a class="login_btn_n" href="goods_list.html" style="margin-top:15px;" id='Toshopping'>去看看新品</a>  -->
             <router-link tag="a" class="login_btn_n" style="margin-top:15px;" id='Toshopping' to="/list">去看看新品</router-link>                                  
            </div>
        </div>
        
    </section>
</template>

<style scoped>
    #content {padding-top:45px;}
    
    .content_m {max-width:640px; padding:2% 2% 0 2%; margin:0 auto;}
    .login_btn_n {width:100%; height:40px; margin:15px 0 10px 0; background:#8e0c3a; border-radius:3px; color:#fff; text-shadow:1px 1px 2px #333; font-size:14px;}
    a.login_btn_n {display:block; width:100%; margin-top:15px; text-align:center; height:40px; background:#8e0c3a; border-radius:3px; color:#fff; text-shadow:1px 1px 2px #333; font-size:14px; line-height:2.8;}
</style>

