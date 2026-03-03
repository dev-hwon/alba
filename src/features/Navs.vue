<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navInfo = ref([
  { id: 1, key: "main", label: "TRIP 안내" },
  { id: 2,key: "customs", label: "입국·세관 안내" },
  { id: 3,key: "schedule", label: "여행 일정표" },
  { id: 4,key: "local", label: "여행지 정보" },
]);

const isPinned = ref(false);
const pinSensor = ref(null);
let observer = null;

onMounted(() => {
  // IntersectionObserver: 센서가 화면 상단 밖으로 나가는지 감시
  observer = new IntersectionObserver(([entry]) => {
    // 센서가 안 보이면(isIntersecting이 false면) 메뉴가 상단에 닿은 것
    isPinned.value = !entry.isIntersecting;
  }, { threshold: [1.0] });

  if (pinSensor.value) {
    observer.observe(pinSensor.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

defineExpose({
  isPinned,
});
</script>
<template>
  <div ref="pinSensor" class="pin-sensor"></div>
  <Nav class="nav-bar" :class="{ 'is-pinned': isPinned }">
    <div class="h-container">
      <div class="h-row">
        <div class="h-col h-col-12">
          <ul class="nav-menu">
            <li
              v-for="(item) in navInfo"
              :key="item.id" class="nav-item"
            >
              <router-link :to="{ name: item.key }">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Nav>
</template>
<style lang="scss" scoped>
.nav-bar {
  &.is-pinned {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
}
.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  > li {
    flex: 1 1 auto;
    a {
      position: relative;
      display: block;
      font-size: 18px;
      font-weight: 600;
      color: #333;
      padding: 16px;
      background-color: #f9f9f9;
      text-align: center;
      text-decoration: none!important;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #999;
        transition: all 0.3s;
        transform: scale(0);
      }
      &.router-link-exact-active {
        background-color: #fff;
        &::before {
          background-color: #C2335F;
          transform: scale(1);
        }
      }
    }
    + li {
      a {
        margin-left: -1px;
      }
    }
  }
}
</style>