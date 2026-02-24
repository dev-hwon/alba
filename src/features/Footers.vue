<script setup>
import icFooterLogo from '@images/f-logo.svg';
</script>
<template>
  <footer class="footer">
    <div class="h-container">
      <div class="h-row h-row-justify-center h-row-align-center" >
        <div class="h-col col-flogo bg-red">
          <img :src="icFooterLogo" alt="Logo" />
        </div>
        <div class="h-col col-copyright">
          서울특별시 서초구 강남대로 309, 1412호(서초동, 코리아비지니스센타)<br />
          COPYRIGHT (c) 2025 비욘드비즈니스트래블즈 ALL Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  padding: 40px 0;

  .col-copyright {
    font-size: 12px;;
    color: #999;
  }
}
</style>