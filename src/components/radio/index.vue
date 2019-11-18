<template>
  <div class="radio">
    <p>Which following fruit do you like?</p>
    <ul class="fruits">
      <li>
        <input id="apple" type="radio" name="option" hidden>
        <label for="apple"></label>
        <span>🍎</span>
      </li>
      <li>
        <input id="sydney" type="radio" name="option" hidden>
        <label for="sydney"></label>
        <span>🍐</span>
      </li>
      <li>
        <input id="strawberry" type="radio" name="option" hidden>
        <label for="strawberry"></label>
        <span>🍓</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'radio'
  }
</script>

<style lang="less" scoped>
  .fruits {
    display: flex;
    list-style: none;
    padding: 0;
  }

  .fruits li {
    display: flex;
    align-items: center;
    margin: 0 4px;
    line-height: 100%;
  }

  label {
    width: 8px;
    height: 8px;
    margin: 0 3px;
    padding: 2px;
    border: 1px solid #f90;
    border-radius: 100%;
    background-clip: content-box;
    transition: all .3s;
    cursor: pointer;
  }

  label:hover {
    border-color: #09f;
    box-shadow: 0 0 7px #09f;
    background-color: #09f;
    background-clip: content-box;
  }

  input:checked+label {
    background: #f90;
    background-clip: content-box;
  }

  span {
    line-height: 100%;
  }
</style>