<template>
  <div id="features" ref="features">
    <div class="center">
    <div class="sidebar" >
      <div class="title">
        
        <div class="titleText">特色工作</div>
        <div class="titleCen">
          <div class="titleLine"></div>
        </div>
        
      </div>
      <div class="itemBoxs"> 
  
        <Sidebar  class="itemBox" :pose="isVisible ? 'visible': 'hidden'">
          <Item class="item firstItem">
            <div class="itemHeader">
              <div class="frItem frItem1">职位</div>
              <div class="frItem frItem2">部门</div>
              <div class="frItem3 frItem">薪资</div>
            </div>
          </Item>
          <Item class="item" v-for="(item,index) in items" :key="index" @click.native="gotoWork(item.id,item.department_id)">
            <div class="itemHeader">
              <div class="position">{{item.cn_name}}</div>
              <div class="dep">{{item.cn_department}}</div>
              <div class="money">{{item.cn_salary}}</div>
            </div>
          </Item>
        </Sidebar>
        
        <Sidebar  class="itemBox" :pose="isVisible ? 'visible': 'hidden'">
          <Item class="item firstItem">
            <div class="itemHeader">
              <div class="frItem frItem1">职位</div>
              <div class="frItem frItem2">部门</div>
              <div class="frItem3 frItem">薪资</div>
            </div>
          </Item>
          <Item class="item" v-for="(item,index) in items1" :key="index" @click.native="gotoWork(item.id,item.department_id)">
            <div class="itemHeader">
              <div class="position">{{item.cn_name}}</div>
              <div class="dep">{{item.cn_department}}</div>
              <div class="money">{{item.cn_salary}}</div>
            </div>
          </Item>
        </Sidebar>
      </div>
    
    </div>
    <div class="moreWork">
      <div class="cenMore" @click="goto">
        <span>查看更多工作</span>
        <img src="../image/more.png" alt="">
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import posed from 'vue-pose'
import {getrecruit} from "@/api/home/home"
export default {
  data () {
    return {
      workTop:0,
      isVisible: false,
      isIndex:0,
      items: [{
          cn_name:"市场经理",
          cn_department:"市场部",
          cn_salary:"面议商谈",
          id:1,
          department_id:1,
        }
      ],
      items1: [{
          cn_name:"市场经理",
          cn_department:"市场部",
          cn_salary:"面议商谈",
          id:1,
          department_id:1,
        }
      ],
    }
  },
  created(){
    getrecruit().then(res=>{
      if(res.status ==200 ){
        if(res.data.code==1){
          let _data = res.data.data
          let _len = _data.length
          let _len1 = Math.ceil(_len/2)
          this.items = _data.slice(0,_len1)
          this.items1 = _data.slice(_len1,_len)
        }
      }
    })
  },
  mounted() {
    this.$nextTick(()=>{
      window.addEventListener('scroll', this.onScroll)
      
    })
    
  },
  methods:{
    onScroll(){
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      let _windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      if(this.$refs.features){
        this.workTop = this.$refs.features.offsetTop
      }
      if(scrolled>= (this.workTop -_windowHeight +300)){
        this.isVisible = true
      }else if(scrolled<= (this.workTop -_windowHeight)){
        this.isVisible = false
      }
    },
    goto(){
      this.$router.push("/recruit")
    },
    gotoWork(index,key){
      this.$store.commit('setPostName',index)
      this.$store.commit('setDepName',key)
      this.$router.push("recruit")
    }
  },
  components: {
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
    })
  }
}
</script>

<style lang='stylus' scoped>
#features
  display flex
  justify-content center
  color #fff
  background-color #f8f8f8
  .center
    width 1400px
    background-color #ffffff
    border-top 10px solid #ff5d22
    display flex
    justify-content center
    padding-top 50px
    flex-wrap wrap
    .sidebar
      width 100%
      .title
        font-size 50px
        font-weight 600
        text-align center
        .titleText
          margin-bottom 20px
          color #1e1e1e
        .titleCen
          display flex
          justify-content center
          margin-bottom 20px
          
          .titleLine
            width 100px
            height 5px
            background-color #ff5d22
      .itemBoxs
        width 100%
        display flex
        justify-content space-around

        .itemBox
          width 600px
          .item
            height 70px
            border-bottom 1px solid #b1b1b1
            line-height 70px
            cursor pointer
            color #363636
            .itemHeader
              display flex
              justify-content space-between
              
              .position
                font-weight 600
                font-size 24px
                min-width 230px
                text-overflow ellipsis
              .dep
                font-size 20px
                min-width 100px
              .money
                font-size 16px
                min-width 160px
            &.firstItem
              border-bottom 0
              line-height 30px
              height 30px
              cursor auto
              .itemHeader
                display flex
                justify-content space-between
                .frItem
                  font-size 16px
                  min-width 160px
                .frItem1
                  min-width 230px
                .frItem2
                  min-width 100px
                .frItem3
                  min-width 160px
    .moreWork
      width 100%
      display flex
      justify-content center
      padding 50px 0 60px 0       
      .cenMore
        width 164px
        height 34px
        line-height 34px
        background-color #ff5d22
        border-radius 34px
        font-size 14px
        vertical-align middle
        display flex
        justify-content center
        align-items center
        cursor pointer
        img
          vertical-align middle
          width 15px
          height 16px
          margin-left 10px
</style>
