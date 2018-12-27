<template>
    <div class="user">
        <headerHome></headerHome>
        <navbar></navbar>

        <div class="content">
            <div class="mineName">
                <h2>我的网址</h2>

                <div class="scene-item">
                    <div class="addscene">
                        <router-link to="/city">
                            <p>+</p>
                            <p>查询网址</p>
                        </router-link>
                    </div>
                </div>
                <div class="scene-item">
                    <h3>张三丰.网址</h3>
                    <p class="time">2018-10-22 至 2019-10-22 </p>
                    <div class="operation">
                        <ul>
                            <li><router-link to="/city">轻松绑定</router-link></li>
                            <li><router-link to="/city">创新空间</router-link></li>
                            <li><router-link to="/city">网址信息</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="scene-item">
                    <h3>张三丰.网址</h3>
                    <p class="time">2018-10-22 至 2019-10-22 </p>
                    <div class="operation">
                        <ul>
                            <li><router-link to="/city">轻松绑定</router-link></li>
                            <li><router-link to="/city">创新空间</router-link></li>
                            <li><router-link to="/city">网址信息</router-link></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>

        <router-view/>
    </div>
</template>

<script>
    import headerHome from '@/components/header'
    import navbar from '@/components/nav'

    export default {
        name: 'userIndex',
        components: {
            headerHome,
            navbar
        }
    }
</script>

<style scoped>
    .content {
        padding-top: 44px;
        position: relative;
        min-width: 1000px;
    }
    .mineName {
        position: relative;
        min-height: 400px;
        margin-left: 200px;
        width: calc(100% - 200px);
    }
    h2 {
        font-size: 16px;
        padding:15px 20px;
        border-bottom: 1px solid #e6ebed;
        background-color: #ffffff;
    }
    .scene-item {
        width: 250px;
        height: 250px;
        border-radius: 4px;
        overflow: hidden;
        float: left;
        background-color: #fff;
        position: relative;
        margin:20px;
        text-align: center;
        box-shadow: 0 1px 2px rgba(0,0,0,.05);
    }
    .scene-item h3 {
        font-size: 22px;
        padding:40px 0 0;
    }
    .scene-item p.time {
        font-size: 12px;
        color: #999999;
        padding:0;
    }
    .scene-item ul li {
        float: left;
        width: 100%;
        padding:0 20px;
        margin-top: 10px;
    }
    .scene-item ul li a {
        display: block;
        width: 100%;
        height: 32px;
        line-height: 32px;
        border: 1px solid #1593ff;
        font-size: 12px;
        color: #1593ff;
        border-radius: 3px;
    }
    .scene-item ul li a:hover {
        color: #ffffff;
        background-color: #1593ff;
    }
    .operation {
        margin-top: 20px;
    }
    .addscene a {
        display: inline-block;
        width: 200px;
        height: 200px;
        border: 1px solid #e6ebed;
        border-radius: 3px;
        margin-top: 23px;
        font-size: 14px;
        font-weight: normal;
    }
    .addscene a {
        padding-top: 80px;
    }
    .addscene a:hover {
        color: #1593ff;
        border-color: #1593ff;
    }
    .addscene a:hover p {
        color: #1593ff;
    }

</style>