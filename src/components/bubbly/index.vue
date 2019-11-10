<template>
   <div class="bubbly">.bubbly</div>
</template>

<script>
export default {
  name: 'bubbly'
}
</script>

<style lang="less" scoped>
  .bubbly {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      border: 1px solid #cccccc;
      border-radius: 8px;
      line-height: 100px;
      text-align: center;
      color: #fff;
      background: #ff7979;
      transition: transform .3s;
      transform-origin: 50px bottom;
      filter: drop-shadow(1px 3px 3px #ccc);
      cursor: pointer;
    }
    .bubbly::after {
      content: "";
      position: absolute;
      left: 50px;
      bottom: -18px;
      border: 18px solid transparent;
      border-top-color: #ff7979;
      border-left: 0;
      border-bottom: 0;
    }
    .bubbly:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }
</style>
