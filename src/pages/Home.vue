<template>
    <div class="home">
        <Swiper :banners=$store.state.banner></Swiper>
        <Nav></Nav>
    </div>
</template>
<script>
import Swiper from '../components/Swiper';
import Nav from '../components/Nav';
import * as types from '../store/types.js'
export default {
    components:{
        Swiper,Nav
    },
    activated(){
        console.log(0)
        this.$store.dispatch(types.UPDATE_HOME)
    }
}
</script>

<style>

</style>


