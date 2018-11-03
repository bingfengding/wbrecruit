<template>
  <div id="recruit" ref="recruit">
    <header>
      <div class="banner">
      </div>
    </header>
    <!-- <cen-header class="cenHeader" ref="cenheader" :class="isTop? 'isTop':''">
    </cen-header>
    <div :class="isTop? 'padTop':''"></div> -->
    <main>
      <div class="mainCen">
        <div class="header">
          <div class="branchBox">
            <div class="branchItem" 
              v-for="(item,index) in branchList" 
              :key="index" 
              :class="activeIndex===item.id?'active':''"
              @click="changeIndex(item.id)"
              >
              {{item.cn_name}}
            </div>
          </div>
        </div>
        <div class="content">
          <Sidebar class="sidebar" :pose="isVisible ? 'visible': 'hidden'">
            <Item class="item firstItem">
              <div class="itemHeader">
                <div class="frItem frItem1">职位</div>
                <div class="frItem frItem2">部门</div>
                <div class="frItem3 frItem">薪资</div>
              </div>
            </Item>
            <Item class="item" v-for="(item,index) in items" :key="index" :class="accordionIndex ===0?'firstItemMain':''">
              <div class="itemHeader" @click="changeItem(item.id)">
                <div class="position">{{item.cn_name}}</div>
                <div class="dep">{{item.cn_department}}</div>
                <div class="money">{{item.cn_salary}}</div>
              </div>
              <div 
                class="itemMain"
                :class="accordionIndex ==item.id ?'isshow': 'ishide'"
                :ref="'itemMain'+index"
              >
                <p class="orange">任职要求</p>
                <p v-html="item.cn_require_content" class="itemMainCon"></p>
                <p class="orange">工作内容</p>
                 <p v-html="item.cn_work_content" class="itemMainCon"></p>
                  <div class="itemMainBtn">
                    <div class="btn" @click="gotoUs(item.id)">
                      <span class="starBtnText">立刻申请</span>
                      <span class="starBtnImg"><img src="../image/more.png" alt=""></span>
                    </div>
                  </div>
              </div>
            </Item>
  
          </Sidebar>
        </div>
        <div class="imgBox">
          <div class="itemImg" v-for="(item,index) in imgBox" :key="index">
            <div class="img" @click="changeItema(index)" :class="imgItemIndex === index?'changeImg':''">
              <img :src="item.image" alt="">
            </div>
            <div class="imgTitle">{{item.title}}</div>
          </div>
        </div>
        <div class="imgContent">
          <div class="triangle">
            <div class="triangleItem">
              <div class="small"  v-show="imgItemIndex ==0"></div>
            </div>
            <div class="triangleItem">
              <div class="small"  v-show="imgItemIndex ==1"></div>
            </div>
            <div class="triangleItem">
              <div class="small"  v-show="imgItemIndex ==2"></div>
            </div>
          </div>
          <div class="imgContentCen">
            
            <div class="imgItem" v-for="(item,index) in imgItems[imgItemIndex]" :key="index">
              <div class="imgItemImgBox" :style="'backgroundImage:url('+item.image+')'">
                
              </div>
              <div class="imgItemTextBox">
                <p class="title">{{item.title}}</p>
                <div class="line"></div>
                <ul class="textValue">
                <li v-for="(value,type) in item.text" :key="type">
                  {{value.value}}
                </li>
              </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
    
  </div>
</template>

<script>
import posed from 'vue-pose'
//import cenHeader from "@/components/cenheader"
import {getdepartment,getrecruit} from "@/api/home/home"
import { setTimeout } from 'timers';
export default {
  data () {
    return {
      domain:"",
      workTop:0,
      activeIndex:0,
      accordionIndex:0,
      isVisible: false,
      isTop:false,
      cenTop:936,
      imgBox:[
        {
          image:require("../image/us/us_01.png"),
          title:"福利待遇",
          id:1,
          url:"/culture",
          cultureIndex:2,
        },{
          image:require("../image/us/us_05.png"),
          title:"员工活动",
          id:2,
          url:"/culture",
          cultureIndex:1,
        },
        {
          image:require("../image/us/us_03.png"),
          title:"企业宗旨",
          id:3,
          url:"/culture",
          cultureIndex:0,
        }
      ],
      branchList:[
          {
            cn_name:"市场部",
            en_name:"Market department",
            id:1
          }, 
      ],
      items:[
        {
          cn_department: "市场部",
          cn_name: "市场经理",
          cn_require_content: `1.大专及以上学历，电子商务、经济类、管理类、营销类或相关专业背景；<br/>
          2.熟悉互联网运营模式，善于微信、微博传播，具备掌控网络策划、退管、运营各环节的能力；
          3.具有较好的团队合作精神和协调能力、解决问题能力、沟通协调能力和研究创新能力；
          4.具有较熟练的互联网业务管理能力、开发项目计划管理能力和组织管控与流程管理能力；
          5.有较强的事业心和责任感，能承受较大的工作压力；
          6.拥有独立跟进推广合作的能力，具备综合的推广技能，有一定的谈判沟通技巧；
          7.了解互联网市场行情，具备一定的市场分析判断能力.`,
          cn_salary: "面试商谈",
          cn_work_content: `1.负责实施公司品牌及产品营销策略，能独立完成品牌及产品的策划传播方案撰写和统筹；2.挖掘和分析用户使用习惯、情感体验及感受，善于打造营销事件；3.熟悉各媒体和专业论坛，实施广告、软文传播、论坛营销、邮件营销等推广手段；
          ↵4.根据工作目标，通过在线线下推广管道的管理与维护，开展市场推广工作，提升机构的知名度；
          ↵5.根据部门工作部署，制定在线网络营销方案与线下活动方案，并组织实施；不短优化推广方案，并进行效果评估；
          ↵6.开展线下管道讯息收集、整理与分析工作，深入洞察竞争市场动态；
          ↵7.策划并组织与线下推广活动。`,
          en_department: "Market department",
          en_name: "Marketing Manager",
          en_require_content: "Waiting for update...",
          en_salary: "discuss personally ",
          en_work_content: "Waiting for update...",
          flag: "urgent,new,important",
          id: 1
        }
      ],
      imgItemIndex:0,
      imgItems:[
        [
          {
            title:"高薪选择",
            text:[
              {
                value:"高薪是选择，高效是要求；",
              },{
                value:"月休8天，起薪无上限；",
              },{
                value:"能力是你的最佳筹码，年轻、创造力和激情，是我们赋予你的标签。"
              },
            ],
            image:require("../image/us/1/1.jpg")
          },
          {
            title:"智创未来",
            text:[
              {
                value:"阶梯式薪资架构，助你步步高升",
              },{
                value:"晋升空间无限大，新世界由你造",
              },{
                value:"你想要的一切，从来虚位以待，终将如期而至"
              },
            ],
            image:require("../image/us/1/2.jpg")
          },
          {
            title:"工作环境",
            text:[
              {
                value:"紐林科集團始终坚信：快乐的员工才能成为更好的员工！",
              },{
                value:"我们拥有能够安放员工心情的创新办公室鲜活的颜色和轻松的氛围，以及可以享受曼妙午后的“偷懒区”等，都是我们炫耀的资本。",
              }
            ],
            image:require("../image/us/1/3.jpg")
          },
          {
            title:"住宿环境",
            text:[
              {
                value:"紐林科集團始终希望：让下班成为员工的解放宣言",
              },{
                value:"作为紐林科的职员之一，你将居住于城市中心的高级白领公寓，装修堪比星际酒店脏乱差并不存在，心旷神怡才是标配",
              }
            ],
            image:require("../image/us/1/4.jpg")
          },
          {
            title:"员工福利",
            text:[
              {
                value:"紐林科集團始终希望员工：在工作和生活中都能健康快乐！",
              },{
                value:"加入紐林科集團，你将拥有：20天带薪年假13薪、年终奖金、生日礼金、月团建费用、节日红包等。",
              },{
                value:"我们知道每个人都是独一无二的，因此我们提供的待遇和福利也会根据员工的需求和反馈而不断变化和调整。"
              },
            ],
            image:require("../image/us/1/5.jpg")
          },
        ],[
          {
            title:"员工培训",
            text:[
              {
                value:"松下幸之助曾经说过：“一个天才的企业家总是不失时机地把对职员的培养和训练摆上重要的议事日程。”",
              },{
                value:"紐林科集團一直延续着世界前沿企业的战略发展方针，定期为员工举行技能培训课程，强化组织核心能力，增加企业竞争力。",
              },
            ],
            image:require("../image/us/2/1.jpg")
          },
          {
            title:"春节晚会",
            text:[
              {
                value:"紐林科集團自创立以来，每年春节全体员工欢聚一堂，喜迎新春佳节，一起回味走过的365天的辉煌，展望集团美好未来。",
              },{
                value:"舞步的绚丽、情歌的纯真、爆笑的小品等都是全体员工精彩纷呈的体现。",
              },
            ],
            image:require("../image/us/2/2.jpg")
          },
          {
            title:"品牌文化日",
            text:[
              {
                value:"紐林科集團融合了世界各国文化，品牌文化日旨在为企业增加了一盏引路灯，汇集来自五湖四海的兄弟姐妹步入文化交流的舞台，促使企业文化星光璀璨",
              },{
                value:"相信自己，你可以侃侃而谈，也可以虚心受教！",
              }
            ],
            image:require("../image/us/2/3.jpg")
          },
          {
            title:"主题派对",
            text:[
              {
                value:"紐林科集團主题派对是为全体员工“释放激情”的大型娱乐活动，狂欢是我们给予员工最好的解压，为今天喝彩，为明天加油，也为梦想点灯！",
              }
            ],
            image:require("../image/us/2/4.jpg")
          },
          {
            title:"企业达人秀",
            text:[
              {
                value:"紐林科集團达人秀活动是业界首创，旨在挖掘员工身上的每一处闪光点，使得企业整体自信度飙升。作为紐林科集团的一员，",
              },{
                value:"你可以在工作中出类拔萃，也可以在舞台上与众不同！",
              },
            ],
            image:require("../image/us/2/5.jpg")
          },
          {
            title:"共享团建日",
            text:[
              {
                value:"紐林科集團团建日，鼓励员工为身体放假，体味平静生活的放松。旨在增进员工之间的沟通交流了解，增强公司凝聚力和团队合作精神，进一步推动公司企业文化建设。",
              },{
                value:"这一天，也许一起踏青，也许共进晚餐！",
              },
            ],
            image:require("../image/us/2/6.jpg")
          },
        ],[
          {
            title:"以人为本",
            text:[
              {
                value:"为员工建立舒适的工作环境，促进“开放、合作、分享、责任”的人文环境，不断提升员工的工作满意度。",
              },
            ],
            image:require("../image/us/3/1.jpg")
          },
          {
            title:"高效创新",
            text:[
              {
                value:"迎接变化，勇于创新",
              },
            ],
            image:require("../image/us/3/2.jpg")
          },
          {
            title:"诚信做人",
            text:[
              {
                value:"诚实正直，言行坦荡，表里如一，通过正确的渠道和流程，准确表达自己的观点；表达批评意见时对同事能提出相应建议，直言不讳。不传播未经证实的消息，不在背后不负责任地议论事和人，并能正面引导，对于任何意见和反馈“有则改之，无则加勉”。",
              },{
                value:"勇于承认错误，敢于承担责任，并及时改正，对损害公司利益的不诚信行为正确有效地制止。",
              }
            ],
            image:require("../image/us/3/3.jpg")
          },
          {
            title:"互利共赢",
            text:[
              {
                value:"高效的团队合作，将公司利益与员工利益紧密结合在一起，实现双赢, 共同应对, 互惠互利。",
              },
            ],
            image:require("../image/us/3/4.jpg")
          },
         
        ],
        
      ]
    }
  },

  mounted(){
    getdepartment().then(res=>{
      if(res.status===200){
        this.domain = res.data.domain
        let _base = res.data.data.department
        this.branchList = _base
        if(this.$store.getters.getDepName) {

            this.activeIndex = this.$store.getters.getDepName
          } else{
            this.activeIndex = this.branchList[0].id
          } 
          
      }
      }).then(res=>{
        let _obj = {
          id:this.activeIndex
        }
        getrecruit(_obj).then(result=>{
          if(result.status===200){
            this.items = result.data.data
            
            if(this.$store.getters.getPostName) {
              this.accordionIndex = this.$store.getters.getPostName
            } else{
              this.accordionIndex = this.items[0].id
            }
            setTimeout(() => {
              let _element = document.querySelector('.isshow')
              this.funTransitionHeight(_element)
            }, 0);
              
          }
        })
      })
      
     
      
    this.$nextTick(()=>{
      window.addEventListener('scroll', this.onScroll)
      // if(this.$refs.cenheader.$el){
      //   this.cenTop = this.$refs.cenheader.$el.offsetTop
      // }
      
      })
  },
  created(){
    
    
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
      if(this.$refs.recruit){
        this.workTop = this.$refs.recruit.offsetTop
      }
      
      if(scrolled>= (this.workTop -_windowHeight +400)){
        this.isVisible = true
      }else if(scrolled<= (this.workTop -_windowHeight)){
        this.isVisible = false
      }
    },
    goto(url,index){
      if(index !==undefined){
          this.$store.commit('setCultureIndex',index)
        }
      this.$router.push(url)
    },
    changeIndex(index){
      
      this.activeIndex = index
      let _obj = {
        id:this.activeIndex
      }
      getrecruit(_obj).then(result=>{
         if(result.status===200){
            this.items = result.data.data
            this.accordionIndex =  this.items[0].id
            setTimeout(()=>{
            let _element = document.querySelector('.isshow')
            this.funTransitionZero()
            this.funTransitionHeight(_element) 
          },0)
         }
      })
      
    },
    changeItem(index){
      this.accordionIndex = index
      setTimeout(()=>{
        let _element = document.querySelector('.isshow')
        this.funTransitionZero()
        this.funTransitionHeight(_element) 
      },50)
       
      
    },
    // 获取高度
    funTransitionHeight(element){
      if (typeof window.getComputedStyle == "undefined") return;
      var height = window.getComputedStyle(element).height;
      element.style.height = "auto";
      var targetHeight = window.getComputedStyle(element).height;
      element.style.height = height;
      element.offsetWidth;
      element.style.height = targetHeight;
    },
    // 改变高度为0
    funTransitionZero(){
      let _arr = document.querySelectorAll('.ishide')
      _arr.forEach(
        (item,index)=>{
          item.style.height  = 0
        }
      )

    },
    changeItema(index){
      if(index !== this.imgItemIndex){
        this.imgItemIndex = index
        console.log( this.imgItemIndex)
      }
    },
    gotoUs(id){
      this.$store.commit('setPostName1',id)
      this.$router.push('/us')
    }

  },
  components: {
    //cenHeader,
    Sidebar: posed.div({
      visible: {
        beforeChildren: true,
        staggerChildren: 100
      },
      hidden: {
        afterChildren: true,
        staggerChildren: 100
      }
    }),
    Item: posed.div({
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 20 }
    }),
    isContent:posed.div({
      transition:{
        ease: 'easeOut',
        duration: 300
      },
      isshow:{
        height:'auto',
      },
      ishide:{
        height: 0,
      }
    })
  }
}
</script>

<style lang='stylus' scoped>
#recruit
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
      background url("../image/recruit/banner.jpg") no-repeat
      display flex
      justify-content center
      padding-top 70px
      .addUs
        font-size 60px
        font-weight 600
  // .cenHeader
  //   width 100%
  //   position relative
  //   &.isTop
  //     position fixed
  //     top 0
  // .padTop
  //   padding-top 90px
  main
    display flex
    justify-content center
    .mainCen
      width 1400px
      .imgBox
        display flex
        justify-content space-around
        padding 40px 0
        text-align center
        .itemImg
          color #1e2127
          .img
            display flex
            justify-content center
            margin-bottom 30px
            cursor pointer
            border-radius 50%
            width 160px
            height 160px
            overflow hidden
            border 6px solid transparent
            &.changeImg
              border 6px solid #ff5d22
            img
              width 160px
              height 160px
              transform scale(1)
              transition all 0.2s ease-in
          &:hover
            color #ff5d22
            .img
              img
                transform scale(1.3)

          .imgTitle
            font-size 24px
      .imgContent
        border-top 10px solid #ff5d22
        background-color #fff
        .triangle
          display flex
          justify-content space-around
          position relative
          height 20px
          top -30px
          overflow hidden
          .triangleItem
            width 160px
            display flex
            justify-content center
            .small
              width 30px
              height 30px
              background-color #ff5d22
              transform rotateZ(45deg)
              position relative
              top 10px
        .imgContentCen
          display flex
          justify-content flex-start
          flex-wrap wrap
          .imgItem
            width 700px
            height 200px
            display flex
            justify-content space-between
            margin-bottom 20px
            .imgItemImgBox
              width 250px
              height 200px
            .imgItemTextBox
              width 450px
              font-size 14px
              padding 14px
              padding-right 40px
              .title
                font-size 24px
              .line
                height 2px
                width 100px
                background-color #ff5d22
                margin 10px 0
              .textValue
                padding-left 20px
                li
                  padding-bottom 6px
                  list-style-type disc
      .header
        border-top 10px solid #ffffff
        border-bottom 10px solid #ff5d22
        padding 34px 160px
        background-color #ffffff
        display flex
        justify-content center
        .branchBox
          display flex
          justify-content flex-start
          flex-wrap wrap
          width 1080px
          .branchItem
            min-width 160px
            height 44px
            font-size 20px
            font-weight 600
            margin 0 10px
            line-height 44px
            border-radius 50px
            text-align center
            cursor pointer
            border 1px solid transparent
            &.active
              border 1px solid #ff5d22
              background-color #ff5d22
              color #fff
      .content
        display flex
        justify-content center
        background-color #ffffff
        padding-top 30px
        padding-bottom 60px
        .sidebar
          width 960px
          .item
            border-bottom 1px solid #b1b1b1
            overflow hidden
            .itemHeader
              display flex
              justify-content space-between
              height 70px
              line-height 70px
              cursor pointer
              transition all 0.5s ease
              z-index 10
              background-color #ffffff
              margin-bottom 10px
              .position
                font-weight 600
                font-size 30px
                min-width 300px
              .dep
                font-size 20px
                min-width 160px
              .money
                font-size 16px
                min-width 140px
            .itemMain
              overflow hidden
              z-index 1
              transition all 0.5s ease
              .orange
                font-size 18px
                color #ff5d22
                line-height 32px
              .itemMainCon
                padding-bottom 40px
                color #222222
                font-size 14px
                line-height 24px
              &.isshow
                height auto
              &.ishide
                height 0
            .itemMainBtn
              padding-bottom 30px
              .btn
                width 140px
                height 34px
                background-color #ff5d22
                border-radius 34px
                display flex
                justify-content center
                align-items center
                cursor pointer
                color #ffffff
                .starBtnImg
                  margin-left 10px
                  img
                    vertical-align middle
            &.firstItem
              border-bottom 0
              font-size 14px
              .itemHeader
                display flex
                justify-content space-between
                line-height 30px
                height 30px
                .frItem
                  font-size 18px
                  min-width 160px
                .frItem3
                  min-width 140px
                .frItem1
                  min-width 300px
</style>
