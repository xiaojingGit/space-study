<template>
  <div>
    <w-menu></w-menu>
    <h2>我的个人简介</h2>
    <p>姓名：{{ $store.state.name }}</p>
    <p>年龄：{{ $store.state.age }}</p>
    <p>性别：{{ $store.state.sex }}</p>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
import wMenu from '@/components/menu'
export default {
  components: { wMenu },
  methods: {
    handleClick () {
      this.$store.commit('updateInfo')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
