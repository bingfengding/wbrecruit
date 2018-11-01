<template>
  <div id="header">
    <div class="main">
      <div class="logoBox">
        <router-link to="/home">
          <img v-lazy="logoImg" alt="">
        </router-link>
        </div>
      <div class="menu">
        <div class="menuTop">
          <div class="fenBox">
            <div class="bdsharebuttonbox" data-tag="share_1">
              <a class="bds_tsina" data-cmd="tsina"></a>
              <a class="bds_linkedin" data-cmd="linkedin"></a>
              <a class="bds_twi" data-cmd="twi"></a>
              <a class="bds_fbook" data-cmd="fbook"></a>
            </div>
          </div>
          <!-- <div class="globalization">
            <div class="zh btn" :class="isZh?'isActive':''">中</div>
            <div class="en btn" :class="!isZh?'isActive':''">EN</div>
          </div> -->
          
        </div>
        <div class="menuBottom" :style="colorFFF?'color:#fff':''">
           <div class="smallMore" v-for="(item,index) in menus" :key="index">
            <svg viewBox="0 0 90 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="34" width="90" :class="isIndex===index?'shapeActive':''"></rect>
            </svg>
              <div class="hover-text" @click="goto(index)">{{item.msg}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isZh:true,
      logoImg:require("../image/logo.png"),
      isIndex:-1,
      menus:[
        {
          msg:"公司信息",
          id:1,
          url:"/info",
          name:"info"
        },{
          msg:"企业背景",
          id:2,
          url:"/back",
          name:"back"
        },{
          msg:"企业文化",
          id:3,
          url:"/culture",
          name:"culture"
        },{
          msg:"核心价值",
          id:4,
          url:"/value",
          name:"value"
        },{
          msg:"业务范围",
          id:5,
          url:"/range",
          name:"range"
        },{
          msg:"社会招聘",
          id:6,
          url:"/recruit",
          name:"recruit"
        },{
          msg:"联系我们",
          id:7,
          url:"/us",
          name:"us"
        },
      ],
      colorFFF:false
    }
  },
 computed:{
    nameIndex(){
      return this.$store.getters.getName
    }
  },
  watch:{
    nameIndex(newValue,oldValue){
      if(newValue=='home'){
         this.isIndex = -1
         return
      }
      this.menus.forEach((item,index)=>{
        if(item.name == newValue){
          this.isIndex = index
          
        }
        return false
        
      })
    },
    $route(to,from){
      if(to.name==='home'){
        this.colorFFF = true
      }else{
        this.colorFFF = false
      }
    }
  },
  created(){
    let _name = this.$store.getters.getName
    this.menus.forEach((item,index)=>{
      if(item.name == _name){
        this.isIndex = index
        
      }
      return false
      this.isIndex = -1
      
    })
  },
  mounted(){
    this.$nextTick(()=>{
      window._bd_share_config = {
        "common":{
          "bdSnsKey":{},
          "bdText":"",
          "bdMini":"2",
          "bdPic":"",
          "bdStyle":"0",
          "bdSize":"16"
        },
        "share":{}
      };
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.src='https://www.newlinkenterprise.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)
      document.body.appendChild(s)
    })
  },
  methods:{
    goto(index){
      let _url = this.menus[index].url
      this.$router.push(_url)
    }
  },
  components: {

  }
}
</script>

<style lang='stylus' scoped>

#header
  display flex
  justify-content center
  color #27262d
  padding-bottom 50px
  @keyframes draw1
    0% 
      stroke-dasharray: 60,188;
      stroke-dashoffset: -143;
      stroke-width: 4px;
    100% 
      stroke-dasharray:248
      stroke-dashoffset: 0;
      stroke-width: 1px;
      stroke: #ff5d22;
  .main
    width 1386px
    display flex
    justify-content space-between
    align-items flex-end
    .logoBox
      width 170px
      height 137px
      img 
        width 170px
        height auto
    .menu
      .menuTop
        display flex
        justify-content flex-end
        margin-bottom 50px
        .globalization
          display flex
          justify-content flex-end
          margin-left 60px
          .btn
            width 40px
            height 40px
            border 1px solid transparent
            line-height 40px
            text-align center
            &.isActive
              border 1px solid #ffffff
        .fenBox
          display flex
          align-items flex-end
          //margin-right 60px
          .bdsharebuttonbox
            display flex
            align-items flex-end
            a
              padding-left 0
              margin-left 20px
              &:first-of-type
                margin-left 0
            .bds_tsina
              width 22px
              height 17px
              background-image url("../image/logo_7.png")
              background-size 100% 100%
              background-position 0
            .bds_linkedin
              width 16px
              height 16px
              background-image url("../image/logo_8.png")
              background-size 100% 100%
              background-position 0
            .bds_twi
              width 16px
              height 13px
              background-image url("../image/logo_9.png")
              background-size 100% 100%
              background-position 0
            .bds_fbook
              width 8px
              height 16px
              background-image url("../image/logo_10.png")
              background-size 100% 100%
              background-position 0
      .menuBottom
        display flex
        justify-content flex-end
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
</style>
<style lang="stylus">

</style>
