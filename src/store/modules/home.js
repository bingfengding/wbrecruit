
export default {
  state: {
    name:"home",
    scrollTop:0,
    cultureIndex:0, //公司文化分类
    depName:0,
    postName:0,
    postName1:0,
    showModel:false,
  },
  getters:{
    getName: state=>{
      return state.name
    },
    getTop:state=>{
      return state.scrollTop
    },
    getCultureIndex:state=>{ //公司文化分类
      return state.cultureIndex
    },
    getDepName:state=>{
      return state.depName
    },
    getPostName:state=>{
      return state.postName
    },
    getShowModel:state=>{
      return state.showModel
    },
    getPostName1:state=>{
      return state.postName1
    },
  },
  mutations: {
    setArticles(state,{
      art_id
    }){
      state.homeValue.articles = art_id
    },
    setTop(state,value){
      state.scrollTop = value
    },
    setName(state,value){
      state.name = value
    },
    setCultureIndex(state,value){ //公司文化分类
      state.cultureIndex = value
    },
    setDepName(state,value){
      state.depName = value
    },
    setPostName(state,value){
      state.postName = value
    },
    setShowModel(state,value){
      state.showModel = value
    },
    setPostName1(state,value){
      state.postName1 = value
    },
    

  },
  actions: {
    // userLogin(context, {
    //   user_name,
    //   user_pass
    // }) {
    //   login(user_name, user_pass).then((result) => {

    //     if (result.data.code == 200) {
    //       let token = result.data.data.token;
    //       if (token != "") {
    //         context.commit("setUser", {
    //           "user_name": user_name,
    //           "user_token": token
    //         })
    //       }

    //       // this.$router.push({
    //       //   path: "/"
    //       // }); //登录成功之后重定向到首页

    //     } else {
    //       return Promise.reject(result)
    //     }

    //   })
    // }
  }
}
