<template>
  <div class="icons">
    <swiper>
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
    </swiper>
    <div>{{pages}}</div>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店asdjkalsdjklasjdklasjdasdasd'
      }, {
        id: '0002',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '酒店'
      }, {
        id: '0003',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '0004',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '酒店'
      }, {
        id: '0005',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '0006',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '酒店'
      }, {
        id: '0007',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '0008',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '酒店'
      }, {
        id: '0009',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '0010',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '酒店'
      }]
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .icons
    overflow hidden
    height 0
    padding-bottom 50%
    .swiper-container
      height 0
      padding-bottom 50%
    .icon
      height 0
      position relative
      overflow hidden
      float left
      width 25%
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        color #333
        padding-right .1rem
        text-align center
        ellipsis()
</style>
