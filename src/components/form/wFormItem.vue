<!--
 * @Author: wangjing
 * @Date: 2021-02-07 10:59:38
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-02 16:41:58
 * @Description: file content
-->
<template>
  <div class="w-form-item">
    <label for="">{{ label }}</label>
    <slot></slot>
    <p style="color: red">{{ error }}</p>
  </div>
</template>

<script>
import Validator from 'async-validator'
export default {
  name: 'wFormItem',
  componentName: 'wFormItem',
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
  data () {
    return {
      error: ''
    }
  },
  methods: {
    init () {
      this.bindEvents()
    },
    bindEvents () {
      this.$on('input-change', this.handleInput)
    },
    handleInput () {
      this.validate()
    },
    validate () {
      const rule = this.form.rules[this.prop]

      const value = this.form.model[this.prop]

      const validator = new Validator({[this.prop]: rule})

      return validator.validate({[this.prop]: value}, (err) => {
        if (err) {
          this.error = err[0].message
        } else {
          this.error = ''
        }
      })
    }
  },
  created () {
    this.init()
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
