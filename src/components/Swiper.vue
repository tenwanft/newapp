<template>
    <div class="swiper" >
    <!-- slides -->
    <swiper :options="swiperOption" ref="mySwiper" style="margin-top:45px">
        <swiper-slide><img src="../assets/images/homepage01.jpg" width="100%" /></swiper-slide>
        <swiper-slide><img src="../assets/images/homepage02.jpg" width="100%" /></swiper-slide>
        <swiper-slide><img src="../assets/images/homepage03.jpg" width="100%" /></swiper-slide>
        <swiper-slide><img src="../assets/images/homepage04.jpg" width="100%" /></swiper-slide>
        <swiper-slide><img src="../assets/images/homepage05.jpg" width="100%" /></swiper-slide>
        
        <!-- Optional controls -->
        <!-- <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  props:['banners'],
  data() {
      return {
        swiperOption: {
         autoplay:true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
}
</script>

<style>
   
</style>

