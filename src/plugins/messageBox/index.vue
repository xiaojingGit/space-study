<!--
 * @Author: wangjing
 * @Date: 2021-03-04 10:20:40
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-04 18:21:24
 * @Description: file content
-->
<template>
  <div class="dialog-wrap" :class="{'modal': modal}" v-show="visible">
    <div class="dialog-main">
      <div class="tit">{{ title }}</div>
      <div class="tip">{{ tip }}</div>
      <div class="two-btn">
        <div class="cancel-btn btn" @click="cancel">{{ cancelBtnTxt }}</div>
        <div class="confirm-btn btn" @click="confirm">{{ confirmBtnTxt }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBoxVue',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      title: '',
      tip: '',
      cancelBtnTxt: '',
      confirmBtnTxt: '',
      modal: true
    }
  },
  methods: {
    cancel () {
      this.close()
      this.callback('cancel')
    },
    confirm () {
      this.close()
      this.callback('confirm')
    },
    close () {
      if (!this.visible) return
      this.tip = ''
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>

</style>
