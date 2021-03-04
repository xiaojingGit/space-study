/*
 * @Author: wangjing
 * @Date: 2021-02-07 10:15:11
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-04 18:37:41
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: '详情',
      component: Detail
    }
  ]
})
