<template>
    <div id="domain">
        <headerHome></headerHome>
        <navbar></navbar>

        <div class="content">
            <h2>网址基本信息</h2>
            <ul>
                <li></li>
            </ul>

        </div>
    </div>
</template>

<script>
    import headerHome from '@/components/header'
    import navbar from '@/components/nav'

    export default {
        name: "domain",
        components: {
            headerHome,
            navbar
        }
    }
</script>

<style scoped>

</style>