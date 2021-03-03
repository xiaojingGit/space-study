<!--
 * @Author: wangjing
 * @Date: 2021-02-07 10:25:50
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-02 15:05:51
 * @Description: file content
-->
<template>
  <div>
    <input
      autocomplete="new-password"
      :type="!showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput">
  </div>
</template>

<script>
import emitter from '@/utils/emitter'
export default {
  componentName: 'wInput',
  mixins: [ emitter ],
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
      const val = e.target.value
      this.$emit('input', val)

      // 触发校验
      this.dispatch('wFormItem', 'input-change', [val])
    }
  }
}
</script>

<style lang="less" scoped>

</style>
