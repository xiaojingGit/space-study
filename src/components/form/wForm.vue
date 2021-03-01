<!--
 * @Author: wangjing
 * @Date: 2021-02-07 11:25:05
 * @LastEditors: wangjing
 * @LastEditTime: 2021-02-07 16:12:36
 * @Description: file content
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style lang="less" scoped>

</style>
