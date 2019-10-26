/*
 * @Author: your name
 * @Date: 2019-10-26 11:59:45
 * @LastEditTime: 2019-10-26 13:38:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cms\src\main.js
 */
import Vue from 'vue'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import APP from './APP.vue'
import './lib/mui/css/mui.css'

var vm = new Vue({
    el:'#app',
    render:c=>c(APP)
})