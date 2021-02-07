<!--
 * @Author: wangjing
 * @Date: 2021-02-07 10:25:50
 * @LastEditors: wangjing
 * @LastEditTime: 2021-02-07 11:21:23
 * @Description: file content
-->
<template>
  <div>
    <input
      :type="!showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
