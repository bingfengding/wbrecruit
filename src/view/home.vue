<template>
  <div id="home">
    <header>
      <div class="video">
        <video ref="bgvideo" loop autoplay muted>
          <source src="../image/home/video_bg.mp4" type="video/mp4">
          您的浏览器不支持 video 标签。
        </video>
      <div class="videoText">
        <Text-box class="anmete1 anmeted" :pose="anmete1?'show':'hidden'">
          <p>
            你想要的职位，从来虚位以待，终将如期而至！
          </p>
        </Text-box>
      <Text-box class="anmete2 anmeted" :pose="anmete2?'show':'hidden'">
          <p>
            行动起来，梦想就会发光，所有的相遇都是久别重逢！
          </p>
        </Text-box>
        <Text-box class="anmete3 anmeted" :pose="anmete3?'show':'hidden'">
          <p>
            你未必出类拔萃，但肯定与众不同，只要步履不停，我们总会遇见！
          </p>
        </Text-box>
        <Text-box class="anmete4 anmeted" :pose="anmete4?'show':'hidden'">
          <p>
            遇见紐林科，预见改变世界的你！
          </p>
        </Text-box>
        <!-- <div class="videoTextIpt">
          <div class="videoIpt">
            点击了解详情
          </div>
        </div> -->
      </div>
      </div>
    </header>
    <features>
    </features>
    <!-- <cen-header class="cenHeader" ref="cenheader" :class="isTop? 'isTop':''">
    </cen-header> -->
    <!-- <div :class="isTop? 'padTop':''"></div> -->
    <!-- 模块 -->
    <!-- 模块 -->
    <div class="select">
      <div class="cenSelect">
        <div class="selectTitle">
          <div class="selectValue">你的热忱是?</div>
          <div class="selectLine">
            <div class="line"></div>
          </div>
        </div>
        <div class="slelectMain">
          <div class="slelectMainCen" ref="slelectMainCen">
            <div v-for="(item,index) in selectList" :key="index" class="slelectItemBox animated" :class="scrolled>(slelectMainCenBaseTop+200)?('fadeInUp '+item.class):'fadeOutDown'">
              <div class="slelectItem">
                <div class="slelectImg" @mouseenter.stop="changeBgEnter(index,$event)" 
                @mouseleave.stop="changeBgOut(index,$event)"
                :ref="'selectImg'+index"
                @click="gotoRecruit(item.id)"
                >
                
                  <ImgBox class="positionImgR positionImg" :pose="isHover[index] ? 'hidden': 'visible'"
                  :style="isHover[index] ?'z-index:10':'z-index:1'"
                   ><img :src="domain+item.select_image" alt=""></ImgBox>
                  <ImgBoxs class="positionImgB positionImg" :pose=" isHover[index] ? 'visible': 'hidden'"
                  :style="isHover[index] ?'z-index:1':'z-index:10'"
                  ><img :src="domain+item.noselect_image" alt=""></ImgBoxs>
                </div>
                <div>{{item.cn_name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homeImgBox" ref="homeImgBox">
      <div class="homeImgBoxCen">
        <div 
          class="animated homeImg" 
          :class="scrolled>(homeImgBoxBaseTop+300)?('fadeInRight '+item.class):'fadeOutLeft '" 
          v-for="(item,index) in homeImgBox" :key="index"
          :style="'backgroundImage:url('+item.image+')'"
        >
          <p class="title">
            {{item.title}} 
          </p>
          <P class="content">{{item.content}}</P>
          <div class="smallMore">
            <svg viewBox="0 0 90 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape shapeActive" height="34" width="90"></rect>
            </svg>
              <div class="hover-text" @click="goto('/culture',item.cultureIndex)">了解详情</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="starUp">
      <div class="starCen">
        <div class="starTitle">
          <div class="starLine"></div>
          <div class="starValue">拿什么跟你的梦想般配？</div>
        </div>
        <div class="starCon">
          <p>高薪是选择，高效是要求；</p>
          <p>月休8天，起薪无上限；</p>
          <p>能力是你的最佳筹码，年轻、创造力和激情，是我们赋予你的标签。</p>
        </div>
        <div class="starBtn">
          <div class="starBtnCen" @click="goto('/us')">
            <span class="starBtnText">上传简历</span>
            <span class="starBtnImg"><img src="../image/more.png" alt=""></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {banner, competition, hot,getdepartment} from "@/api/home/home"
// import cenHeader from "@/components/cenheader"
import posed from 'vue-pose'
import features from "@/components/features"
export default {
  data () {
    return {
      domain:"",
      isTop:false,
      cenTop:936,
      anmete1:false,
      anmete2:false,
      anmete3:false,
      anmete4:false,
      selectList:[
        {
          noselect_image:require("../image/home/1.png"),
          select_image:require("../image/home/1-a.png"),
          cn_name:"市场部",
          url:"/recruit",
          type:"shichangbu",
          id:1,
          class:""
        }
      ],
      homeImgBox:[
        {
          title:"福利待遇",
          content:"高薪是选择，高效是要求；月休8天，起薪无上限；能力是你的最佳筹码，年轻、创造力和激情，是我们赋予你的标签。阶梯式薪资架构，助你步步高升；",
          cultureIndex:2,
          image:require("../image/home/a.png"),
          class:"delay-02s",
        },
        {
          title:"员工活动",
          content:"高薪是选择，高效是要求；月休8天，起薪无上限；能力是你的最佳筹码，年轻、创造力和激情，是我们赋予你的标签。阶梯式薪资架构，助你步步高升；",
          cultureIndex:1,
          image:require("../image/home/b.png"),
          class:"delay-04s",
        },
        {
          title:"企业宗旨",
          content:"紐林科集團旨在构建未来的全球商业格局，在实现企业战略目标的进程中，始终贯彻开拓进取和追求卓越的企业精神。在激烈的市场竞争中抢占制高点。",
          cultureIndex:0,
          image:require("../image/home/c.png"),
          class:"delay-06s",
        },
      ],
      isHover:[false,false,false,false,false,false,false,false,false,false,false,false],
      showIndex:1,
      homeImgBoxBaseTop:0,
      scrolled:0,
      slelectMainCenBaseTop:0
    }
  },
  created(){
    getdepartment().then(res=>{
      if(res.status){
        let _base = res.data.data
        this.domain = _base.domain
        let _arr = []
        _arr =  _base.department.map((item,index)=>{
          if(index<10){
            let _index = 'delay-0'+(index)+'s'
            item.class = _index

          } else if(index==10){
            let _index = 'delay-1s'
             item.class = _index
          }
          else{
            let _index = 'delay-'+(index)+'s'
             item.class = _index
   
          }
          return item
        })
          this.selectList = _arr
      }
     
    })
  },
  mounted(){
    this.setTime(this.showIndex)
    this.$nextTick(()=>{

      this.$refs.bgvideo.play()
      window.addEventListener('scroll', this.onScroll)
      // this.cenTop = this.$refs.cenheader.$el.offsetTop
      let _windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      this.homeImgBoxBaseTop = this.$refs.homeImgBox.offsetTop - _windowHeight
      this.slelectMainCenBaseTop = this.$refs.slelectMainCen.offsetTop - _windowHeight
       
    })
   
  },
  methods:{
    
    setTime(name){

      let time = setTimeout(()=>{
        this["anmete"+name] = true
        clearTimeout(time)
        let time1 = setTimeout(()=>{
          this["anmete"+name] = false
          clearTimeout(time)
          this.showIndex += 1
         
          if(this.showIndex<=4){
            this.setTime(this.showIndex)
          }else{
            this.showIndex = 1
            this.setTime(1)
          }
        },2500)
      },2500)
    },
    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      if(scrolled >= this.cenTop){
        this.isTop = true
      }else{
        this.isTop = false
      }
      this.scrolled = scrolled
    },
    changeBgEnter(index,e){
      e.stopPropagation()
      let _arr = [false,false,false,false,false,false,false,false,false,false,false,false]
      _arr[index] = true
      this.isHover = _arr
      // this.isHover = true

      // let _ref = 'selectImg'+index
      // this.$refs[_ref][0].style.backgroundImage = "url("+this.selectList[index].imageH+")"

    },
    changeBgOut(index,e){
      e.stopPropagation()
      let _arr = [false,false,false,false,false,false,false,false,false,false,false,false]
      this.isHover = _arr
      
      // this.isHover = false

      // let _ref = 'selectImg'+index
      // this.$refs[_ref][0].style.backgroundImage = "url("+this.selectList[index].image+")"
    },
    goto(value,index){
      if(index !==undefined){
        this.$store.commit('setCultureIndex',index)
      }
      this.$router.push(value)
    },
    gotoRecruit(id){
      this.$store.commit('setDepName',id)
      this.$router.push('/recruit')
    }
  },
  components: {
    // cenHeader,
    features,
    ImgBox:posed.div({
        visible: {
          opacity:0,
          scale:0.01,
          transition: {
          scale:{
              delay: 300,
              duration: 300
            }
       }
        },
        hidden: {
          opacity:1,
          scale:1,
          transition: {
            scale:{
              duration: 300
            }
          }
        },
        
      

    }),

    ImgBoxs:posed.div({
      visible: {
        opacity:0,
        scale:0.01,
        transition: {
          scale:{
              delay: 300,
              duration: 300
            }
       }
      },
      hidden: {
          scale:1,
          opacity:1,
          transition: {
            scale:{
              duration: 300
            }
            
          }
        },


    }),
    TextBox:posed.div({
      show:{
        opacity:1,
        //scale:2,
       transition: {
         opacity:{
           duration: 2500,
           ease: 'easeOut'
         }
          
        }
      },
      hidden:{
        opacity:0,
       // scale:0.1,
        transition: {
          duration: 2500,
          ease: 'easeIn'
        }
      }
    }),

  }
 }
</script>

<style lang="stylus" scoped>
#home
  background-color #f8f8f8
  @keyframes draw1
    0% 
      stroke-dasharray: 60,188;
      stroke-dashoffset: -143;
      stroke-width: 4px;
    100% 
      stroke-dasharray:248
      stroke-dashoffset: 0;
      stroke-width: 1px;
      stroke: #ff5d22
  header
    overflow hidden
    position relative
    display flex
    justify-content center
    margin-bottom 40px
    margin-top 60px 
    .video
      width 1400px
      height 600px
      display flex
      justify-content center
      align-items center
      video
        min-height 100%
        min-width 100%
      .videoText
        min-width 1000px
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        color #fff
        .anmeted
          position relative
          text-align center
          p
            position relative
            font-size 60px
            height 80px
        .anmete1
          top 80px
        .anmete2
          top 0
        .anmete3
          top -80px
        .anmete4
          top -160px
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
  .homeImgBox
    display flex
    justify-content center
    padding-top 30px
    color #494949
    .homeImgBoxCen
      width 1400px
      display flex
      justify-content space-between
    .homeImg
      width 450px
      height 526px
      padding 50px 40px 0 40px
      .title
        font-size 30px
      .content
        font-size 14px
        padding 16px 0 20px 0
      .smallMore
        position relative
        width 90px
        height 34px
        .shape
          fill: transparent;
          stroke-width: 4px
          stroke: #ff5d22
          stroke-dasharray 0 248
          
          stroke-dashoffset: 106
          &.shapeActive
            stroke-dasharray: 60 186
        .hover-text
          position absolute
          line-height 34px
          width 90px
          top 0
          cursor pointer
          text-align center
        &:hover
          .hover-text
            transition 0.5s
          .shape
            animation: draw1 0.5s linear forwards
  .select
    font-size 60px
    display flex
    justify-content center
    padding-top 80px
    .cenSelect
      width 1400px
      background-color #fff
      border-top 10px solid #ff5d22
      padding-top 50px
      color #1d2025
      .selectTitle
        .selectValue
          text-align center
        .selectLine
          display flex
          justify-content center
          .line
            height 5px
            width 100px
            background-color #ff5d22
            margin-top 20px
      .slelectMain
        display flex
        justify-content center
        padding-bottom 50px
        .slelectMainCen
          display flex
          justify-content flex-start
          flex-wrap wrap
          width 950px
          padding-top 50px
          font-size 20px
          font-weight 600
          .slelectItemBox
            width 190px
            height 224px
            display flex
            justify-content center
            align-items center
            text-align center
            .slelectItem
              .slelectImg
                width 136px
                height 136px
                margin-bottom 30px
                cursor pointer
                position relative
                .positionImg
                  position absolute
                  top 0
                  left 0
                  width 100%
                  height 100%
                  img
                    width 100%
                    height 100%
              &:hover
                color #ff5d22
  .starUp
    padding 120px 0 80px 0
    display flex
    justify-content center
    .starCen
      width 1400px
      .starCon
        color #111216
        text-align center
        font-size 30px
        padding-top 30px
      .starBtn
        display flex
        justify-content center
        margin-top 40px
        .starBtnCen
          width 130px
          height 34px
          background-color #ff5d22
          border-radius 34px
          display flex
          justify-content center
          align-items center
          cursor pointer
          color #fff
          .starBtnImg
            margin-left 10px
            img
              vertical-align middle
      .starTitle
        position relative
        display flex
        justify-content center
        .starLine
          width 100%
          height 1px
          background-color #c9c9c9
          position absolute
          top 50%
          z-index 1
        .starValue
          position relative
          font-size 50px
          text-align center
          z-index 10
          background-color #f8f8f8
          padding 0 50px
          color #282b33
          font-weight 600
</style>

