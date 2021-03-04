/*
 * @Author: wangjing
 * @Date: 2021-03-04 16:53:49
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-04 18:20:26
 * @Description: file content
 */
import MessageBoxVue from './index.vue'

let instance, _Vue, MessageBoxConstructor

const MessageBox = (options) => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      instance = new MessageBoxConstructor({
        el: document.createElement('div')
      })
    }

    if (!instance.visible) {
      for (let item in options) {
        instance[item] = options[item]
      }

      instance.callback = (action) => {
        if (action === 'confirm') {
          resolve()
        }
        if (action === 'cancel') {
          reject(new Error('cancel'))
        }
      }

      document.body.appendChild(instance.$el)
      _Vue.nextTick(() => {
        instance.visible = true
      })
    }
  })
}

export default {
  install: Vue => {
    _Vue = Vue
    MessageBoxConstructor = Vue.extend(MessageBoxVue)
    Vue.prototype.$message = MessageBox
  }
}
