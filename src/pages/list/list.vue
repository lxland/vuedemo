<template>
    <div id="List">
        <headerHome></headerHome>
        <navbar></navbar>
        <span>list</span>
        <router-link to="/city">列表页面</router-link>
    </div>
</template>

<script>
import headerHome from '@/components/header'
import navbar from '@/components/nav'

export default {
  name: 'List',
  components: {
      headerHome,
      navbar
  }
}
</script>

<style scoped>

</style>
