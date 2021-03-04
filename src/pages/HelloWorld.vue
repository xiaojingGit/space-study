<!--
 * @Author: wangjing
 * @Date: 2021-02-07 10:15:11
 * @LastEditors: wangjing
 * @LastEditTime: 2021-03-04 18:56:02
 * @Description: file content
-->
<template>
  <div class="hello">
    <w-menu></w-menu>
    <w-form></w-form>
  </div>
</template>

<script>
import wMenu from '@/components/menu'
import wForm from '@/components/form'
export default {
  name: 'HelloWorld',
  components: { wForm, wMenu }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
