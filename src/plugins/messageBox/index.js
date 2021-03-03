import MessageBoxVue from './index'

let instance

const defaultCallback = (action) => {
  if (action === 'confirm') {
    return Promise.resolve()
  } else {
    return Promise.reject(action)
  }
}

// const initInstance = () => {
//   instance = new MessageBoxConstructor({
//     el: document.createElement('div')
//   })
//   instance.callback = defaultCallback
// }

// const showMsgBox = () => {
//   if (!instance) {
//     initInstance()
//   }

//   if (!instance.visible) {
//     console.log(instance.$el)
//     document.body.appendChild(instance.$el)
//     Vue.nextTick(() => {
//       instance.visible = true
//     })
//   }
// }

const MessageBox = (props) => {
  instance.props = props
  instance.visible = true
}

export default {
  install: Vue => {
    console.log(MessageBoxVue)
    let MessageBoxConstructor = Vue.extend(MessageBoxVue)
    if (!instance) {
      instance = new MessageBoxConstructor()
      instance.$mount(document.createElement('div'))
      instance.callback = defaultCallback
      document.body.appendChild(instance.$el)
    }

    Vue.prototype.$message = MessageBox
  }
}
