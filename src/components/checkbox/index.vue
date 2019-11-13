<template>
  <div class="checkbox">
    <input id="checkbox" type="checkbox" checked="1">
    <label for="checkbox"></label>
  </div>
</template>

<script>
  export default {
    name: 'checkbox'
  }
</script>

<style lang="less" scoped>
  input {
    visibility: hidden;
  }

  label {
    overflow: hidden;
    display: block;
    width: 30px;
    height: 30px;
    border: 2px solid #ccc;
    border-radius: 50%;
    background: url("https://class-assistant-public.oss-cn-hangzhou.aliyuncs.com/Classroom/HeadPortrait/default-classroom.png");
    background-size: 100% 100%;
  }

  label::before {
    content: '\2714';
    visibility: hidden;
    display: inherit;
    margin: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    color: yellowgreen;
    background-color: rgba(0, 0, 0, .08);
    transform: scale(.1);
  }

  input:checked+label::before {
    content: '\2714';
    visibility: visible;
    display: inherit;
    margin: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    color: yellowgreen;
    background-color: rgba(0, 0, 0, .18);
    transform: scale(1.5);
    transition: all .2s;
  }
</style>