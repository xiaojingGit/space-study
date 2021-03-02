/*
 * @Author: wangjing
 * @Date: 2021-03-02 17:23:30
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-02 18:09:19
 * @Description: file content
 */
import Vue from 'vue'
export default function create (component, props) {
  const vm = new Vue({
    render: function (createElement) {
      return createElement(component, { props })
    }
  }).$mount()

  document.body.appendChild(vm.$el)
  const comp = vm.$children[0]

  comp.remove = function () {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}
