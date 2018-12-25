<template>
    <div class="header">
        <div class="left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div>首页</div>
    </div>
</template>

<script>
    export default {
        name: "headerHome"
    }
</script>

<style scoped>
    div{
        color: #fff;
    }
    .header {
        height: 60px;
        line-height: 60px;
        background-color: #000;
        color: #ffffff;
    }
    .header span {
        float: left;
        color: #ffffff;
        cursor: pointer;
    }
</style>