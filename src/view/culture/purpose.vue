<template>
  <div id="purpose" ref="purpose">
    <div class="title">
      <p>紐林科集團旨在构建未来的全球商业格局，在实现企业战略目标的进程中，始终贯彻开拓进取和追求卓越的企业精神。在激烈的市场竞争中抢占制高点、在反思中实现超越自我、在学习中实现超越平庸，让品牌在百舸争流的市场环境中不断脱颖而出。</p>
    </div>
    <div class="main">
      <div class="mainCen">
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
              <p v-for="(type,key) in item.text" :key="key">{{type.value}}</p>
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
          image:require("../../image/culture/purpose/1.jpg"),
          title:"以人为本",
          text:[
            {
              value:'为员工建立舒适的工作环境，促进“开放、合作、分享、责任”的人文环境，不断提升员工的工作满意度。'
            },
          ],
          id:1,
        },{
          image:require("../../image/culture/purpose/2.jpg"),
          title:"高效创新",
          text:[
            {
              value:'迎接变化，勇于创新'
            }
          ],
          id:2,
        },{
          image:require("../../image/culture/purpose/3.jpg"),
          title:"诚信做人",
          text:[
            {
              value:'诚实正直，言行坦荡，表里如一，通过正确的渠道和流程，准确表达自己的观点；表达批评意见时对同事能提出相应建议，直言不讳。不传播未经证实的消息，不在背后不负责任地议论事和人，并能正面引导，对于任何意见和反馈“有则改之，无则加勉”。'
            },{
              value:"勇于承认错误，敢于承担责任，并及时改正，对损害公司利益的不诚信行为正确有效地制止。"
            }
          ],
          id:3,
        },{
          image:require("../../image/culture/purpose/4.jpg"),
          title:"互利共赢",
          text:[
            {
              value:'高效的团队合作，将公司利益与员工利益紧密结合在一起，实现双赢, 共同应对, 互惠互利。'
            }
          ],
          id:4,
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
        if(this.$refs.purpose){
          this.workTop = this.$refs.purpose.offsetTop
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
#purpose
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
              p
                width 600px
                margin-bottom 20px
                line-height 24px
                &:last-of-type
                  margin-bottom 0
            
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
