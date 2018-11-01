<template>
  <div id="value" ref="value">
    <header>
      <div class="banner">
        
      </div>
    </header>
    <!-- <cen-header class="cenHeader" ref="cenheader" :class="isTop? 'isTop':''">
    </cen-header>
    <div :class="isTop? 'padTop':''"></div> -->
  
    <div class="main">
      <div class="mainCen" ref="valueMainCen">
        <div class="item" :class="index%2===0 ? 'textRight':'textLeft'" v-for="(item,index) in list" :key="index">
          <div class="imgBox animated" v-if="index%2===0" :class="scrolled>(baseTop+index*300)?'fadeInLeft':''">
            <img :src="item.image" alt="">
          </div>
          <div class="text animated delay-05s" :class="scrolled>(baseTop+index*300)? (index%2===0?'fadeInRight':'fadeInLeft'):''">
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
              <!-- <p v-for="(type,key) in item.text" :key="key">
                {{type.text}}</p> -->
            </div>
            </div>
            
          </div>
          <div 
          class="imgBox animated" 
          v-if="index%2!==0"
          :class="scrolled>(baseTop+index*300)?'fadeInRight':''"
          >
            <img :src="item.image" alt="">
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
// import cenHeader from "@/components/cenheader"
export default {
  data () {
    return {
      isTop:false,
      cenTop:936,
      list:[
        {
          image:require("../image/value/value_01.jpg"),
          title:"团队合作",
          text:"专业优秀的团队，一触即发的响应;",
          id:1,
        },{
          image:require("../image/value/value_02.jpg"),
          title:"客户第一",
          text:"第一是客户利益，第二是员工利益；",
          id:2,
        },{
          image:require("../image/value/value_03.jpg"),
          title:"拥抱变化",
          text:"创造是指想新的，创新是指做新的；",
          id:3,
        },{
          image:require("../image/value/value_04.jpg"),
          title:"互利共赢",
          text:"共同发展的意识，缔造双赢的目标；",
          id:4,
        },{
          image:require("../image/value/value_05.jpg"),
          title:"诚信务实",
          text:"待人处事的真诚，务实创新的精神；",
          id:5,
        },{
          image:require("../image/value/value_06.jpg"),
          title:"激情敬业",
          text:"洞察敏锐的意识，谦虚严谨的态度。",
          id:6,
        },
      ], 
      baseTop:0,
      scrolled:0,
      workTop:0,
    }
  },
  created(){
     
    },
  mounted(){
    this.$nextTick(()=>{
      window.addEventListener('scroll', this.onScroll)
      // this.cenTop = this.$refs.cenheader.$el.offsetTop
       
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
      let _windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        if(this.$refs.value){
          this.workTop = this.$refs.value.offsetTop
          console.log(this.workTop)
          this.baseTop = this.workTop - _windowHeight
          console.log(this.baseTop)
          this.scrolled = scrolled
        }
    },
  },
  components: {
    //cenHeader
  }
}
</script>

<style lang='stylus' scoped>
#value
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
      background url("../image/value/banner.jpg") no-repeat
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
    padding 60px 0
    .mainCen
      width 1400px
      border-top 10px solid #ff5d22
      background-color #fff
      .item
        display flex
        justify-content center
        .imgBox
          width 700px
          height 300px
          opacity 0
          img
            width 100%
            height 100%
        .text
          width 700px
          display flex
          align-items center
          opacity 0
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
              margin-top 40px
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
            


</style>
