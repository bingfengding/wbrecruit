<template>
  <div id="back">
    <header>
      <div class="banner">
        <video ref="bgvideo" loop autoplay muted>
          <source src="../image/back/video.mp4" type="video/mp4">
          您的浏览器不支持 video 标签。
        </video>
      </div>
    </header>
    <!-- <cen-header class="cenHeader" ref="cenheader" :class="isTop? 'isTop':''">
    </cen-header>
    <div :class="isTop? 'padTop':''"></div> -->
    <div class="backCen">
      <div class="backTitle">
        <p>企业背景</p>
        <div class="lineBox">
          <div class="line"></div>
        </div>
        <div class="titleText">
          <p>紐林科集團是以英国总部为背景依托，集研发、运营和服务于一体的线上服务公司。自2016年登陆亚洲市场以来，始终以“缔造全球第一网络科技品牌”目标，是行业内所公认的市场领先者。</p>
          
        </div>
      </div>
    </div>
    <div class="world" ref="world">
      <div class="center">
        <div 
        class=' pin1' 
        :class="isCoordinate?'pin':''"
        @click="changeImg(0)"
        ></div>
        <div class=' pulse1' :class="isCoordinate?'pulse':''"></div>
        <div class="pinEn animated" :class="isCoordinate&&coordinateIndex===0 ? 'zoomIn fadeIn delay-05s':'fadeOut zoomOut'"
        ><img src="../image/back/En.png" alt=""></div>
        <div 
        class=' pin2' 
        :class="isCoordinate?'pin':''" 
        @click="changeImg(1)"
        ></div>
        <div class=' pulse2' :class="isCoordinate?'pulse':''"></div>
        <div 
        class="pinPh animated " 
        :class="isCoordinate && coordinateIndex===1 ? 'zoomIn fadeIn delay-05s':'fadeOut zoomOut'" 
        
        >
          <img src="../image/back/Ph.png" alt="">
        </div>
      </div>
    </div>
    <div class="ph" ref="ph">
      <div class="center">
        <div 
        :class="isPh?'pin':''"
        ></div>
        <div :class="isPh?'pulse':''"></div>
        <div class="pinPh animated" :class="isPh? 'zoomIn fadeIn delay-05s':'fadeOut zoomOut'"
        ><img src="../image/back/Manila.png" alt=""></div>
        
      </div>
    </div>
  </div>
</template>

<script>
//import cenHeader from "@/components/cenheader"
export default {
  data () {
    return {
      isTop:false,
      cenTop:936,
      coordinateIndex:0,
      coordinateTop:900,
      isCoordinate:false,
      isPh:false,
      phTop:1600
    }
  },
  mounted(){
    this.$nextTick(()=>{
      window.addEventListener('scroll', this.onScroll)
      
      // if(this.$refs.cenheader.$el){
      //   this.cenTop = this.$refs.cenheader.$el.offsetTop
      // }
      if(this.$refs.world){
        this.coordinateTop = this.$refs.world.offsetTop
      }
      if(this.$refs.ph){
        this.phTop = this.$refs.ph.offsetTop
      }
      
    })
  },
  methods:{
    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      let _windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      if(this.$refs.world){
        this.coordinateTop = this.$refs.world.offsetTop
      }
      if(this.$refs.ph){
        this.phTop = this.$refs.ph.offsetTop
      }
      // if(scrolled >= this.cenTop){
      //   this.isTop = true
      // }else{
      //   this.isTop = false
      // }
      if(scrolled>= (this.coordinateTop -_windowHeight +400)){
        this.isCoordinate = true
      }else if(scrolled<= (this.coordinateTop -_windowHeight)){
        this.isCoordinate = false
      }
      if(scrolled>= (this.phTop -_windowHeight +400)){
        this.isPh = true
      }else if(scrolled<= (this.phTop -_windowHeight)){
        this.isPh = false
      }
    },
    changeImg(index){
      if(this.coordinateIndex != index){
        this.coordinateIndex = index
      }
      
    }
  },
  components: {
    //cenHeader
  }
}
</script>

<style lang='stylus' scoped>
#back
  background-color #f8f8f8
  // .padTop
  //   padding-top 90px
  header
    height 600px
    position relative
    margin-top 60px
    .banner
      width 1400px
      height 600px
      
      overflow hidden
      position absolute
      bottom 0
      left 50%
      transform translateX(-50%)
      background-color #000
      display flex
      justify-content center
      align-items flex-end
      video
        width 1400px
  // .cenHeader
  //   width 100%
  //   position relative
  //   &.isTop
  //     position fixed
  //     top 0
  .backCen
    text-align center
    padding-top 60px
    padding-bottom 40px
    .backTitle
      p
        font-size 60px
        font-weight 600
        color #000000
      .lineBox
        display flex
        justify-content center
        padding-top 10px
        .line
          width 100px
          height 5px
          background-color #ff5d22
      .titleText 
        padding-top 30px
        display flex
        justify-content center
        p
          width 700px
          font-size 14px
          font-weight 400
          color #252525
  .world
    display flex
    justify-content center
    overflow hidden
    .center
      width 1386px
      height 650px
      background url("../image/back/bg_1.jpg") no-repeat
      background-size 100% 100%
      position relative
      .pin
        width 30px
        height 30px
        border-radius 50% 50% 50% 0
        background red
        position absolute
        transform rotate(-45deg)
        animation-name bounce
        animation-fill-mode both
        animation-duration 1s
        z-index 2
        cursor pointer
        &:after
          content ''
          width 14px
          height 14px
          margin 8px 0 0 8px
          background #fff
          position absolute
          border-radius 50%
        &.pin1
          left 622px
          top 254px
        &.pin2
          left 1234px
          top 466px
      .pulse
        background rgba(0,0,0,.5)
        border-radius 50%
        height 14px
        width 14px
        position absolute
        transform rotateX(55deg)
        &:after
          content ""
          border-radius 50%
          height 40px
          width 40px
          position absolute
          margin -13px 0 0 -13px
          animation pulsate 1s ease-out
          animation-iteration-count infinite
          opacity 0
          box-shadow 0 0 1px 2px #333
          animation-delay 1.1s
        &.pulse1
          left 630px
          top 284px
        &.pulse2
          left 1242px
          top 494px
      .pinEn
        width 622px
        height 612px
        position absolute
        top 20px
        left 20px
        img
          width 100%
          height 100%
      .pinPh
        position absolute
        top 20px
        left 20px
        width 1228px
        height 612px
        img
          width 100%
          height 100%
  .ph
    display flex
    justify-content center
    overflow hidden
    padding 50px 0
    .center
      width 1386px
      height 650px
      background url("../image/back/bg_2.jpg") no-repeat
      background-size 100% 100%
      position relative
      .pin
        width 30px
        height 30px
        border-radius 50% 50% 50% 0
        background red
        position absolute
        transform rotate(-45deg)
        animation-name bounce
        animation-fill-mode both
        animation-duration 1s
        z-index 2
        cursor pointer
        top 214px
        left 1044px
        &:after
          content ''
          width 14px
          height 14px
          margin 8px 0 0 8px
          background #fff
          position absolute
          border-radius 50%
      .pulse
        background rgba(0,0,0,.5)
        border-radius 50%
        height 14px
        width 14px
        position absolute
        transform rotateX(55deg)
        left 1052px
        top 244px
        &:after
          content ""
          border-radius 50%
          height 40px
          width 40px
          position absolute
          margin -13px 0 0 -13px
          animation pulsate 1s ease-out
          animation-iteration-count infinite
          opacity 0
          box-shadow 0 0 1px 2px #333
          animation-delay 1.1s
      .pinPh
        position absolute
        top 84px
        left 20px
        width 1040px
        height 482px
        img
          width 100%
          height 100%        
@keyframes pulsate
  0%
    transform scale(0.1, 0.1)
    opacity 0
  50%
    opacity 1
  100%
    transform scale(1.2, 1.2)
    opacity 0
@keyframes bounce
  0%
    opacity 0
    transform translateY(-1000px) rotate(-45deg)
  60%
    opacity 1
    transform translateY(30px) rotate(-45deg)
  80%
    transform translateY(-10px) rotate(-45deg)
  100%
    transform translateY(0) rotate(-45deg)
      
</style>
