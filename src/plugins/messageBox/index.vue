<template>
    <div class="dg-wrap" v-show="visible">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <div class="two-btn">
            <div class="left-btn" @click="handleCancel">{{ cancelBtnTxt }}</div>
            <div class="right-btn" @click="handleConfirm">{{ confirmBtnTxt }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MessageBoxVue',
        props: {
            title: {
                type: String,
                default: '',
                required: true
            },
            tip: {
                type: String,
                default: ''
            },
            cancelBtnTxt: {
                type: String,
                default: '取消'
            },
            confirmBtnTxt: {
                type: String,
                default: '确定'
            }
        },
        methods: {
            handleCancel () {
                this.close()
                this.callback('cancel')
            },
            handleConfirm () {
                this.close()
                this.callback('confirm')
            },
            close () {
                if (!this.visible) return
                this.visible = false
            }
        },
    }
</script>

<style lang="less" scoped>
    
</style>