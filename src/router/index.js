import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

const home = r =>
  require.ensure([], () => r(require("@/view/home.vue")), "home");
  const info = r =>
  require.ensure([], () => r(require("@/view/info.vue")), "info");
const back = r =>
  require.ensure([], () => r(require("@/view/back.vue")), "back");
  // 公司文化
const culture = r =>
  require.ensure([], () => r(require("@/view/culture.vue")), "culture");
const activity = r =>
  require.ensure([], () => r(require("@/view/culture/activity.vue")), "culture");
const purpose = r =>
  require.ensure([], () => r(require("@/view/culture/purpose.vue")), "culture");
const welfare = r =>
  require.ensure([], () => r(require("@/view/culture/welfare.vue")), "culture");
const value = r =>
  require.ensure([], () => r(require("@/view/value.vue")), "value");
const range = r =>
  require.ensure([], () => r(require("@/view/range.vue")), "range");
const recruit = r =>
  require.ensure([], () => r(require("@/view/recruit.vue")), "recruit");
const us = r =>
  require.ensure([], () => r(require("@/view/us.vue")), "us");
Vue.use(Router)


export const RouterMap = [
  {
    path: "",
    redirect: "home"
  },{
    path: '/home',
    name: 'home',
    component: home
  },{
    path: '/info',
    name: 'info',
    component: info
  },{
    path: '/back',
    name: 'back',
    component: back
  },{
    path: '/culture',
    name: 'culture',
    component: culture,
  //   children:[{
  //     path: "",
  //     redirect: "purpose",
  //   },{
  //     path: '/culture/purpose',
  //     name: 'purpose',
  //     component: purpose
  //   },{
  //     path: '/culture/activity',
  //     name: 'activity',
  //     component: activity
  //   },{
  //     path: '/culture/welfare',
  //     name: 'welfare',
  //     component: welfare
  //   },
  // ]
  },{
    path: '/value',
    name: 'value',
    component: value
  },{
    path: '/range',
    name: 'range',
    component: range
  },{
    path: '/recruit',
    name: 'recruit',
    component: recruit
  },{
    path: '/us',
    name: 'us',
    component: us
  },
];

const router = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: RouterMap
});
  
router.beforeEach((to, from, next) => {
  store.commit('setName',to.name)
  window.sessionStorage.setItem('name',to.name)
  next()
})

export default router;