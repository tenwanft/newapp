<template>
    
        <div id="header">
            <div class="header clearfix">
                <div class="home">
                    <a class="itemize_n" href="javascript:history.back(-1)">
                        <img src="../assets/images/left_logo.gif" height="30"/>
                    </a>
                </div>
                <!-- <h1 class="logo">美西时尚</h1> -->
                <router-link tag="h1" to="/home" class="logo">美西时尚</router-link>
                <div class="assist">
                    <!-- <a class="login float_r" href="login.html"><img src="../assets/images/h07.gif" height="45" /></a> -->
                    <router-link class="login float_r" to="/login"><img src="../assets/images/h07.gif" height="45" /></router-link>
                    <router-link class="shopping_cart float_r" to="/buycar"><img src="../assets/images/h06.gif" height="45" /></router-link>

                    <!-- <a class="shopping_cart float_r" href="cart.html"><img src="../assets/images/h06.gif" height="45" /></a> -->
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    
</template>
<script>

</script>


<style scoped>

#header {width:100%; height:45px; background:#000; position:fixed; z-index:15; top:0; box-shadow:0 1px 5px #333;}
.header {text-align:center; position:relative;}
.logo {text-align:center; padding-top:8px; font-size:20px; color:#fff;}
.logo a {color:#fff; font-size:20px;}
.tip {text-align:center; font-size:18px;}
.home {position:absolute; top:0; left:0; border-right:1px solid #555; height:45px;}
.assist {position:absolute; top:0; right:0;}
.itemize_n{ width:40px; height:30px;padding-top:9px; display: block;}
</style>

