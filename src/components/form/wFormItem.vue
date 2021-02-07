<!--
 * @Author: wangjing
 * @Date: 2021-02-07 10:59:38
 * @LastEditors: wangjing
 * @LastEditTime: 2021-02-07 16:45:15
 * @Description: file content
-->
<template>
  <div class="w-form-item">
    <label for="">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 不让最外层包裹元素继承父组件使用该组件时，在子组件上编写的属性
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  methods: {
    validate () {
      const rule = this.form.rules[this.prop]

      const value = this.form.model[this.prop]

      console.log(rule, value)
    }
  }
}
</script>

<style lang="less" scoped>
  .w-form-item {
    display: flex;
    padding-left: 30px;
    margin-bottom: 20px;
  }
</style>
