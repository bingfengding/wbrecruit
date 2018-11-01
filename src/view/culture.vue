<template>
  <div id="culture">
    <header>
      <div class="banner">
      </div>
    </header>
    <!-- <cen-header class="cenHeader" ref="cenheader" :class="isTop? 'isTop':''">
    </cen-header>
    <div :class="isTop? 'padTop':''"></div> -->
    <div class="linkBox">
      <div class="linkCen">
        <div class="linkItem" @click="changeItem(0)">
          <p>企业宗旨</p>
          <div class="lineBox">
            <div class="orangeLine" :class="isIndex==0?'orange':''"></div>
          </div>
        </div>
        <div class="line"></div>
        <div  class="linkItem" @click="changeItem(1)">
          <p>员工活动</p>
          <div class="lineBox">
            <div class="orangeLine" :class="isIndex==1?'orange':''"></div>
          </div>
        </div>
        <div class="line"></div>
        <div  class="linkItem" @click="changeItem(2)">
          <p>福利待遇</p>
          <div class="lineBox">
            <div class="orangeLine" :class="isIndex==2?'orange':''"></div>
          </div>
        </div>
      </div>
    </div>
    <purpose v-if="isIndex===0"></purpose>
    <activity v-else-if="isIndex===1"></activity>
    <welfare v-else-if="isIndex===2"></welfare>
  </div>
</template>

<script>
//import cenHeader from "@/components/cenheader"
import activity from "./culture/activity"
import purpose from "./culture/purpose"
import welfare from "./culture/welfare"
export default {
  data () {
    return {
      isTop:false,
      cenTop:936,
      isIndex:0,
    }
  },
  created(){
    this.isIndex = this.$store.getters.getCultureIndex
  },
  mounted(){
    this.$nextTick(()=>{
      window.addEventListener('scroll', this.onScroll)
      //this.cenTop = this.$refs.cenheader.$el.offsetTop
       
    })
  },
  methods:{
    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      if(scrolled >= this.cenTop){
        this.isTop = true
      }else{
        this.isTop = false
      }
    },
    changeItem(index){
      if(index != this.isIndex){
        this.$store.commit('setCultureIndex',index)
        this.isIndex = index
      }
    }
  },
  components: {
   // cenHeader,
    activity,
    purpose,
    welfare
  }
}
</script>

<style lang='stylus' scoped>
#culture
  background-color #f8f8f8
  a
    color #000000
  header
    height 600px
    position relative
    .banner
      width 1400px
      height 600px
      position absolute
      bottom 0
      left 50%
      transform translateX(-50%)
      background url("../image/culture/banner.jpg") no-repeat
  .cenHeader
    width 100%
    position relative
    &.isTop
      position fixed
      top 0
  .padTop
    padding-top 60px
  .linkBox
    display flex
    justify-content center
    padding-top 60px
    .linkCen
      display flex
      justify-content center
      color #000
      align-items center
      .linkItem
        font-size 24px
        text-align center
        cursor pointer
        font-weight 600
        .lineBox
          display flex
          justify-content center
          padding-top 10px
          
          .orangeLine
            width 100px
            height 5px
            background-color transparent 
            &.orange
              background-color #ff5d22
      .line
        width 1px
        height 26px
        background-color #c0c0c0
        margin 0 40px


 
</style>
