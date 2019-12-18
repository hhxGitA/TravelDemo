<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true,
        speed: 3000
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/sight/p0/1411/34/6aec007588037c2d9ef339d81aeba256.water.jpg_256x160_ec997312.jpg'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vc/8d/63/a8/90bc4af557172cc68c6725ec36.jpg_92.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background :white
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 40%
    .swiper-img
      width 100%
      height 3rem
</style>
