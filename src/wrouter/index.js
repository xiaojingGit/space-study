import Vue from 'vue'
import Router from './w-router'
import HelloWorld from '@/pages/HelloWorld'
import Detail from '@/pages/Detail'
import Person from '@/pages/Person'

Vue.use(Router)
const routes = [{
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
}, {
  path: '/detail',
  name: '详情',
  component: Detail
}, {
  path: '/person',
  name: '个人简介',
  component: Person
}]

export default new Router({ routes })
