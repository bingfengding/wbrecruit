<template>
  <div id="callme">
    <div class="phone"></div>
     <div class="box" :class="changeLong?'long':''">
       <div class="tellUsTextBox"> 
        <p class="tellUsText wechat">
          <span class="tellUsIcon" @click="openWechat"><img src="../image/wechat.png" alt=""></span>
        </p>
        <div class="line"></div>
        <p class="tellUsText changeCCC">
          <a href="skype:nletpse@maxoof.net?chat" target="_blank">
          <span class="tellUsIcon"><img src="../image/skype.png" alt=""></span>
          </a>
        </p> 
        <div class="line"></div>
        <p class="tellUsText">
          <a href="https://wpa.qq.com/msgrd?v=3&uin=1607005518&site=qq&menu=yes" target="_blank">
          <span class="tellUsIcon"><img src="../image/qq.png" alt=""></span>
          </a>
        </p>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      changeLong:false
    }
  },
  methods:{
    openWechat(){
      this.$store.commit('setShowModel',true)
    },
    openBox(){
      this.changeLong = !this.changeLong
    }
  },
  components: {

  }
}
</script>

<style lang='stylus' scoped>
#callme
  position fixed
  width 68px
  right 40px
  top 30%
  display flex
  justify-content center
  flex-wrap wrap
  align-items center
  &:hover
    .box
      height 230px
  .phone
    width 68px
    height 68px
    background url("../image/call.png") no-repeat
    background-size 100% 100%
    cursor pointer
    transform scale(1)
    transition all .3s ease
    z-index 10
    &:hover
      transform scale(1.2)
  .box
    height 0
    width 68px
    background-color #fff
    border-radius 8px
    transform translateY(-40px)
    transition height .3s ease
    overflow hidden
    display flex
    justify-content center
    flex-wrap wrap
    box-shadow 0 4px 8px rgba(0,0,0,0.2)
    img
      width 44px
      height 44px
    .tellUsTextBox
      .line
        height 1px
        background-color #eee
        width 44px
        margin 2px 0 6px 0
      .tellUsText
        .tellUsIcon
          cursor pointer
      .wechat
        margin-top 54px
</style>
