<template>
   <div id="content">
	<div class="content_m">
    	<form id="dologin" autocomplete="on" action="/member/login" method="post" onsubmit="return checkreg('dologin');">
        <input type="hidden" name="action" value="login">
        <input type="hidden" name="backUrl" value="">
        	            <div class="login_m">
                <div class="l_box">
                    <div class="l_box_l">手机/邮箱</div><div class="l_box_r"><input type="text" id="username" v-model="username" name="username" texttype="text" value="" backText1="请输入注册时的邮箱或手机号码。" regXe="/(^([a-zA-Z0-9._-])+@([a-zA-Z0-9._-])+(.[a-zA-Z]{2,3})$)|(^0?(13[0-9]|15[012356789]|18[01236789]|14[57])[0-9]{8}$)/" backText2="请输入正确的邮箱地址或11位手机号码。"  /></div><div class="clear"></div>
                </div>
                <div class="l_box">
                    <div class="l_box_l">密&nbsp;　　码</div><div class="l_box_r"><input type="password" id="password" v-model="password" name="password" texttype="text" backText1="请输入您的密码。" /></div><div class="clear"></div>
                </div>
            </div>
            <p class="login_btn_n" type="submit" @click="login">登录</p>
            <!-- <p class="b_log">您还没有美西账号？ <a href="reg.html" type="submit">立即注册</a></p> -->
            <p class="b_log">已有账号请 <router-link tag="a" to="/reg">立即注册</router-link></p>

            
            <!--<div class="login_m" style="margin-top:10px;">
                <div class="login_btn">
                您还没有美西账号？<br />
                <a href="reg.html" class="login_btn_n" type="submit" style="margin-top:10px; width:90%; margin:0 auto;">注册</a></div>
            </div>-->
        </form>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            mess:''
        }
    },
    methods:{
        login(){
            this.$store.dispatch('UPDATE_USER',
            {username:this.username,
            password:this.password}).then(
                data=>{
                    if(data.err===0){
                        // localStorage.setItem('user')
                        this.$router.push('/user')
                        console.log(1)
                    }else{
                        this.mess=data.mess
                        alert(this.mess)
                    }
                }
            )
        }
    }


}
</script>

<style scoped>
    #content {padding-top:45px;}
    
    .content_m {max-width:640px; padding:2% 2% 0 2%; margin:0 auto;}
    .content_screen {padding-top:60px;}
    .content_s {max-width:640px; margin:0 auto;}
    .login_m {border:1px solid #ccc; border-radius:5px; box-shadow:0 0 5px #ccc;}
    .l_box, .pasa {padding:15px 0; border-bottom:1px solid #ccc; height:20px;}
    .l_box .l_box_l, .l_box .l_box_r {float:left;}
    .l_box input {width:90%; height:20px; font-size:14px; border:none; color:#333;}
    .l_box_l {width:30%; height:26px; text-align:center;}
    .l_box_r {width:70%; height:26px;}
    .heiAuto {height:auto;}
    .hei70 {height:70px;}
    .hei75 {height:75px;}
    .hei50 {height:50px;}

    .wid85 {width:85%;}
    .wid15 {width:15%;}

    .lo_input_b {width:60%;}
    .login_btn {text-align:center; padding:15px 0;}
    .login_btn_n {width:100%; height:40px;font:14px/40px ""; margin:15px 0 10px 0; background:#8e0c3a; border-radius:3px; color:#fff; text-shadow:1px 1px 2px #333; font-size:14px;}
    a.login_btn_n {display:block; width:100%; margin-top:15px; text-align:center; height:40px; background:#8e0c3a; border-radius:3px; color:#fff; text-shadow:1px 1px 2px #333; font-size:14px; line-height:2.8;}
    a.login_btn_s {background:#ccc; border:#ccc; text-shadow:none;}
    .login_m_n .login_btn {line-height:4; padding-bottom:40px;}
    a.login_btn_ns {background:#ccc;}
    .b_log a{color:#8e0c3a}
</style>

