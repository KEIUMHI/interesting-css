<template>
   <div class="guide-ctn">
     <router-link to="/bubbly">bubbly</router-link>
     <router-link to="/title">title</router-link>
     <router-link to="/checkbox">checkbox</router-link>
     <router-link to="/taiji">taiji</router-link>
     <router-link to="/radio">radio</router-link>
     <router-link to="/color-change">color-change</router-link>
     <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'guide'
}
</script>

<style lang="less" scoped>
</style>
