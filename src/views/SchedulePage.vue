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
  padding: 60px 20px 80px;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    padding: 80px 20px 100px;
  }

  // Tab Component Styling
  :deep(.tab-component) {
    margin-bottom: 40px;

    .tab-menu {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 12px;
        flex-wrap: wrap;

        > li {
          padding: 14px 20px;
          flex: 1 1 auto;
          min-width: 200px;
          text-align: center;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;

          @media (min-width: 768px) {
            padding: 16px 32px;
          }

          .tab-name {
            font-size: 14px;
            font-weight: 500;
            color: #555;

            @media (min-width: 768px) {
              font-size: 16px;
            }
          }

          &:hover {
            border-color: #19734b;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(25, 115, 75, 0.2);
          }

          &.active {
            background: linear-gradient(135deg, #19734b 0%, #24a65f 100%);
            border-color: #19734b;
            color: #fff;
            box-shadow: 0 4px 16px rgba(25, 115, 75, 0.3);

            .tab-name {
              color: white;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  // Tab Contents
  .tab-contents {
    > div {
      animation: fadeIn 0.4s ease;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  // Schedule Title
  .schedule-title {
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 32px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 36px;
      margin-bottom: 48px;
    }
  }

  // Meeting Info Box
  .meeting-info {
    background: white;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 32px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    @media (min-width: 768px) {
      padding: 32px;
    }

    .info-title {
      font-size: 18px;
      font-weight: 600;
      color: #19734b;
      margin-bottom: 16px;
    }

    .info-content {
      font-size: 15px;
      line-height: 1.8;
      color: #555;

      strong {
        color: #333;
        font-weight: 600;
      }
    }
  }

  // Flight Info
  .flight-info {
    background: linear-gradient(135deg, #19734b 0%, #24a65f 100%);
    color: white;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 32px;
    text-align: center;

    @media (min-width: 768px) {
      padding: 32px;
    }

    .flight-route {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 12px;

      .city {
        font-size: 20px;
        font-weight: 700;

        @media (min-width: 768px) {
          font-size: 24px;
        }
      }

      .flight-code {
        font-size: 16px;
        opacity: 0.9;
      }
    }

    .hotel-name {
      font-size: 16px;
      margin-top: 16px;
      opacity: 0.95;
    }
  }

  // Day Cards
  .day-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (min-width: 768px) {
      padding: 32px;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    .day-header {
      border-left: 4px solid #19734b;
      padding-left: 16px;
      margin-bottom: 20px;

      .day-number {
        font-size: 14px;
        color: #19734b;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .day-date {
        font-size: 20px;
        font-weight: 700;
        color: #333;

        @media (min-width: 768px) {
          font-size: 24px;
        }
      }

      .day-title {
        font-size: 16px;
        color: #666;
        margin-top: 8px;
      }
    }

    .day-activities {
      .activity-section {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        .section-badge {
          display: inline-block;
          background: #e3f2fd;
          color: #1976d2;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .activity-list {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            padding: 8px 0 8px 24px;
            position: relative;
            font-size: 15px;
            color: #555;
            line-height: 1.6;

            &::before {
              content: '•';
              position: absolute;
              left: 0;
              color: #19734b;
              font-size: 18px;
            }
          }
        }

        .meal-info {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 12px 16px;
          margin-top: 12px;
          font-size: 14px;
          color: #666;
          border-left: 3px solid #ffc107;
        }
      }
    }
  }

  // Simple text formatting for existing content
  font-size: 15px;
  line-height: 1.8;
  color: #555;

  strong {
    color: #19734b;
    font-weight: 600;
  }
}
</style>
