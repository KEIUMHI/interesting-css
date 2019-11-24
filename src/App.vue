<template>
  <div id="app">
    <Guide msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import Guide from '@/components/guide'
  export default {
    name: 'app',
    components: {
      Guide
    }
  }
</script>

<style lang="less">
  #app {
    width: 100vw;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    color: #2c3e50;
  }
</style>