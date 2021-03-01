<!--
 * @Author: wangjing
 * @Date: 2021-02-07 10:15:11
 * @LastEditors: wangjing
 * @LastEditTime: 2021-02-07 16:09:30
 * @Description: file content
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>element-ui表单模拟</h2>
    <w-form ref="wForm" :model="form" :rules="rules">
      <w-form-item label="账号：" prop="name">
        <w-input v-model="form.name" placeholder="请输入账号"></w-input>
      </w-form-item>
      <w-form-item label="密码：" prop="pwd">
        <w-input v-model="form.pwd" placeholder="请输入密码" show-password></w-input>
      </w-form-item>
      <w-form-item>
        <button @click="handleSubmit">提交</button>
      </w-form-item>
    </w-form>
  </div>
</template>

<script>
import wForm from './form/wForm'
import wFormItem from './form/wFormItem'
import wInput from './form/wInput'
export default {
  name: 'HelloWorld',
  components: {
    wForm,
    wFormItem,
    wInput
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          { required: true, message: '账户号为必填项' }
        ],
        pwd: [
          { required: true, message: '密码为必填项' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs['wForm'].validate(valid => {

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
