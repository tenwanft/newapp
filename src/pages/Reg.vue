<template>
    <div id="content">
	    <div class="content_m">
            <form id="reg" action="/member/register" method="post" onSubmit="return checkreg('reg');">
            <input type="hidden" name="action" value="register">
            <input type="hidden" name="backUrl" value="">
                <div class="login_m">
                    <div class="l_box">
                        <div class="l_box_l">手机/邮箱</div><div class="l_box_r"><input type="text" id="username" v-model="username" name="username" backText1="请输入您的常用邮箱或手机。" texttype="text" regXe='/(^([a-zA-Z0-9._-])+@([a-zA-Z0-9._-])+(.[a-zA-Z]{2,3})$)|(^0?(13[0-9]|15[012356789]|18[01236789]|14[57])[0-9]{8}$)/' backText2="请输入正确的邮箱或手机号码。" /></div><div class="clear"></div>
                    </div>
                    <div class="l_box">
                        <div class="l_box_l">密&nbsp;　　码</div><div class="l_box_r"><input type="password" id="password" v-model="password" name="password" backText1="密码不能为空，请输入密码。" backText2="您两次输入的密码不一致，请重新输入一次上面的密码。" backText3="用户密码长度范围在6~16位之间。" texttype="equal" /></div><div class="clear"></div>
                    </div>
                    <div class="l_box">
                        <div class="l_box_l" style="vertical-align:top;">确认密码</div><div class="l_box_r"><input type="password" id="password2" name="password2" /></div><div class="clear"></div>
                    </div>
                </div>
                <p class="login_btn_n" type="submit" @click="reg">注册</p>
                <!-- <p class="b_log">已有账号请 <a href="/member/login">点此登录</a></p> -->
                <p class="b_log">已有账号请 <router-link tag="a" to="/login">点此登录</router-link></p>
   
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
    reg(){
      axios({
        url:'api/reg',
        method:'post',
        data:{username:this.username,password:this.password}
      }).then(
        res=>{
          if(res.data.err===0){
            console.log(res.data)
            this.$router.push('/login')
          }else{
            console.log(res.data)
            this.mess = res.data.mess
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
    .login_btn_n {width:100%; height:40px; font:14px/40px "";margin:15px 0 10px 0; background:#8e0c3a; border-radius:3px; color:#fff; text-shadow:1px 1px 2px #333; font-size:14px;}
    a.login_btn_n {display:block; width:100%; margin-top:15px; text-align:center; height:40px; background:#8e0c3a; border-radius:3px; color:#fff; text-shadow:1px 1px 2px #333; font-size:14px; line-height:2.8;}
    a.login_btn_s {background:#ccc; border:#ccc; text-shadow:none;}
    .login_m_n .login_btn {line-height:4; padding-bottom:40px;}
    a.login_btn_ns {background:#ccc;}
    .b_log a{color:#8e0c3a}
</style>
