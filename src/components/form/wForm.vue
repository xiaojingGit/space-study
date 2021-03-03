<!--
 * @Author: wangjing
 * @Date: 2021-02-07 11:25:05
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-02 17:23:22
 * @Description: file content
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'wForm',
  // provide/inject : 隔n代都可以互相传递数据
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },
  methods: {
    validate (cb) {
      // 检查所有表单项
      // const tasks =
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate())
      Promise.all(tasks)
        .then((res) => {
          console.log(res)
          const bool = true
          cb(bool)
        }).catch(() => {
          const bool = false
          cb(bool)
        })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
