let _Vue

class Store {
  constructor (options) {

  }
}

export default {
  install (Vue) {
    _Vue = Vue
    
    Vue.$prototype.$store = {}
  },
  Store
}
