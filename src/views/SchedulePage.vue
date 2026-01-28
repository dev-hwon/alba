<script setup>
import { ref, computed, watch } from "vue";
import { IconComponent } from "@/components/icon";
import { TabComponent } from "@/components/tab";

const tabs = ref([
  { tabId: "1", tabName: "1차 4월7일 ~ 4월12일" },
  { tabId: "2", tabName: "2차 4월11일 ~ 4월16일" },
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
              1차 (4월7일 출발)
              1차 출발 일정
              미팅 포인트
              인천국제공항 제2터미널 10번 출입구 안쪽
              미팅 시간
              2025년 4월 7일(월) 15시 30분
              [인천 2터미널 출발 – 진에어]
              인천
              18:35
              LJ 089
              나트랑
              21:55
              더 웨스틴 리조트 앤 스파 깜란
              1차 일정
              Day 1
              2025-04-07 (월)
              체크인 및 오리엔테이션
              Day 2
              2025-04-08 (화)
              [유니마테팀] 판랑 투어
              판랑 사막 지프 투어

              쫑손사

              호텔 복귀 및 개인 정비

              호텔 프로그램

              중식(현지식) / 웰컴디너(호텔식)
              [C플러스팀] 호핑 투어
              스노클링 및 선상 파티



              레이비치

              호텔 복귀 및 개인 정비

              호텔 프로그램

              중식(현지식) / 웰컴디너(호텔식)
              Day 3
              2025-04-09 (수)
              [유니마테팀] 호핑 투어
              스노클링 및 선상 파티



              레이비치

              호텔 복귀 및 개인 정비

              아로마 마사지(90분)

              중식(현지식) / 석식(한식)
              [C플러스팀] 판랑 투어
              판랑 사막 지프 투어

              쫑손사

              호텔 복귀 및 개인 정비

              아로마 마사지(90분)

              중식(현지식) / 석식(한식)
              Day 4
              2025-04-10 (목)
              팀 빌딩 & 호텔 휴식
              팀 빌딩 프로그램

              중식(호텔식)


              호텔 프로그램 및 자유시간

              갈라디너(호텔식)


              Day 5
              2025-04-11 (금)
              시내 관광 & 공항 이동
              포나가 사원

              롱선사

              중식(한식)
              롯데마트(자유 쇼핑)

              호텔 복귀 및 개인 정비

              체크아웃
              아로마 마사지(90분)

              석식(현지식)
              공항 이동
              Day 6
              2025-04-12 (토)
              인천국제공항 도착 및 귀가
              1차 도착 일정
              [나트랑 출발 - 진에어]
              나트랑
              23:40
              LJ 090
              인천
              06:35 (+1)
            </div>
            <div v-if="selectedTabId === '2'">
              2차 (4월11일 출발)
              2차 출발 일정
              미팅 포인트
              인천국제공항 제2터미널 10번 출입구 안쪽
              미팅 시간
              2025년 4월 11일(금) 15시 30분
              [인천 2터미널 출발 – 진에어]
              인천
              18:35
              LJ 089
              나트랑
              21:55
              더 웨스틴 리조트 앤 스파 깜란
              2차 일정
              Day 1
              2025-04-11 (금)
              체크인 및 오리엔테이션
              Day 2
              2025-04-12 (토)
              [유니마테팀] 판랑 투어
              판랑 사막 지프 투어

              쫑손사

              호텔 복귀 및 개인 정비

              호텔 프로그램

              중식(현지식) / 웰컴디너(호텔식)
              [C플러스팀] 호핑 투어
              스노클링 및 선상 파티



              레이비치

              호텔 복귀 및 개인 정비

              호텔 프로그램

              중식(현지식) / 웰컴디너(호텔식)
              Day 3
              2025-04-13 (일)
              [유니마테팀] 호핑 투어
              스노클링 및 선상 파티



              레이비치

              호텔 복귀 및 개인 정비

              아로마 마사지(90분)

              중식(현지식) / 석식(한식)
              [C플러스팀] 판랑 투어
              판랑 사막 지프 투어

              쫑손사

              호텔 복귀 및 개인 정비

              아로마 마사지(90분)

              중식(현지식) / 석식(한식)
              Day 4
              2025-04-14 (월)
              팀 빌딩 & 호텔 휴식
              팀 빌딩 프로그램

              중식(호텔식)


              호텔 프로그램 및 자유시간

              갈라디너(호텔식)


              Day 5
              2025-04-15 (화)
              시내 관광 & 공항 이동
              포나가 사원

              롱선사

              중식(한식)
              롯데마트(자유 쇼핑)

              호텔 복귀 및 개인 정비

              체크아웃
              아로마 마사지(90분)

              석식(현지식)
              공항 이동
              Day 6
              2025-04-16 (수)
              인천국제공항 도착 및 귀가
              2차 도착 일정
              [나트랑 출발 - 진에어]
              나트랑
              23:40
              LJ 090
              인천
              06:35 (+1)
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
