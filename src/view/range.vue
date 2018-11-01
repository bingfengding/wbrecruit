<template>
  <div id="range" ref="range">
    <header>
      <div class="banner"></div>
    </header>
    <!-- <cen-header class="cenHeader" ref="cenheader" :class="isTop? 'isTop':''">
    </cen-header>
    <div :class="isTop? 'padTop':''"></div> -->
     <div class="rangeCon">
      <div class="rangeConTitle">
        <p>业务范围</p>
        <div class="lineBox">
          <div class="line"></div>
        </div>
      </div>
      <div class="rangeConText">
        <p>
          目前，纽林科科技有限公司的业务涵盖互动娱乐、移动互联产品研发、网络媒体等，是亚洲领先的综合型互联网公司之一。
        </p>
        
      </div>
      <range-first class="firstItem" ref="rangeFirst" :pose="scrolled>(rangeFirstBaseTop+200)?'show':'hidden'">
        <div class="firstItemCen">
          <div class="itemText">
            <range-item class="rangeConTitle">
              <p>互动娱乐事业</p>
              <div class="lineBox">
                <div class="line"></div>
              </div>
            </range-item>
            <range-item class="itemTextValue">
              自主研发多款在线游戏，在互动娱乐业务方面始终保持市场领先地位，更秉持“匠心”和“创新”的理念，为用户提供各类优质娱乐服务。
            </range-item>
          </div>
        </div>
      </range-first>
    </div>
    <div class="main">
      <div class="mainCen" ref="rangeMainCen">
        <div class="item" :class="index%2===0 ? 'textRight':'textLeft'" v-for="(item,index) in list" :key="index">
          <div class="imgBox animated" v-if="index%2===0" :class="scrolled>(baseTop+index*300+100)?'fadeInLeft':'fadeOutDown'">
            <img :src="item.image" alt="">
          </div>
          <div class="text animated delay-05s" :class="scrolled>(baseTop+index*300+100)? (index%2===0?'fadeInRight':'fadeInLeft'):'fadeOutDown'">
            <div class="textCen">
              <div class="titleBox"> 
                 <div class="titleBoxText">
                  <p>{{item.title}}</p>
                </div>
              <div class="lineBox">
                <div class="line"></div>
              </div>
              
            </div>
            <div class="textCon">
              <p>{{item.text}}</p>
            </div>
            </div>
            
          </div>
          <div 
          class="imgBox animated" 
          v-if="index%2!==0"
          :class="scrolled>(baseTop+index*300+100)?'fadeInRight':'fadeOutDown'"
          >
            <img :src="item.image" alt="">
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
//import cenHeader from "@/components/cenheader"
import posed from 'vue-pose'
export default {
  data () {
    return {
      isTop:false,
      cenTop:936,
      list:[
        {
          image:require("../image/range/2.jpg"),
          title:"移动互联网产品",
          text:"自主研发的移动互联游戏客户端，以用户的价值为依归，致力于提供最优质的用户体验。",
          id:1,
        },{
          image:require("../image/range/3.jpg"),
          title:"网络媒体",
          text:"最佳新媒体，顶级赛事合作伙伴，只生产最优质的内容。",
          id:2,
        },
      ],
      baseTop:250,
      scrolled:0,
      rangeMainCen:0,
      rangeFirstTop:0,
      rangeFirstBaseTop:0,
    }
  },
  mounted(){
    this.$nextTick(()=>{
      window.addEventListener('scroll', this.onScroll)
      //this.cenTop = this.$refs.cenheader.$el.offsetTop
      this.rangeMainCen = this.$refs.rangeMainCen.offsetTop
      this.rangeFirstTop = this.$refs.rangeFirst.$el.offsetTop
      let _windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      this.baseTop = this.rangeMainCen - _windowHeight
      this.rangeFirstBaseTop = this.rangeFirstTop - _windowHeight
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
     
        if(this.$refs.range){
          this.scrolled = scrolled

        }
    },
  },
  components: {
    //cenHeader,
    rangeFirst: posed.div({

      show:{
        //beforeChildren:true,
        staggerChildren:500,
        opacity:1,
        delayChildren: 500,
        transition:{
          duration:1000
        },
      },
      hidden:{
        afterChildren: true,
        staggerChildren: 300,
        opacity:0,
        transition:{
        duration:300
      },
      }
    }),
    rangeItem:posed.div({
      transition:{
        duration:100
      },
      show:{
        opacity:1,
       transition:{
        duration:300
      },
      },
      hidden:{
        opacity:0,
        transition:{
        duration:300
      },
      }
    })
  }
}
</script>

<style lang='stylus' scoped>
#range
  background-color #f8f8f8
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
      background url("../image/range/banner.jpg") no-repeat
      background-size 100% 100%
  .cenHeader
    width 100%
    position relative
    &.isTop
      position fixed
      top 0
  .padTop
    padding-top 90px
  .main
    display flex
    justify-content center
    padding 60px 0 100px 0
    .mainCen
      width 1400px
      border-top 10px solid #ff5d22
      .item
        display flex
        justify-content center
        .imgBox
          width 700px
          height 300px
          img
            width 100%
            height 100%
        .text
          width 700px
          display flex
          align-items center
          .textCen
            .titleBox
              font-size 60px
              .titleBoxText
                display flex
              .line
                width 100px
                height 5px
                background-color #ff5d22
                margin-top 20px
            .textCon
              margin-top 50px
              font-size 14px
        &.textRight
          .text
            padding-left 50px
            .textCen
              .line
                margin-left 4px
        &.textLeft
          .text
            justify-content flex-end
            padding-right 50px
            .lineBox
              display flex
              justify-content flex-end
              padding-right 6px
            .titleBoxText
              justify-content flex-end
  .rangeCon
    text-align center
    padding-top 60px
    .rangeConTitle
      padding-bottom 40px
      p
        font-size 60px
      .lineBox
        display flex
        justify-content center
        padding-top 10px
        .line
          width 100px
          height 5px
          background-color #ff5d22
    .rangeConText
      display flex
      justify-content center
      p
        width 900px
    .firstItem
      display flex
      justify-content center
      padding-top 60px
      .firstItemCen
        width 1386px
        height 300px
        background url("../image/range/1.jpg") no-repeat
        background-size cover
        position relative
        text-align center
        .itemText
          width 500px
          position absolute
          right 100px
          top 50%
          transform translateY(-50%)
          .itemTextValue
            font-size 14px
            line-height 24px


</style>
