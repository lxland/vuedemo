<template>
    <div class="nav">
        <ul class="nav-list">
            <li><router-link to="/"><span class="iconfont">&#xe62e;</span>首页</router-link></li>
            <li class="light"><router-link to="/user"><span class="iconfont">&#xe62b;</span>我的网址</router-link></li>
            <li><router-link to="/city"><span class="iconfont">&#xe620;</span>账号信息</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "scrollbar"
    }
</script>

<style scoped>
    .nav {
        position: fixed;
        top: 44px;
        left: 0;
        bottom: 0;
        width: 200px;
        background-color: #fff;
        border-right: 1px solid #e6ebed;
        padding-top: 8px;
        z-index: 2;
    }
    .nav ul li a {
        position: relative;
        overflow: hidden;
        display: block;
        width: 100%;
        height: 48px;
        line-height: 48px;
        padding: 0 16px 0 24px;
        cursor: pointer;
        color: #666;
        font-size: 14px;
    }
    .nav ul li a:hover ,.nav ul li.light a {
        color: #fff;
        background-color: #1593ff;
    }
    .nav ul li a span {
        font-size: 20px;
        padding-right:10px;
        vertical-align: middle;
        color: #000;
    }
    .nav ul li a:hover span, .nav ul li.light a span {
        color: #fff;
    }
</style>