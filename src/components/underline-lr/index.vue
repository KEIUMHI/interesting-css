<template>
  <div class="underline-lr">
    <div>that's ♂ good.</div><br>
    <div class="l-r">hover me</div><br>
    <div class="t-b">hover me</div>
  </div>
</template>

<script>
  export default {
    name: 'underline-lr'
  }
</script>

<style lang="less" scoped>
  .underline-lr {
    font-size: 62.5%;
  }
  div {
    display: inline-block;
    position: relative;
    left: 0;
    padding: 8px 0;
    line-height: 16px;
    text-align: center;
    font-size: 2.5em;
    color: #555;
    transition: left .25s;
    cursor: pointer;
  }

  div::before {
    content: "";
    position: absolute;
    width: 0%;
    right: 0;
    bottom: 0;
    border: 1px dashed pink;
    transition: width .3s;
  }

  div:hover {
    left: 5px;
  }

  div:hover::before {
    left: 0;
    right: unset;
    width: 100%;
  }

  .l-r::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #badc58;
    transform: scale(0, 1);
    transform-origin: right;
    transition: transform .3s;
  }

  .l-r:hover::before {
    transform: scale(1, 1);
    transform-origin: left;
  }

  .t-b::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #badc58;
    transform: scale(0, 0);
    transform-origin: bottom center;
    transition: transform .5s;
  }

  .t-b:hover::before {
    transform: scale(1, 1);
    transform-origin: top center;
  }
</style>