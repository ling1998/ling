/*
 * @Author: your name
 * @Date: 2019-10-20 22:02:26
 * @LastEditTime: 2019-10-27 15:16:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\前端\webstrom\vue\6day\05webpack-子路由\src\router.js
 */
import VueRouter from 'vue-router'
// import account from './main/Account.vue'
// import goodlist from './main/GoodsList.vue'
// import login from './subcom/login.vue'
// import register from './subcom/register.vue'
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'

var router =new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component: MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component: SearchContainer},
    ],
    linkActiveClass:'mui-active'
})
//把路由对像暴露出去
export default router