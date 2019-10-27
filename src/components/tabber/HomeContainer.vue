<!--
 * @Author: your name
 * @Date: 2019-10-27 13:21:15
 * @LastEditTime: 2019-10-27 15:14:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cms\src\components\tabber\HomeContainer.vue
 -->
<template>
    <div>
       
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in Lunbotulist" :key="item.url">1
            <img :src="item.img" alt="">
        </mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>


         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../src/images/menu1.png" alt="">
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../../src/images/menu2.png" alt="">
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../../src/images/menu3.png" alt="">
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../src/images/menu4.png" alt="">
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../../src/images/menu5.png" alt="">
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../../src/images/menu6.png" alt="">
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
    </div>
</template>
<script>
import {Toast}from 'mint-ui'

export default {
    data(){
    return {
        Lunbotulist:[]
    }
    },
    created(){

        this.getLunbotu;
    },
    methods:{
        getLunbotu(){
            this.$htt.get("http://www.baidu.com").then(result=>{
              if(result.body.status===0){
                  this.Lunbotulist=result.body.message;
              }else{
                  Toast("加载失败。。")
              }
            })
        }
    }
}


</script>

<style lang="scss" scoped>
.mint-swipe{
    height:200px;
    .mint-swipe-item{

    &:nth-child(1){
        background-color: red;
    }
    &:nth-child(2){
        background-color:cyan;
    }
    &:nth-child(3){
        background-color: blue;
    }
      img{
          width:100%;
          height:100%;
      }
    
   }
    
}    
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:none;
    img{
        width: 60px;
        height:60px;
    }
}
.mui-table-view.mui-grid-view .mui-table-view-cell{
    border: none
}
.mui-media-body{
    font-size: 17px;
}

</style>