<template>
  <div id="footer">
    <features v-show="featuresShow">
    </features>
    <footer>
      <div class="center">
        <div class="cenBox"> 
          <div class="menus">
            <div class="menu">
              <div class="item" v-for="(item,index) in menus" :key="index">
                <div class="menuTitle" @click="goto(item.url)">
                  {{item.value}}
                </div>
                <div v-if="item.box" class="menuItemBox">
                  <div v-for="(type,key) in item.box" :key="key" class="menuItem" @click="goto(type.url,type.cultureIndex)">
                    {{type.value}}
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
          <div class="logoBox" @click="goto('/home')">
            <img src="../image/logo_footer.png" alt="">
          </div>
        </div>
       
      </div>
    </footer>
  </div>
</template>

<script>
import features from "@/components/features"
export default {
  data () {
    return {
      featuresShow:true,
      menus:[
        {
          value:"招贤纳士",
          url:"/recruit",
          id:6,
        },
        {
          value:"联系我们",
          box:[{
            value:"联系方式",
            url:"/us",
            id:1,
          }],
          url:"/us",
          id:7,
        },
        
        {
          value:"企业背景",
          url:"/back",
          id:2,
        },
         {
          value:"企业文化",
          box:[
            {
              value:"企业宗旨",
              url:"/culture",
              cultureIndex:0,
              id:1,
            },{
              value:"员工活动",
              url:"/culture",
              cultureIndex:1,
              id:2,
            },{
              value:"福利待遇",
              url:"/culture",
              cultureIndex:2,
              id:3,
            },
          ],
          url:"/culture",
          id:3,
        },
         {
          value:"核心价值",
          url:"/value",
          id:4,
        },
         {
          value:"业务范围",
          url:"/range",
          id:5,
        },
         {
          value:"公司信息",
          box:[{
            value:"公司愿景与理念",
            url:"/info",
            id:1,
          }],
          url:"/info",
          id:1,
        }, 
         
      ]
    }
  },
  computed:{
    nameIndex(){
      return this.$store.getters.getName
    }
  },
  watch:{
    nameIndex(newValue,oldValue){
      if(newValue =="us" || newValue == "recruit" || newValue=="home"){
        this.featuresShow = false
      }else{
        this.featuresShow = true
      } 
    }
  },
  created(){
    let _name = this.$store.getters.getName
    if(_name =="us" || _name == "recruit" || _name=="home"){
        this.featuresShow = false
      }else{
        this.featuresShow = true
      }
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
    goto(url,index){
      if(index !==undefined){
        this.$store.commit('setCultureIndex',index)
      }
      console.log(url)
      this.$router.push(url)
    }
  },
  components: {
    features
  }
}
</script>

<style lang='stylus' scoped>
#footer
  footer
    display flex
    justify-content center
    color #fff
    background-color #f8f8f8
    font-size 14px
    .center
      width 1400px
      background-color #1e2127
      padding 50px 0 30px 0
      display flex
      justify-content center
      .cenBox
        display flex
        justify-content space-between
        .logoBox
          width 170px
          cursor pointer
          img 
            width 100%
            height auto
        .menus
          .fenBox
            display flex
            align-items flex-end
            margin-right 60px
            margin-top 20px
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
                background-image url("../image/logo_3.png")
                background-size 100% 100%
                background-position 0
              .bds_linkedin
                width 16px
                height 16px
                background-image url("../image/logo_4.png")
                background-size 100% 100%
                background-position 0
              .bds_twi
                width 16px
                height 13px
                background-image url("../image/logo_5.png")
                background-size 100% 100%
                background-position 0
              .bds_fbook
                width 8px
                height 16px
                background-image url("../image/logo_6.png")
                background-size 100% 100%
                background-position 0
          .menu
            display flex
            justify-content center
            .item
              width 110px
              .menuItemBox
                font-size 12px
                padding-top 15px
                .menuItem
                  padding 5px 0
                  cursor pointer
                  &:hover
                    color #ff5d22
              .menuTitle
                cursor pointer
                &:hover
                  color #ff5d22

 
</style>
