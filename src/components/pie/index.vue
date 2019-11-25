<template>
   <div class="pie"></div>
</template>

<script>
export default {
  name: 'pie'
}
</script>

<style scoped>
  .pie {
    position: absolute;
    top: 50%; left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: yellowgreen;
    background-image: linear-gradient(to right, transparent 50%, #655 0);
    transform: translate(-50%, -50%);
  }

  .pie::before {
    content: "";
    display: block;
    margin-left: 50%;
    border-radius: 0 100% 100% 0/50%;
    height: 100%;
    background-color: inherit;
    transform-origin: left;
    animation: spin 3s linear infinite, bg 6s step-end infinite;
  }

  @keyframes spin {
    to {transform: rotate(.5turn);}
  }
  @keyframes bg {
    50% {background-color: #655;}
  }
</style>
