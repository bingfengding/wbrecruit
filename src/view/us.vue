<template>
  <div id="us">
    <header>
      <div class="banner">
        
      </div>
    </header>

    <main>
      <div class="mainCen">
        <div class="contact">
          <div class="email">
            <p class="title">
              电子邮件:
            </p>
            <p class="content">
              nletpse@gmail.com
            </p>
            <div class="emailBox">
              <div class="emailBtnCen" @click="email">
                <span class="emailBtnText">联系我们</span>
                <span class="emailBtnImg"><img src="../image/more.png" alt=""></span>
              </div>
            </div>
          </div>
          <div class="skype">
            <p class="title">
              skype:
            </p>
            <p class="content">
              nletpse@maxoof.net
            </p>
            <div class="skypeBox">
              <div class="skypeBtnCen" @click="skype">
                <span class="skypeBtnText">联系我们</span>
                <span class="skypeBtnImg"><img src="../image/more.png" alt=""></span>
              </div>
            </div>
          </div>
        </div>
        <div class="up">
          <div class="upCen">
            <p class="title">
              您是我们要找的那颗<span class="star">闪耀之星</span>吗？立刻上传简历
            </p>
            <div class="formBox">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="面试职位：" prop="note">
                  <el-input v-model="ruleForm.note" 
                  size="small"
                  maxlength="20"
                  ></el-input>
                </el-form-item>
                <el-form-item label="姓名：" prop="name">
                  <el-input v-model="ruleForm.name" 
                  size="small"
                  maxlength="20"
                  ></el-input>
                </el-form-item>
               
                 <el-form-item label="电子邮箱：" prop="email">
                  <el-input v-model="ruleForm.email"
                  size="small"
                  ></el-input>
                </el-form-item>
                 <el-form-item label="电话号码：" prop="phone">
                  <el-input v-model="ruleForm.phone"
                  type="number"
                  min="0"
                  max="999999999999"
                  maxlength=11
                  size="small"
                  ></el-input>
                </el-form-item>
                <el-form-item label="QQ：" prop="qq">
                  <el-input v-model="ruleForm.qq"
                  size="small"
                  maxlength="12"
                  ></el-input>
                </el-form-item>
               
                <el-form-item label="微信：" prop="wechat">
                  <el-input v-model="ruleForm.wechat"
                  size="small"
                  maxlength="12"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Skype：" prop="skype">
                  <el-input v-model="ruleForm.skype"
                  size="small"
                  maxlength="12"
                  ></el-input>
                </el-form-item>
                 <el-form-item label="上传简历：" prop="file">
                  <el-upload
                    class="uploader"
                    ref="upload"
                    action="api/index/upload"
                    :show-file-list = "false"
                    :auto-upload = "false"
                    :on-success	= "success"
                    :on-change = "uploadChange"
                    :limit = 1
                  >
                  <div class="btnBoxImg">
                    <div class="btnText" v-if="fileList.length">
                      {{fileList[0].name}}
                    </div>
                      <div class="btnText" v-else>未选择任何文件</div>
                  </div>
                  <el-button slot="trigger" size="mini" type="primary" class="btn">选择文件</el-button>
                  <div slot="tip" class="el-upload__tip">支持文件格式： .doc | .docx | .pdf</div>
                  </el-upload>
                </el-form-item>
                <el-form-item>
                   <vue-recaptcha 

                   sitekey="6LfCinYUAAAAAOdv8lcKbmDkD5MqNSPDM1aApAVM"
                   ref="recaptcha"
                  @verify="onVerify"
                   ></vue-recaptcha>
                </el-form-item>
                <el-form-item>
                  <div class="btnBox">
                     <div class="subBtnCen" @click="submitForm('ruleForm')">
                    <span class="subBtnText">投递简历</span>
                    <span class="subBtnImg"><img src="../image/more.png" alt=""></span>
                  </div>
                  <div class="subBtnCen" @click="resetForm('ruleForm')">
                    <span class="subBtnText">取消</span>
                    <span class="subBtnImg"><img src="../image/more.png" alt=""></span>
                  </div>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <div class="imgBox">
          <div class="itemImg" v-for="(item,index) in imgBox" :key="index">
            <div class="img" @click="changeItem(index)" :class="imgItemIndex === index?'changeImg':''">
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

//import cenHeader from "@/components/cenheader"
import {upload} from "@/api/home/home"
import { setTimeout } from 'timers'
import VueRecaptcha from "vue-recaptcha"
import posed from 'vue-pose'
export default {
  data () {
    return {
      position:0,
      cenTop:936,
      ruleForm:{
        note:"",
        name:"",
        wechat:"",
        skype:"",
        email:"",
        phone:null,
        file:"",
        other:"",
        qq:""
      },
      rules: {
        note:[{
          required: true, message: '请输入面试职位名称', trigger: 'blur' 
        }],
        name: [
          { required: true, message: '请输入您的名字', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入您的电子邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        phone:[
          { required: true, message: '请输入您的手机号码', trigger: 'blur' },
          { max: 11, message: '长度在11个字符以内', trigger: 'blur' }
        ],
         file: [
          { required: true, message: '请上传您的简历', trigger: 'blur' },
        ],
      },
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
      fileList:[],
      verify:false,
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
    this.$nextTick(()=>{
      window.addEventListener('scroll', this.onScroll)
      //this.cenTop = this.$refs.cenheader.$el.offsetTop
      this.position = this.$store.getters.getPostName1
       
    })
  },
  methods:{
    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      
    },
    email(){
      window.top.open("mailto:newlinkteam@gmail.com")
    },
    skype(){
      window.top.open("skype:diana7166sz@gmail.com?chat")
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _dom = document.querySelector('#g-recaptcha-response')
          if(!_dom){
            this.verify = true
          }
          if(this.verify){
            let _data = {
            }
            
            if(this.position){

              _data={...this.ruleForm,position:this.position}
             
            }else{
              _data = this.ruleForm
            }
    
            upload(_data).then(res=>{
              this.$message.success("提交成功")
              this.$refs.recaptcha.reset()
              this.fileList = []
              this.file = ""
              this.verify = false
            }).catch((res)=>{
          
              this.$refs.recaptcha.reset()
              this.fileList = []
              this.file = ""
              this.verify = false
              this.$message.error("投递失败，请重新尝试")
            })
            this.$refs[formName].resetFields()
          }else{
            this.$message.warning("请进行人机验证")
          }
        } else {
          this.$refs.recaptcha.reset()
          this.fileList = []
          this.file = ""
          this.verify = false
          console.log('error submit!!')
          return false
        }
      });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goto(url,index){
        if(index !==undefined){
          this.$store.commit('setCultureIndex',index)
        }
        this.$router.push(url)
      },
      success(res, file, fileList){
        console.log(1)
      },
      uploadChange(file, fileList){
        console.log(file)
        if(file.size >1024*1024){
    
          this.$message.error("文件大小不能超过1MB")
          this.$refs.upload.clearFiles()
          this.ruleForm.file =""
          this.ruleForm.other = ""
          this.fileList = []
        }else{
          let reader = new FileReader()
          reader.readAsDataURL(file.raw)
          reader.onload = () => {
          this.$refs.upload.clearFiles()
          this.fileList = fileList
          this.ruleForm.file =  reader.result
          this.ruleForm.other = file
          console.log(file)
        }
      }
        
        
      },
      onVerify(res){
        this.verify = true
      },
      changeItem(index){
        if(index !== this.imgItemIndex){
          this.imgItemIndex = index
        }
      }
  },
  components: {
    //cenHeader,
    VueRecaptcha 
  }
}
</script>

<style lang='stylus' scoped>
#us
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
      background url("../image/us/banner.jpg") no-repeat
      display flex
      justify-content center
      padding-top 70px
      .addUs
        font-size 60px
        font-weight 600
  .cenHeader
    width 100%
    position relative
  
  .padTop
    padding-top 90px
  main
    display flex
    justify-content center
    .mainCen
      width 1400px
      .contact
        background-color #ffffff
        padding 50px 0
        display flex
        justify-content space-around
        .email
          min-width 300px
          .title
            font-size 30px
            font-weight 600
          .content
            font-size 18px
          .emailBox
            display flex
            justify-content flex-start
            padding-top 20px
            .emailBtnCen
              width 130px
              height 34px
              background-color #ff5d22
              border-radius 34px
              display flex
              justify-content center
              align-items center
              cursor pointer
              color #fff
              .emailBtnImg
                margin-left 10px
                img
                  vertical-align middle
        .skype
          min-width 300px
          .title
            font-size 30px
            font-weight 600
          .content
            font-size 18px
          .skypeBox
            display flex
            justify-content flex-start
            padding-top 20px
            .skypeBtnCen
              width 130px
              height 34px
              background-color #ff5d22
              border-radius 34px
              display flex
              justify-content center
              align-items center
              cursor pointer
              color #fff

              .skypeBtnImg
                margin-left 10px
                img
                  vertical-align middle
      .up
        display flex
        justify-content center
        padding 50px 0
        border-top 10px solid #ff5d22
        background-color #fff
        .upCen
          .title
            font-size 30px
            padding-bottom 50px
            .star
              font-size 60px
              color #ff5d22
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
                  
                  




</style>
<style lang="stylus">
#us
  .formBox
    .demo-ruleForm
      .el-form-item__label
        color #17191f
      .el-input
        width 400px
      .el-textarea
        width 400px
      .btnBox
        display flex 
        justify-content flex-start

      .subBtnCen
        width 130px
        height 34px
        color #ffffff
        background-color #ff5d22
        border-radius 34px
        display flex
        justify-content center
        align-items center
        cursor pointer
        margin-right 30px
        .subBtnImg
          margin-left 10px
          img
            vertical-align middle
      .uploader
        width 400px
        position relative
        .el-upload
          width 86px
          height 32px
          cursor auto
          z-index 10
          position relative
        .btnBoxImg
          background-color #ffffff
          border 1px solid #dcdfe6
          width 400px
          height 32px
          position absolute
          top 0
          z-index 1
          border-radius 4px
          .btnText
            height 32px
            font-size 12px
            
            padding-left 100px
            color #999999
            line-height 32px
        .btn
          height 24px
          background-color #ff5d22
          border-color #ff5d22
          position absolute
          top 4px
          left 6px
          padding 5px 15px
    
</style>
