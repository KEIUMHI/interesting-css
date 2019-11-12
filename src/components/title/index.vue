<template>
  <div class="hello" data-msg="Hi.">Hello.</div>
</template>

<script>
  export default {
    name: 'title'
  }
</script>

<style lang="less" scoped>
  .hello {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    transform: translate(-50%, -50%);
    font-size: 24px;
    line-height: 38px;
    cursor: pointer;
  }

  .hello:hover::before {
    content: attr(data-msg);
    position: absolute;
    top: -50px;
    left: 10px;
    padding: 3px 8px;
    border: 1px solid #444;
    border-radius: .3em;
    text-align: center;
    cursor: pointer;
  }

  .hello:hover::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 30px;
    border-top: 5px solid #444;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
</style>