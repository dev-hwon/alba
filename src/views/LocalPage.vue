<script setup>
import { ref, computed, watch } from "vue";
import { IconComponent } from "@/components/icon";
import { TabComponent } from "@/components/tab";

const tabs = ref([
  { tabId: "1", tabName: "나트랑 소개" },
  { tabId: "2", tabName: "공항" },
  { tabId: "3", tabName: "호텔" },
  { tabId: "4", tabName: "액티비티" },
  { tabId: "5", tabName: "추천 쇼핑 리스트" },
]);
const selectedTabId = ref("1");
const handleSelectTab = (tabId) => {
  selectedTabId.value = tabId;
};
</script>
<template>
  <div class="main-page">
    <div class="h-container">
      <div class="h-row">
        <div class="h-col h-col-12">
          <TabComponent
            :tabmenu="tabs"
            :selectedId="selectedTabId"
            @handleSelectTab="handleSelectTab
          "/>
        </div>
      </div>
      <div class="h-row">
        <div class="h-col h-col-12">
          <div class="tab-contents">
            <div v-if="selectedTabId === '1'" >
              1
            </div>
            <div v-if="selectedTabId === '2'">
              2
            </div>
            <div v-if="selectedTabId === '3'">
              3
            </div>
            <div v-if="selectedTabId === '4'">
              4
            </div>
            <div v-if="selectedTabId === '5'">
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-page {
  padding-top: 80px;
  padding-bottom: 80px;
  .tab-contents {

  }
  :deep(.tab-component) {
    .tab-menu {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 8px;
        > li {
          padding: 12px 16px;
          flex: 1 1 auto;
          text-align: center;
          border: 1px solid #000;
          border-radius: 8px;
          .tab-name {
            font-size: 14px;
          }
          &.active {
            background-color: #000;
            color: #fff;
          }
        }
      }
    }
  }
}
.test {
  width: 100px;
  height: 100px;
  background-color: black;
}
</style>
