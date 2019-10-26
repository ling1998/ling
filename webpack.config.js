/*
 * @Description: In User Settings Ed
 * @Author: your name
 * @Date: 2019-10-18 09:22:20
 * @LastEditTime: 2019-10-19 17:48:00
 * @LastEditors: Please set LastEditors
 */
var path=require('path')
var htmlWebpackPlugin=require('html-webpack-plugin')
var vueLoaderPlugon=require('vue-loader/lib/plugin')
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
          },
plugins:[new htmlWebpackPlugin({

    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html',
  
    }),
          new vueLoaderPlugon,
      ],
      module:{
       rules:[
                 { test:/\.css$/,use:['style-loader','css-loader']},
                 { test:/\.less$/,use:['style-loader','css-loader','less-loader']},
                 { test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
                 { test:/\.(jpg|png|gif|jpeg)$/,use:'url-loader?limit=&name=[hash:8]-[name].[ext]'},
                 //limit 为图片的大小 大于或等于limit  小于则转为beyt       前八位
                 { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
                 { test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//转化高级的es语法
                 { test:/\.vue$/,use:'vue-loader'}//处理vue的loader
  ]
        
      },
      // resolve:{
      //   alias:{
      //     "vue$":"vue/dist/vue.js",
      //   },
      // }

        }