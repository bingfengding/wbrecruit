<template>
  <div id="welfare" ref="welfare">
    <div class="title">
      <p>高薪是选择，高效是要求；月休8天，起薪无上限；能力是你的最佳筹码，年轻、创造力和激情，是我们赋予你的标签。</p>
    </div>
    <div class="main">
      <div class="mainCen">
        <div class="item" :class="index%2===0 ? 'textRight':'textLeft'" v-for="(item,index) in list" :key="index">
          <div class="imgBox animated" v-if="index%2===0" :class="scrolled>(baseTop+index*300)?'fadeInLeft':'fadeOutDown'">
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
              <ul>
                <li v-for="(type,key) in item.text" :key="key">{{type.value}}</li>
              </ul>
              
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
export default {
  data () {
    return {
      list:[
        {
          image:require("../../image/culture/welfare/1.jpg"),
          title:"高薪选择",
          text:[
            {
              value:'● 高薪是选择，高效是要求；'
            },{
              value:'● 月休8天，起薪无上限；'
            },{
              value:'● 能力是你的最佳筹码，年轻、创造力和激情，是我们赋予你的标签。'
            },
          ],
          id:1,
        },{
          image:require("../../image/culture/welfare/2.jpg"),
          title:"智创未来",
          text:[
            {
              value:'● 阶梯式薪资架构，助你步步高升'
            },{
              value:'● 晋升空间无限大，新世界由你造'
            },{
              value:'● 你想要的一切，从来虚位以待，终将如期而至'
            },
          ],
          id:2,
        },{
          image:require("../../image/culture/welfare/3.jpg"),
          title:"工作环境",
          text:[
            {
              value:'● 紐林科集團始终坚信：快乐的员工才能成为更好的员工！'
            },{
              value:"● 我们拥有能够安放员工心情的创新办公室，鲜活的颜色和轻松的氛围，以及可以享受曼妙午后的“偷懒区”等，都是我们炫耀的资本。"
            }
          ],
          id:3,
        },{
          image:require("../../image/culture/welfare/4.jpg"),
          title:"住宿环境",
          text:[
            {
              value:'● 紐林科集團始终希望：让下班成为员工的解放宣言'
            },{
              value:'● 作为紐林科的职员之一，你将居住于城市中心的高级白领公寓，装修堪比星际酒店，脏乱差并不存在，心旷神怡才是标配'
            }
          ],
          id:4,
        },{
          image:require("../../image/culture/welfare/5.jpg"),
          title:"员工福利",
          text:[
            {
              value:'● 紐林科集團始终希望员工：在工作和生活中都能健康快乐！'
            },{
              value:'● 加入紐林科集團，你将拥有：20天带薪年假、13薪、年终奖金、生日礼金、月团建费用、节日红包等。'
            },{
              value:'● 我们知道每个人都是独一无二的，因此我们提供的待遇和福利也会根据员工的需求和反馈而不断变化和调整。'
            }
          ],
          id:5,
        }
      ],
      baseTop:250,
      scrolled:0,
      workTop:0
    }
    },
    created(){
      this.scrolled = this.$store.getters.getTop
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)

    },
    methods:{
        onScroll(){
        let scrolled = document.documentElement.scrollTop || document.body.scrollTop
        let _windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        if(this.$refs.welfare){
          this.workTop = this.$refs.welfare.offsetTop
          this.baseTop = this.workTop - _windowHeight
          this.scrolled = scrolled
          this.$store.commit('setTop',scrolled)
        }
      },
    },
  components: {

    }
}
</script>

<style lang='stylus' scoped>
#welfare
  .title
    display flex
    justify-content center
    padding-top 50px
    p
      width 800px
      font-size 14px
      line-height 24px
      text-align center
  .main
    display flex
    justify-content center
    padding 60px 0
    .mainCen
      width 1400px
      background-color #ffffff
      border-top 16px solid #ff5d22
      overflow hidden
      position relative
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
              li
                width 560px
                line-height 24px
                padding 4px 0
            
        &.textRight
          .text
            padding-left 50px
            .textCen
              text-align left
              .line
                margin-left 4px
        &.textLeft
          .text
            justify-content flex-end
            padding-right 50px
            .textCen
              .lineBox
                display flex
                justify-content flex-end
                padding-right 6px
              .titleBoxText
                justify-content flex-end
              .textCon
                text-align right
              
 
</style>
