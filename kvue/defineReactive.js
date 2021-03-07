// 将对象属性变成响应式
function defineReactive(obj, key, val) {
  // 如果val是对象，需要递归处理，变成响应式
  observe(val)
  Object.defineProperty(obj, key, {
    get () {
      return val
    },
    set (newVal) {
      if (val !== newVal) {
        // 如果newVal 是对象，也需要做响应式处理
        observe(newVal)
        console.log(`set ${key}:`, newVal, val)
        val = newVal
      }
    }
  })
}

// 观测对象
function observe(obj) {
  // 如果obj不是一个对象，直接返回
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  for (let attr in obj) {
    if (typeof obj[attr] === 'object') {
      observe(obj[attr])
    } else {
      defineReactive(obj, attr, obj[attr])
    }
  }
}

function set(obj, attr, val) {
  defineReactive(obj, attr, val)
}

var obj = {
  a: 1,
  info: {
    name: 'wangjing'
  }
}
observe(obj)
// obj.a = 2
// obj.info.name = '王静'
// set(obj, 'b', 200)
// obj.b = '1000'
set(obj, 'area', {
  pro: '山西',
  city: '晋城'
})
obj.area.pro = '北京'