<!--
 * @Author: wangjing
 * @Date: 2021-02-07 10:15:11
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-02 17:04:50
 * @Description: file content
-->
<template>
  <div class="hello">
    <w-form></w-form>
  </div>
</template>

<script>
import wForm from './form'
export default {
  name: 'HelloWorld',
  components: { wForm }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
