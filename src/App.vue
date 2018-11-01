<template>
  <div id="app">
    <!-- <bg-header class="bgHeader"></bg-header> -->
     <cen-header class="cenHeader" ref="cenheader">
    </cen-header>
    <transition name="el-fade-in" mode="out-in">
      <router-view/>
    </transition>
    <bg-footer></bg-footer>
    <callme class="callme"></callme>
    <div class="model" v-show="showModel" @click="hideWechat">
      <div class="wechat">
        <img src="./image/wechater.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import bgFooter from "./components/footer"
import bgHeader from "./components/header"
import callme from "./components/callme"
import cenHeader from "./components/cenheader"
export default {
  name: 'App',
  data () {
    return {
      featuresShow:true,
      start:0,
      showModel:false,
      isCenter:false,
    }
  },
  computed:{
    ...mapGetters([
      'getShowModel'
    ])
  },
  watch:{
    getShowModel:function(value){
      this.showModel = value
    },
    $route(to,from){
      if(from.name ==='us'){
       this.$store.commit('setPostName1',0)
      }
    }
  },

  components:{
    bgFooter,
    bgHeader,
    callme,
    cenHeader
  },
  created(){
    let _name = window.sessionStorage.getItem('name')
    this.$store.commit('setName',_name)
  },
  mounted(){
    this.$nextTick(()=>{
     window.addEventListener('scroll', this.onScroll)
      
    })
  },
  methods:{
    onScroll(){
      this.$store.commit('setShowModel',false)
      this.showModel = false
    },
    hideWechat(){
      this.$store.commit('setShowModel',false)
      this.showModel = false
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  position relative
  color #252525
  overflow hidden
  min-width 1400px
  .bgHeader
    position absolute
    top 0
    left 0
    right 0
    z-index 100
  .callme
    z-index 2000
  .model
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color rgba(0,0,0,0.8)
    z-index 10000
    display flex
    justify-content center
    align-items center
  .cenHeader
    position fixed
    top 0
    width 100%
</style>

