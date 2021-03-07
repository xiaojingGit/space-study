let _Vue

class Store {
  constructor (options) {
    this._mutations = options.mutations || {}
    this._actions = options.actions || {}
    this.getters = {}

    let computed = {}
    const store = this
    for (let attr in options.getters) {
      computed[attr] = function () {
        return options.getters[attr](options.state)
      }
      Object.defineProperty(this.getters, attr, {
        get () {
          return store._vm[attr]
        }
      })
    }
    console.log(computed)

    // 创建响应式的state
    this._vm = new _Vue({
      data () {
        return {
          $$state: options.state
        }
      },
      computed
    })

    // Object.defineProperties(this, {
    //   getters: {
    //     get: function () {
    //       let res = {}
    //       for (let attr in options.getters) {
    //         res[attr] = options.getters[attr](options.state)
    //       }
    //       return res
    //     }
    //   }
    // })
  }

  get state () {
    return this._vm._data.$$state
  }

  set state (v) {
    console.error('please use replaceState to reset state')
  }

  commit (type, payload) {
    const fn = this._mutations[type]
    if (!fn) {
      throw new Error('can not find mutations')
    }
    fn(this.state, payload)
  }

  dispatch (type, payload) {
    const fn = this._actions[type]
    if (!fn) {
      throw new Error('can not find actions')
    }
    return fn(this, payload)
  }
}

export default {
  install (Vue) {
    _Vue = Vue
    Vue.mixin({
      beforeCreate () {
        Vue.prototype.$store = this.$root.$options.store
      }
    })
  },
  Store
}
