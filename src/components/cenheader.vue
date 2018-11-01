<template>
  <div id="cenheader">
    <div class="center">
      <div class="imgBox">
        <router-link to="/home">
          <img src="../image/logo_2.png" alt="">
        </router-link>
      </div>
    <div class="menu">
      <div class="menuItem"  v-for="(item,index) in menus" :key="index" :class="index==1?'about':''">
        <div class="smallMore">
          <svg viewBox="0 0 90 34" version="1.1" xmlns="http://www.w3.org/2000/svg" v-show="item.name !=='about'">
            <rect class="shape" height="34" width="90" :class="isIndex === item.id?'shapeActive':''"></rect>
          </svg>
          <div class="hover-text" @click="item.name !=='about' ?goto(index):''">
            {{item.msg}}
          </div>
        </div>
        <div class="aboutList">
          <div class="smallMore" v-for="(value,type) in item.list" :key="type">
            <svg viewBox="0 0 90 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="34" width="90" :class="isIndex===value.id?'shapeActive':''"></rect>
            </svg>
            <div class="hover-text" @click="goto(index,type)">
              {{value.msg}}
            </div>
          </div>
        </div>
      </div>
      <div class="fenBox">
        <div class="bdsharebuttonbox" data-tag="share_1">
          <a class="bds_tsina" data-cmd="tsina"></a>
          <a class="bds_linkedin" data-cmd="linkedin"></a>
          <a class="bds_twi" data-cmd="twi"></a>
          <a class="bds_fbook" data-cmd="fbook"></a>
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
      isIndex:-1,
      menus:[
        {
          msg:"招贤纳士",
          id:6,
          url:"/recruit",
          name:"recruit"
        },
        {
          msg:"关于我们",
          id:1,
          name:"about",
          list:[
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
            }
          ]
        },
        {
          msg:"联系我们",
          id:7,
          url:"/us",
          name:"us"
        },
      ],
      menusa:[
        {
          msg:"招贤纳士",
          id:6,
          url:"/recruit",
          name:"recruit"
        },
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
        },
        {
          msg:"联系我们",
          id:7,
          url:"/us",
          name:"us"
        },
      ],
    }
  },
  computed:{
    // nameIndex(){
    //   return this.$store.getters.getName
    // }
  },
  watch:{
    $route(newValue,oldValue){
      this.menusa.forEach((item,index)=>{
        if(newValue.name === item.name){
          this.isIndex = item.id
        }
      })
      // this.menus.forEach((item,index)=>{
      //   if(item.name == newValue){
      //     this.isIndex = index
          
      //   }
      //   return false
      //   this.isIndex = -1
        
      // })
    }
  },
  created(){
    // let _name = this.$store.getters.getName
    // this.menus.forEach((item,index)=>{
    //   if(item.name == _name){
    //     this.isIndex = item.id
    //   }
    //   return false
    //   this.isIndex = -1
      
    // })
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
    goto(index,key){

      if(index !== 1){
        let _url = this.menus[index].url
        this.isIndex = this.menus[index].id
        this.$router.push(_url)
      }else  if(key !== undefined){
        let _url = this.menus[1].list[key].url
        this.$router.push(_url)
      }
      
    }
  },
  components: {

    }
}
</script>

<style lang='stylus' scoped>
#cenheader
  background url("../image/bar.png") no-repeat
  background-size 100% 100%
  height 90px
  display flex
  justify-content center
  z-index 1000
  .center
    width 1400px
    display flex
    justify-content space-between
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
    .imgBox
      padding-top 5px
    .menu
      display flex
      justify-content flex-end
      align-items flex-start
      padding-bottom 20px
      .fenBox
        display flex
        align-items flex-end
        padding-top 20px
        margin-left 40px
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
      .menuItem
        padding-top 20px
        &.about
          .aboutList
            margin-top 16px
            height 0
            transition height 0.3s ease-in
            background-color #fff
          &:hover
            .aboutList
              height 190px
        .aboutList
          height 0
          overflow hidden
        .smallMore
          position relative
          width 90px
          height 34px
          margin 0 20px
          .shape
            fill: transparent
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
