<script setup>
import IconComponent from "@/components/icon/IconComponent.vue";
</script>
<template>
  <header class="header">
    <div class="h-container">
      <div class="h-row h-row-align-center">
        <div class="h-col col-logo"><img src="/assets/images/emblem.svg" alt="Logo" /></div>
        <div class="h-col col-title">2025 UNICITY INTERNATIONAL<br />BIOS LIFE LEADERSHIP TRIP<br />IN NHA TRANG</div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  height: 300px;
  padding: 40px 0;
  background-image: url('/assets/images/header-bg.jpg');
  background-size: cover;
  background-position: center;
}
.col-logo {
  img {
    width: 20vw;
    max-width: 22rem;
    aspect-ratio: 1/1;
  }
}
.col-title {
  font-size: clamp(2.4rem, 2.8vw, 4.4rem);
  font-weight: bold;
}
</style>
