// 将对象属性变成响应式
function defineReactive(obj, key, val) {
  // 如果val是对象，需要递归处理，变成响应式
  observe(val)

  const dep = new Dep()

  Object.defineProperty(obj, key, {
    get () {
      // 依赖收集
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set (newVal) {
      if (val !== newVal) {
        // 如果newVal 是对象，也需要做响应式处理
        observe(newVal)
        console.log(`set ${key}:`, newVal, val)
        val = newVal
        // 通知更新
        dep.notify()
      }
    }
  })
}

// 观测对象
function observe(val) {
  // 如果val不是一个对象，直接返回
  if (typeof val !== 'object' || val === null) {
    return
  }
  let obj = new Observer(val)
}

function set(obj, attr, val) {
  defineReactive(obj, attr, val)
}

// proxy代理，让用户可以直接访问到_data中的key
function proxy(vm, key) {
  Object.keys(vm[key]).forEach(item => {
    Object.defineProperty(vm, item, {
      get() {
        return vm[key][item]
      },
      set(newVal) {
        vm[key][item] = newVal
      }
    })
  })
}

class Observer {
  constructor(val) {
    this.value = val

    // 源码中区分了数组和对象，此处不考虑数组的情况
    this.walk(val)
  }

  walk (val) {
    for (let item in val) {
      defineReactive(val, item, val[item])
    }
  }
}

class Vue {
  constructor (options) {
    this.$options = options
    this._data = options.data

    // 对data做响应式处理
    this.initData()

    // 代理_data, 使vm.counter 可以 直接访问到
    proxy(this, '_data')

    // 编译模板
    new Compile('#app', this)
  }

  initData () {
    observe(this._data)
  }
}

class Compile {
  constructor (el, vm) {
    this.$el = document.querySelector(el)
    this.$vm = vm

    if (this.$el) {
      this.compile()
    }
  }

  compile () {
    // this.$el是宿主元素，遍历，判断当前元素类型
    this.$el.childNodes.forEach(node => {
      if (node.nodeType === 1) {
        // 表明是元素
        this.compileElement(node)
      } else {

      }
    })
  }

  // 元素类型模板编译
  compileElement (node) {
    const attrs = node.attributes
    Array.from(attrs).forEach(attr => {
      const attrName = attr.name
      const exp = attr.value
      if (this.isDirective(attrName)) {
        // 如果是一个指令
        const dir = attrName.substring(2) // 获取指令w-xxx中的xxx
        // 指令实际执行方法
        this[dir] && this[dir](node, exp)
      }
    })
  }

  // 执行text指令对应的更新函数
  text (node, exp) {
    this.update(node, exp, 'text')
  }

  // w-text 对应操作函数
  textUpdater (node, expVal) {
    node.textContent = expVal
  }

  update (node, exp, dir) {
    const fn = this[dir + 'Updater']
    if (fn) {
      fn(node, this.$vm[exp])
    }

    // 更新
    new Watcher (this.$vm, exp, function (val) {
      fn && fn(node, val)
    })
  }


  isDirective(attrName) {
    return attrName.indexOf('w-') === 0
  }
}

// Watcher: 和视图中依赖一对一
class Watcher {
  constructor (vm, key, updateFn) {
    this.$vm = vm
    this.key = key
    this.updateFn = updateFn

    // 触发依赖收集
    Dep.target = this
    this.$vm[key] // 触发defineReactive中get
    Dep.target = null
  }

  update () {
    this.updateFn.call(this.$vm, this.$vm[this.key])
  }
}

class Dep {
  constructor () {
    this.deps = []
  }

  addDep(watcher) {
    this.deps.push(watcher)
  }

  notify() {
    this.deps.forEach(watcher => {
      watcher.update()
    })
  }
}