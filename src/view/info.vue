<template>
  <div id="info">
    <header>
      <div class="banner">
        <!-- <div class="videoText">
          <p>步履不停 创新不止</p>
          <p>赋能你我 共赢未来</p>
          <div class="videoTextIpt">
            <div class="videoIpt">
              点击了解详情
            </div>
          </div>
        </div> -->
      </div>
    </header>
    <!-- <cen-header class="cenHeader" ref="cenheader" :class="isTop? 'isTop':''">
    </cen-header>
    <div :class="isTop? 'padTop':''"></div> -->
    <div class="comInfo">
      <div class="infoTitle">
        <p>公司信息</p>
        <div class="selectLine">
          <div class="line"></div>
        </div>
      </div>
      <div class="infoContent">
        <div class="infoCen">
          <p>作为亚洲所属第一全资企业，紐林科集團于2009年应运而生，总部地标坐落英国，由集团优秀资源与业界精英团队合作创办，
        是集全球多项业务于一体的综合型企业，并在世界各地拥有研发中心和运营基地。</p>
        <p>紐林科集團始终以“构建全球商业格局”为目标，坚持顺应市场战略发展需求，力争成为业界翘楚。集团于2016年正式登陆亚洲地区，首先选择聚焦亚太地区，并在“千岛之国”菲律宾的金融中心马卡蒂设立分部，主要业务为线上游戏运营。</p>
          <div class="infoBtn">
            <div class="infoBtnCen" @click="goto('/recruit')">
              <span class="infoBtnText">加入团队</span>
              <span class="infoBtnImg"><img src="../image/more.png" alt=""></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="infoMain">
      <div class="infoMainBox">
        <div class="infoMainLeft">
          <div class="imgBox">
            <div class="imgBoxTitle">
              <p>愿景</p>
              <div class="LineBox">
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div class="infoMainText">
            <p>构建全球商业格局, 在致力于成为IT产业的开拓者, 为”缔造全球第一网络科技品牌”而永不止步.</p>
          </div>
        </div>
        <div class="infoMainRight">
       
            <div class="imgBox">
              <div class="imgBoxTitle">
                <p>理念</p>
                <div class="LineBox">
                <div class="line"></div>
              </div>
            </div>
           
          </div>
          <div class="infoMainText">
            <p>以客户满意度为中心，以员工利益为半径，企业发展力求“圆满”。</p>
            <p>一、经营理念：客户第一、员工第二、股东第三。</p>
            <p>二、用人原则：人品是原则，态度是根本，能力是基础。</p>
            <p>三、用人标准：有德有才，提拔重用</p>
            <p class="right">      有德无才，培养使用</p>
            <p class="right">      有才无德，限制使用</p>
            <p class="right">      无德无才，坚决不用</p>
          </div>
        </div>
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
    }
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
    goto(value){
      this.$router.push(value)
    }
  },
  components: {
    //cenHeader
  }
}
</script>

<style lang='stylus' scoped>
#info
  background-color #fff
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
      background url("../image/info/banner.jpg") no-repeat
      .videoText
        position absolute
        top 40%
        left 50%
        transform translate(-50%,-50%)
        color #fff
        p
          font-size 60px
        .videoTextIpt
          display flex
          justify-content center
          align-items center
          .videoIpt
            cursor pointer
            border 1px solid #fff
            font-size 18px
            padding 0 20px
            line-height 36px
            height 36px
            margin-top 30px
  .cenHeader
    width 100%
    position relative
    &.isTop
      position fixed
      top 0
  .padTop
    padding-top 90px
  .comInfo
    padding-top 60px
    .infoTitle
      p
        font-size 60px
        text-align center
      .selectLine
        display flex
        justify-content center
        .line
          height 5px
          width 100px
          background-color #ff5d22
          margin-top 20px
    .infoContent
      display flex
      justify-content center
      padding-top 30px
      .infoCen
        width 870px
        p
          text-align center
          font-size 14px
          padding-bottom 30px
          line-height 24px
        .infoBtn
          display flex
          justify-content center
          padding-bottom 70px
          .infoBtnCen
            width 130px
            height 34px
            background-color #ff5d22
            border-radius 34px
            display flex
            justify-content center
            align-items center
            cursor pointer
            color #fff
            .infoBtnImg
              margin-left 10px
              img
                vertical-align middle
  .infoMain
    display flex
    justify-content center
    padding-bottom 80px
    .infoMainBox
      width 1400px
      display flex
      justify-content space-between
      .infoMainLeft
        width 684px
        .imgBox
          height 300px
          background url("../image/info/info_01.jpg") no-repeat
          background-size cover
          position relative
          .imgBoxTitle
            position absolute
            bottom 30px
            left 50px
            color #fff
            p
              font-size 60px
              text-align center
            .LineBox
              display flex
              justify-content center
              .line
                height 5px
                width 100px
                background-color #ff5d22
                margin-top 10px
        .infoMainText
          margin-top 24px
          font-size 14px
          padding-left 50px
      .infoMainRight
        width 684px
        .imgBox
          height 300px
          background url("../image/info/info_02.jpg") no-repeat
          background-size cover
          position relative
          .imgBoxTitle
            position absolute
            bottom 30px
            left 50px
            color #fff
            p
              font-size 60px
              text-align center
            .LineBox
              display flex
              justify-content center
              .line
                height 5px
                width 100px
                background-color #ff5d22
                margin-top 10px
        .infoMainText
          margin-top 24px
          font-size 14px
          padding-left 50px
          line-height 24px
          .right
            text-indent 28px

</style>
