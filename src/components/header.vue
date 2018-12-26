<template>
    <div class="header">
        <router-link to="/"><img src="../assets/logo.png" alt=""></router-link>
        <ul>
            <li><router-link to="/city">登录</router-link></li>
            <li><router-link to="/city">注册</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "headerHome"
    }
</script>

<style scoped>
    div{
        color: #000;
    }
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        float: left;
        width: 100%;
        border-bottom: 1px solid #e6ebed;
        background-color: #fff;
        height: 44px;
        line-height: 44px;
        color: #ffffff;
    }
    .header img {
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        margin: -5px 0 0 20px;
    }
    ul {
        float: right;
        font-size: 14px;
        margin-right: 30px;
    }
    ul li {
        float: left;
        margin:0 10px;
        color: #000;
    }
    ul li a {
        color: #000;
    }
</style>