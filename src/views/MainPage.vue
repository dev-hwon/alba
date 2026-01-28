<script setup>
import { ref, computed, watch } from "vue";
import { IconComponent } from "@/components/icon";
import { TabComponent } from "@/components/tab";

const tabs = ref([
  { tabId: "1", tabName: "Tab 1" },
  { tabId: "2", tabName: "Tab 2" },
  { tabId: "3", tabName: "Tab 3" },
  { tabId: "4", tabName: "Tab 4" },
]);
const selectedTabId = ref("0");
const handleSelectTab = (tabId) => {
  selectedTabId.value = tabId;
};
</script>
<template>
  <div class="page-common main-page">
    <div class="h-container">
      <div class="h-row">
        <div class="h-col h-col-12">
          2025 UNICITY INTERNATIONAL BIOS LIFE LEADERSHIP TRIP IN NHA TRANG 에 함께 하게 되어 정말 기쁩니다.
          유니시티의 사장님들과 함께 잊지 못할 순간을 만들기 위해 다채로운 프로그램과 행사를 준비했습니다.
          여행 일정과 프로그램을 확인하시고 나트랑에서의 특별한 여정을 기대해 주세요!

          "꽃길을 위한 쉼표, 화려하게 피어날 내일"

          바쁜 일상은 잠시 내려놓고, 눈부신 태양과 에메랄드 빛 바다가 반기는 나트랑에서 여유로운 쉼을 만끽하세요.
          파트너 사장님들과 함께 걸어온 길을 돌아보며, 앞으로 펼쳐질 더 찬란한 내일을 그려보는 시간.
          나트랑의 황홀한 풍경 속에서 특별한 순간들을 마음껏 즐기고, 잊지 못할 추억을 만들어가세요!
          일정 안내
          여행개요
          2025 UNICITY INTERNATIONAL BIOS LIFE LEADERSHIP TRIP IN NHA TRANG
          행사기간
          1차 : 4월7일(월) ~ 4월 12일(토)
          2차 : 4월11일(금) ~ 4월 16일(수)
          여권 안내
          여권유효기간
          베트남 입국 시, 출국일 기준 여권의 유효기간이 6개월 이상 남아 있어야 합니다.
          여권발급
          여권 기간이 만료되었거나 신규 발급을 해야 할 경우, 아래 서류를 지참하여 가까운 여권 접수처(전국 여권 사무 대행 기관 및 제외 공간)에 가셔서 발급 받으시기 바랍니다.
          기본 구비 서류
          만18세 이상 신청인의 여권 재발급
          - 여권발급신청서
          - 여권용 사진 1매(6개월 이내에 촬영한 사진)
          - 신분증
          - 병역관계 서류(병역 대상자의 경우 추가 서류 확인 필요)
          - 기존 여권(유효기간이 남아 있는 경우)
          발급 소요기간
          - 약 1주일(각 발급처마다 소요기간이 상이함)

          ※ 여권 발급 관련 자세한 내용은 하기 홈페이지 참고 바랍니다.
          외교부 여권 안내 홈페이지(https://www.passport.go.kr)
          출국 준비서류
          출국 준비서류
          여권(6개월 이상 유효)
          * 외국 여권 소지자는 여행사에 별도 문의 요망
          담당자 안내
          SM C&C
          카카오톡에서 유니시티 리더십트립 IN NHA TRANG을 친구추가 하세요.
          카카오톡으로 보내기

          담당자 연락 가능 시간 : 10:00 ~ 17:00
          대표번호 : 02-3788-6347

        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// .icon-test {
//   width: 100px;
//   height: 100px;
// }
.test-wrap {
  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    > li {
      background-color: #000;
    }
  }
}

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
        }
      }
    }
  }
}
</style>
