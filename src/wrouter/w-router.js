let _Vue
class Router {
  constructor (options) {
    this.$options = options

    // 缓存path和组件映射关系
    this.routeMap = {}
    this.$options.routes.forEach(item => {
      this.routeMap[item.path] = item
    })

    // 需要定义一个响应式的currentUrl属性
    const initial = window.location.hash.slice(1) || '/'
    _Vue.util.defineReactive(this, 'currentUrl', initial)

    // 当前路由信息对象
    this.currentRoute = options.routes.filter(item => {
      item.path = this.currentUrl
    })

    window.addEventListener('hashchange', this.onHashChange.bind(this))
  }

  onHashChange () {
    this.currentUrl = window.location.hash.slice(1)
  }
}

Router.install = Vue => {
  _Vue = Vue
  // 在全局混入，每个组件创建之前，设置全局$router
  Vue.mixin({
    beforeCreate: function () {
      // 方便所有地方使用this.$router
      // 此处this指的是组件实例
      Vue.prototype.$router = this.$root.$options.router
    }
  })
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        require: true
      }
    },
    render: function (h) {
      return h('a', {
        attrs: {
          href: '#' + this.to
        }
      }, this.$slots.default)
    }
  })
  Vue.component('router-view', {
    render: function (h) {
      // 找到当前url对应的组件
      const { currentUrl, routeMap } = this.$router
      const route = routeMap[currentUrl] ? routeMap[currentUrl] : null
      return h(route.component)
    }
  })
}

export default Router
