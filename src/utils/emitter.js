/*
 * @Author: wangjing
 * @Date: 2021-03-02 10:36:10
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-02 15:06:13
 * @Description: file content
 */

export default {
  methods: {
    dispatch (componentName, eventName, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options.componentName

      while (parent && (name !== componentName || !name)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.componentName
        }
      }
      if (parent) {
        parent.$emit(eventName, params)
      }
    }
  }
}
