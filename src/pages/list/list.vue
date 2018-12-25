<template>
    <div id="List">
        <headerHome></headerHome>
        <span>list</span>
        <router-link to="/city">列表页面</router-link>
    </div>
</template>

<script>
import headerHome from '@/components/header'

export default {
  name: 'List',
  components: {
      headerHome
  }
}
</script>

<style scoped>

</style>
