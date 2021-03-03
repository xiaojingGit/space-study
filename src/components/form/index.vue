<!--
 * @Author: wangjing
 * @Date: 2021-03-02 17:01:49
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-02 18:06:45
 * @Description: file content
-->
<template>
  <div>
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
    <div class="btn" @click="handleClick">点击</div>
  </div>
</template>

<script>
import wForm from './wForm'
import wFormItem from './wFormItem'
import wInput from './wInput'
import Notice from '../Notice'
import create from '@/utils/create'
export default {
  componentName: 'formIndex',
  components: {
    wForm,
    wFormItem,
    wInput
  },
  data () {
    const checkPwd = (rule, value, cb) => {
      // return new Promise((resolve, reject) => {
      if (parseInt(value) + '' === value) {
        cb()
      } else {
        cb(new Error('密码必须为数字'))
      }
      // })
    }
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
          { required: true, message: '密码为必填项' },
          { validator: checkPwd }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs['wForm'].validate(isValid => {
        create(Notice, {
          title: '提交结果',
          message: isValid ? '请求登录' : '校验失败'
        }).show()
        // if (valid) {
        //   console.log('提交登录')
        // } else {
        //   console.log('登录失败')
        // }
      })
    },
    handleClick () {
      this.$message({
        title: '弹窗',
        tip: '这是一个弹窗'
      })
    }
  }
}
</script>
