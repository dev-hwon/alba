<script setup>
const navInfo = [
  { id: 1, key: "main", label: "TRIP 안내" },
  { id: 2,key: "customs", label: "입국·세관 안내" },
  { id: 3,key: "schedule", label: "여행 일정표" },
  { id: 4,key: "local", label: "여행지 정보" },
]
</script>
<template>
  <Nav class="nav-bar">
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
  padding: 40px 0;
}
.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  > li {
    flex: 1 1 auto;
    margin: -1px;
    a {
      position: relative;
      display: block;
      font-size: 18px;
      font-weight: 600;
      color: #333;
      padding: 16px;
      border-top: 1px solid #ddd;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #f9f9f9;
      text-align: center;
      &::before {
        content: "";
        position: absolute;
        top: -1px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #999;
        // transition: all 0.3s;
        transform: scale(0);
      }
      &.router-link-exact-active {
        background-color: #fff;
        &::before {
          background-color: #19734b;
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