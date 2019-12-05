<template>
  <ul class="guide-ctn">
    <div class="demo-list">
      <li v-for="(demo, index) in demos"
          :key="index"
          class="item"
          @click="show(demo)">{{ demo }}</li>
    </div>
    <div class="demo-show">
      <router-view></router-view>
    </div>
  </ul>
</template>

<script>
  export default {
    name: 'guide',
    data() {
      return {
        demos: ['bubbly',
          'title',
          'checkbox',
          'taiji',
          'radio',
          'color-change',
          'pie',
          'underline-lr'
        ]
      }
    },
    methods: {
      show(demo) {
        this.$router.push(`/${demo}`)
      }
    }
  }
</script>

<style lang="less" scoped>
  .guide-ctn {
    display: flex;
    margin: 0;
    height: 100%;
  }


  .demo-list {
    flex: 2;
    .item {
      transition: color .1s;
      cursor: pointer;

      &:hover {
        color: #3eaf7c;
      }
    }
  }

  .demo-show {
    flex: 8;
    position: relative;
  }
</style>