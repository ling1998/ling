/*
 * @Author: your name
 * @Date: 2019-10-26 11:59:45
 * @LastEditTime: 2019-10-27 14:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cms\src\main.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name, Header);

import APP from './APP.vue'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource);

var vm = new Vue({
    el:'#app',
    render:c=>c(APP),
    router
})