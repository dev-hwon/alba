<script setup>
import { ref } from "vue";
import { TabComponent } from "@/components/tab";
import ImageComponent from "@/components/image/ImageComponent.vue";
import introBg from '@images/intro/bg.jpg';

const tabs = ref([
  { tabId: "1", tabName: "삿포로 소개" },
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
  <div class="main-page local-page">
    <div class="h-container">
      <div class="h-row">
        <div class="h-col h-col-12">
          <TabComponent
            :tabmenu="tabs"
            :selectedId="selectedTabId"
            @handleSelectTab="handleSelectTab"
          />
        </div>
      </div>
      <div class="h-row">
        <div class="h-col h-col-12">
          <div class="tab-contents">
            <!-- Tab 1: 삿포로 소개 -->
            <div v-if="selectedTabId === '1'" class="content-area">
              <h2 class="main-title">삿포로 (SAPPORO)</h2>

              <!-- 이미지 Placeholder -->
              <ImageComponent :src="introBg" alt="나트랑 이미지" class="local-image" />

              <div class="info-grid">
                <div class="info-card">
                  <h3 class="info-title">🕐 한국과의 시차</h3>
                  <p>한국과 동일합니다.<br /><small>(예. 한국: 오전 10시 / 일본: 오전 10시)</small></p>
                </div>

                <div class="info-card">
                  <h3 class="info-title">🌤️ 지역 날씨</h3>
                  <p>삿포로의 4월은 초봄~초겨울 사이 체감으로, <strong>일교차가 큰 편</strong>입니다. 평균 최고 기온 약  <strong>10~13°C</strong>, 평균 최저 기온 약 <strong>2~5°C</strong> 수준이며, 바람이 불면 체감온도가 더 낮을 수 있습니다.</p>
                </div>

                <div class="info-card">
                  <h3 class="info-title">👕 옷차림</h3>
                  <p><strong>낮</strong>: 긴팔 티/셔츠 + 얇은 니트 또는 가벼운 자켓</p>
                  <p><strong>저녁</strong>: 기온이 떨어지므로 얇은 긴소매 옷을 입거나, 반팔 티에 가디건,  바람막이 등 가벼운 외투를 챙기시기 바랍니다.</p>
                </div>

                <div class="info-card">
                  <h3 class="info-title">💰 화폐</h3>
                  <p>일본 화폐인 <strong>엔화(JPY)</strong>를 사용합니다.</p>
                  <p>카드 결제가 매우 보편적이지만, 일부 소규모 식당·시장·간식/노점은 현금이 필요할 수 있어 <strong>소액 현금을 준비하시는 것을 추천</strong>드립니다.</p>
                </div>

                <div class="info-card">
                  <h3 class="info-title">⚡ 전압</h3>
                  <p>일본 전압은 <strong>100V, 50Hz</strong>이며, 한국(220V)과 달라 돼지코 형태(일본/미국형 플러그) 어댑터가 필요합니다.</p>
                </div>

                <div class="info-card">
                  <h3 class="info-title">📋 여권/VISA</h3>
                  <p>여권은 유효기간이 충분히 남아 있어야 하며, 원활한 출입국을 위해 6개월 이상 잔여를 권장합니다.</p>
                  <p>대한민국 여권 소지자는 관광 목적으로 최대 <strong>90일간 무비자 체류</strong>가 가능합니다.</p>
                </div>

                <div class="info-card warning">
                  <h3 class="info-title">⚠️ 주의 사항</h3>
                  <ul>
                    <li>일본은 전반적으로 치안이 안전한 편이나, 관광지/번화가에서는 소지품 분실·도난에 유의하시기 바랍니다.</li>
                    <li>4월에도 기온이 낮고 비/바람이 있을 수 있어 체온 관리에 유의해 주세요.</li>
                    <li>도로 횡단 시 신호 준수, 자전거/차량 통행에 주의 바랍니다.</li>
                    <li>※ (온천 이용 시) 문신, 타투, 입장 규정은 시설별로 다를 수 있으니 안내를 따르시기 바랍니다.</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Tab 2: 공항 -->
            <div v-if="selectedTabId === '2'" class="content-area">
              <h2 class="main-title">깜란(나트랑) 국제공항</h2>

              <!-- 이미지 Placeholder -->
              <div class="image-placeholder landscape">
                <span>공항 이미지</span>
              </div>

              <p class="section-description">깜란(나트랑) 국제공항에 도착하신 이후의 이동 순서입니다.</p>

              <div class="process-steps">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div class="step-content">입국 심사</div>
                </div>
                <div class="step-arrow">↓</div>
                <div class="step-item">
                  <div class="step-number">2</div>
                  <div class="step-content">수하물 수취</div>
                </div>
                <div class="step-arrow">↓</div>
                <div class="step-item">
                  <div class="step-number">3</div>
                  <div class="step-content">세관 검사</div>
                </div>
                <div class="step-arrow">↓</div>
                <div class="step-item">
                  <div class="step-number">4</div>
                  <div class="step-content">게이트 밖으로 나와 버스 승차장 이동</div>
                </div>
                <div class="step-arrow">↓</div>
                <div class="step-item">
                  <div class="step-number">5</div>
                  <div class="step-content">버스 탑승</div>
                </div>
              </div>
            </div>

            <!-- Tab 3: 호텔 -->
            <div v-if="selectedTabId === '3'" class="content-area">
              <h2 class="main-title">더 웨스틴 리조트&스파 깜란</h2>
              <p class="subtitle">The Westin Resort & Spa Cam Ranh</p>

              <!-- 호텔 맵 이미지 Placeholder -->
              <div class="image-placeholder landscape large">
                <span>호텔 맵 이미지</span>
              </div>

              <div class="facilities-section">
                <h3 class="section-title">주요 시설</h3>

                <div class="facility-grid">
                  <div class="facility-card">
                    <div class="facility-icon">🍽️</div>
                    <h4>조식당: The Verandah</h4>
                    <p><strong>위치</strong>: BLOCK2 B층</p>
                    <p><strong>운영 시간</strong>: 06:00 ~ 11:00</p>
                  </div>

                  <div class="facility-card">
                    <div class="facility-icon">💪</div>
                    <h4>피트니스: Westin WORKOUT</h4>
                    <p><strong>위치</strong>: BLOCK2 G층</p>
                    <p><strong>운영 시간</strong>: 매일 24시간</p>
                    <p class="note">※ 입장 시 객실키 지참 필수</p>
                  </div>

                  <div class="facility-card">
                    <div class="facility-icon">🏊</div>
                    <h4>실외 수영장: Lap Pool</h4>
                    <p><strong>위치</strong>: BLOCK2</p>
                    <p><strong>운영 시간</strong>: 매일 07:00 ~ 19:00</p>
                  </div>

                  <div class="facility-card">
                    <div class="facility-icon">🏊</div>
                    <h4>실외 수영장: Resort Pool</h4>
                    <p><strong>위치</strong>: BLOCK2 ~ 빌라동 사이 야외</p>
                    <p><strong>운영 시간</strong>: 매일 07:00 ~ 19:00</p>
                  </div>
                </div>
              </div>

              <div class="hotel-info-section">
                <h3 class="section-title">기타 정보</h3>
                <div class="info-list">
                  <div class="info-item">
                    <strong>안내 데스크</strong>: Reception Building G층 / 운영 시간: 07:00 ~ 21:00
                  </div>
                  <div class="info-item">
                    <strong>기념품샵 및 매점</strong>: BLOCK2 G층 / 운영 시간: 09:00 ~ 21:00
                  </div>
                </div>

                <div class="alert-box warning">
                  <p><strong>※ 유의사항</strong>: 호텔 내에서는 환전 서비스를 제공하지 않습니다.<br />개별 비용은 한국에서 미리 환전하시는 것을 권장해드립니다.</p>
                </div>
              </div>
            </div>

            <!-- Tab 4: 액티비티 -->
            <div v-if="selectedTabId === '4'" class="content-area">
              <h2 class="main-title">액티비티</h2>

              <div class="tags-container">
                <span class="tag">#판랑 투어</span>
                <span class="tag">#호핑 투어</span>
                <span class="tag">#시내 관광</span>
              </div>

              <div class="activity-section">
                <h3 class="activity-title">판랑 사막 지프 투어</h3>

                <!-- 이미지 Placeholder -->
                <div class="image-placeholder landscape">
                  <span>판랑 사막 지프 투어 이미지</span>
                </div>

                <ul class="activity-details">
                  <li>나트랑 대표 즐길 거리! 전용 지프차를 타고 떠나는 스릴 만점 사막 체험</li>
                  <li>판랑 지역의 황금빛 모래 언덕을 지프차로 질주하며 짜릿한 스릴과 장관을 동시에 즐기는 경험</li>
                  <li>사막 속에 오아시스가?! 사막에서 물을 만나는 신비한 경험을 놓치지 마세요!</li>
                  <li class="point">📸 POINT: 사막 곳곳에서 만나는 포토 스팟에서 알록달록 예쁜 색감의 지프차와 함께 인생 사진을 남겨보세요</li>
                </ul>
              </div>

              <div class="activity-section">
                <h3 class="activity-title">쫑손사</h3>

                <!-- 이미지 Placeholder -->
                <div class="image-placeholder landscape">
                  <span>쫑손사 이미지</span>
                </div>

                <ul class="activity-details">
                  <li>전통적인 건축미와 고즈넉한 분위기가 조화를 이루는 유서 깊은 불교 사찰</li>
                  <li>Phụng Hoàng 산 정상에 자리 잡고 있어 판랑 시내와 바다 전경을 조망할 수 있습니다</li>
                  <li>베트남 전통 사찰 입장 시 짧은 민소매나 반바지 착용은 가능하나, 절 내부(기도 드리는 곳)은 입장이 불가할 수 있어 사전에 유의 바랍니다</li>
                  <li class="point">🔎 POINT: 300여 개의 석조 계단을 오르면 마침내 다다르는 사찰의 한적한 분위기에서 베트남 전통 불교 건축 양식과 불상 등을 감상해 보세요</li>
                </ul>
              </div>
            </div>

            <!-- Tab 5: 추천 쇼핑 리스트 -->
            <div v-if="selectedTabId === '5'" class="content-area">
              <h2 class="main-title">추천 쇼핑 리스트</h2>

              <!-- 디저트류 -->
              <div class="shopping-category">
                <h3 class="category-title">🍪 디저트류</h3>
                <div class="product-grid">
                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>체리쉬 망고 젤리</span>
                    </div>
                    <h4 class="product-name">체리쉬 망고 젤리</h4>
                    <p class="product-desc">망고 푸딩 같은 식감의 부드러운 젤리<br />달콤한 망고의 풍미가 가득!</p>
                  </div>

                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>게리 치즈 크래커</span>
                    </div>
                    <h4 class="product-name">게리 치즈 크래커</h4>
                    <p class="product-desc">바삭한 크래커 위에 진한 치즈 크림이 발린 과자<br />달콤하면서도 짭짤한 맛이 특징</p>
                  </div>

                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>Ahh 치즈 과자</span>
                    </div>
                    <h4 class="product-name">Ahh 치즈 과자</h4>
                    <p class="product-desc">바삭한 식감과 진한 치즈 맛이 어우러진 단짠조합!</p>
                  </div>

                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>커피 조이</span>
                    </div>
                    <h4 class="product-name">커피 조이</h4>
                    <p class="product-desc">얇은 비스킷에 퍼치는 은은한 커피향<br />가벼운 식감으로 커피와 완벽한 조합</p>
                  </div>

                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>타이빈 코코넛과자</span>
                    </div>
                    <h4 class="product-name">타이빈 코코넛과자</h4>
                    <p class="product-desc">코코넛 과육이 듬뿍 들어있는 과자<br />밀가루 없이 식물성 원재료로 만들어 더 고소하고 달콤한 맛</p>
                  </div>

                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>An쌀과자</span>
                    </div>
                    <h4 class="product-name">An쌀과자</h4>
                    <p class="product-desc">오리지널, 치즈 감자, 김 등 다양한 맛<br />낱개 포장되어 있어 선물용으로도 적합</p>
                  </div>
                </div>
              </div>

              <!-- 땅콩 및 견과류 -->
              <div class="shopping-category">
                <h3 class="category-title">🥜 땅콩 및 견과류</h3>
                <div class="product-grid">
                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>견과류 믹스</span>
                    </div>
                    <h4 class="product-name">땅콩 및 견과류</h4>
                    <p class="product-desc">캐슈넛, 마카다미아, 땅콩 등이 대표적<br />다양한 브랜드 및 용량별 제품 판매 중</p>
                  </div>
                </div>
              </div>

              <!-- 과일류 -->
              <div class="shopping-category">
                <h3 class="category-title">🥭 과일류</h3>
                <div class="product-grid">
                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>초이스엘 반건조 망고</span>
                    </div>
                    <h4 class="product-name">초이스엘 반건조 망고</h4>
                    <p class="product-desc">신선한 망고의 자연스러운 단맛이 가득<br />부드럽고 쫄깃한 식감</p>
                  </div>

                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>비나밋 건과일칩</span>
                    </div>
                    <h4 class="product-name">비나밋 건과일칩</h4>
                    <p class="product-desc">망고, 바나나, 파인애플 등 다양한 열대과일 믹스칩<br />가볍게 먹기 좋은 간식</p>
                  </div>
                </div>
              </div>

              <!-- 커피류 -->
              <div class="shopping-category">
                <h3 class="category-title">☕ 커피류</h3>
                <div class="product-grid">
                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>미스터 비엣 커피</span>
                    </div>
                    <h4 class="product-name">미스터 비엣 커피</h4>
                    <p class="product-desc">베트남 생산 원두로 만든 프리미엄 커피 브랜드<br />커피, 초콜릿, 말린 과일 등을 함께 판매</p>
                  </div>

                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>G7 커피</span>
                    </div>
                    <h4 class="product-name">G7 커피</h4>
                    <p class="product-desc">베트남 고품질 로부스타 원두를 사용한 독특한 맛과 향</p>
                  </div>

                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>코코페 코코넛 커피</span>
                    </div>
                    <h4 class="product-name">코코페 코코넛 커피</h4>
                    <p class="product-desc">크리미한 코코넛 밀크 파우더가 일품인 커피<br />고소하면서도 달달한 코코넛 향이 특징</p>
                  </div>
                </div>
              </div>

              <!-- 소스류 -->
              <div class="shopping-category">
                <h3 class="category-title">🌶️ 소스류</h3>
                <div class="product-grid">
                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>친수 소스</span>
                    </div>
                    <h4 class="product-name">친수 소스</h4>
                    <p class="product-desc">매콤한 칠리와 알싸한 와사비의 조합<br />샤브샤브나 고기, 해산물과 곁들이는 것을 추천</p>
                  </div>

                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>느억맘 소스</span>
                    </div>
                    <h4 class="product-name">느억맘 소스</h4>
                    <p class="product-desc">발효 멸치로 만들어 깊은 감칠맛이 특징인 베트남 대표 피시 소스<br />쌀국수, 분짜, 볶음밥과의 조합을 추천</p>
                  </div>

                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>나타스 새우 소금</span>
                    </div>
                    <h4 class="product-name">나타스 새우 소금</h4>
                    <p class="product-desc">새우의 깊은 풍미와 매콤한 고추, 향긋한 마늘의 조화<br />볶음 요리나 해산물에 곁들이는 것을 추천</p>
                  </div>
                </div>
              </div>

              <!-- 소품류 -->
              <div class="shopping-category">
                <h3 class="category-title">👜 소품류</h3>
                <div class="product-grid">
                  <div class="product-card">
                    <div class="image-placeholder square">
                      <span>라탄 가방</span>
                    </div>
                    <h4 class="product-name">라탄 가방 및 크록스</h4>
                    <p class="product-desc">핸드메이드 감성의 가볍고 휴대가 편리한 라탄 가방<br />저렴한 가격에 판매하는 여름 맞춤형 크록스 신발</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.local-page {
  padding: 40px 10px;
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
          padding: 12px 24px;
          flex: 0 1 auto;
          border: 2px solid #e0e0e0;
          border-radius: 30px;
          background: white;
          transition: all 0.3s ease;
          font-size: 15px;
          font-weight: 500;
          color: #333;
          cursor: pointer;
          background-clip: padding-box;

          @media (min-width: 768px) {
            padding: 14px 32px;
            font-size: 16px;
          }

          &:hover {
            border-color: #C2335F;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(25, 115, 75, 0.2);
          }

          &.active {
            background-image: linear-gradient(135deg, #C2335F 0%, #273672 100%);
            border-color: #C2335F00;
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
    .content-area {
      background: white;
      border-radius: 12px;
      padding: 32px 24px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
      animation: fadeIn 0.4s ease;

      @media (min-width: 768px) {
        padding: 48px 40px;
      }

      .main-title {
        font-size: 28px;
        font-weight: 700;
        color: #C2335F;
        margin-bottom: 8px;
        text-align: center;

        @media (min-width: 768px) {
          font-size: 36px;
          margin-bottom: 12px;
        }
      }

      .subtitle {
        font-size: 16px;
        color: #666;
        margin-bottom: 32px;
        text-align: center;
        font-style: italic;

        @media (min-width: 768px) {
          font-size: 18px;
        }
      }

      .section-description {
        font-size: 16px;
        color: #555;
        margin-bottom: 32px;
        text-align: center;
        line-height: 1.6;

        @media (min-width: 768px) {
          font-size: 17px;
        }
      }

      .section-title {
        font-size: 22px;
        font-weight: 700;
        color: #333;
        margin: 48px 0 24px;
        padding-bottom: 12px;
        border-bottom: 2px solid #C2335F;

        @media (min-width: 768px) {
          font-size: 24px;
        }
      }
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

  // Image Placeholder
  .image-placeholder {
    background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
    border: 2px dashed #bbb;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 24px;
    position: relative;
    overflow: hidden;

    &.landscape {
      width: 100%;
      padding-top: 56.25%; // 16:9 aspect ratio

      &.large {
        padding-top: 66.67%; // Larger format for maps
      }
    }

    &.square {
      width: 100%;
      padding-top: 100%; // 1:1 aspect ratio
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 14px;
      color: #666;
      font-weight: 500;
      text-align: center;
      padding: 20px;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }

  // Info Grid (Tab 1: 나트랑 소개)
  .info-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 32px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .info-card {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 24px;
      border-left: 4px solid #C2335F;
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        transform: translateY(-4px);
      }

      &.warning {
        background: #fff9e6;
        border-left-color: #ff9800;

        .info-title {
          color: #ff9800;
        }
      }

      .info-title {
        font-size: 18px;
        font-weight: 600;
        color: #C2335F;
        margin-bottom: 16px;

        @media (min-width: 768px) {
          font-size: 20px;
        }
      }

      p {
        font-size: 15px;
        line-height: 1.7;
        color: #555;
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0;
        }

        strong {
          color: #C2335F;
          font-weight: 600;
        }

        small {
          font-size: 13px;
          color: #777;
        }
      }

      ul {
        padding-left: 20px;
        margin: 0;

        li {
          font-size: 15px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 8px;
        }
      }

      .tip-box {
        background: #e8f5e9;
        border-radius: 8px;
        padding: 16px;
        margin-top: 12px;
        font-size: 14px;
        line-height: 1.6;
        color: #2e7d32;

        strong {
          color: #1b5e20;
        }
      }
    }
  }

  // Process Steps (Tab 2: 공항)
  .process-steps {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px 0;

    .step-item {
      display: flex;
      align-items: center;
      gap: 16px;
      background: #f8f9fa;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 12px;
      transition: all 0.3s ease;

      &:hover {
        background: #e8f5e9;
        transform: translateX(8px);
      }

      .step-number {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #C2335F 0%, #273672 100%);
        color: white;
        font-size: 18px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      .step-content {
        font-size: 16px;
        font-weight: 500;
        color: #333;
        line-height: 1.5;
      }
    }

    .step-arrow {
      text-align: center;
      font-size: 24px;
      color: #C2335F;
      margin: 4px 0;
    }
  }

  // Facilities Section (Tab 3: 호텔)
  .facilities-section {
    margin-bottom: 40px;

    .facility-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }

      .facility-card {
        background: #f8f9fa;
        border-radius: 12px;
        padding: 24px;
        text-align: center;
        transition: all 0.3s ease;

        &:hover {
          background: #e8f5e9;
          transform: translateY(-4px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        .facility-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        h4 {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 12px;
        }

        p {
          font-size: 15px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 8px;

          &:last-of-type {
            margin-bottom: 0;
          }

          strong {
            color: #C2335F;
          }
        }

        .note {
          font-size: 13px;
          color: #666;
          font-style: italic;
          margin-top: 8px;
        }
      }
    }
  }

  .hotel-info-section {
    .info-list {
      .info-item {
        background: #f8f9fa;
        border-radius: 8px;
        padding: 16px 20px;
        margin-bottom: 12px;
        font-size: 15px;
        line-height: 1.6;
        color: #555;

        strong {
          color: #C2335F;
        }
      }
    }

    .alert-box {
      background: #fff9e6;
      border: 2px solid #ff9800;
      border-radius: 12px;
      padding: 20px;
      margin-top: 24px;

      p {
        margin: 0;
        font-size: 15px;
        line-height: 1.7;
        color: #663c00;

        strong {
          color: #ff6f00;
        }
      }
    }
  }

  // Activity Section (Tab 4: 액티비티)
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 32px;
    justify-content: center;

    .tag {
      background: linear-gradient(135deg, #C2335F 0%, #273672 100%);
      color: white;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 20px;
      border-radius: 20px;
      box-shadow: 0 2px 8px rgba(25, 115, 75, 0.3);
    }
  }

  .activity-section {
    margin-bottom: 48px;

    &:last-child {
      margin-bottom: 0;
    }

    .activity-title {
      font-size: 24px;
      font-weight: 700;
      color: #C2335F;
      margin-bottom: 20px;

      @media (min-width: 768px) {
        font-size: 28px;
      }
    }

    .activity-details {
      list-style: none;
      padding: 0;
      margin: 24px 0 0;

      li {
        position: relative;
        padding-left: 28px;
        font-size: 15px;
        line-height: 1.8;
        color: #555;
        margin-bottom: 16px;

        @media (min-width: 768px) {
          font-size: 16px;
        }

        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #C2335F;
          font-size: 24px;
          line-height: 1.3;
        }

        &.point {
          background: #e8f5e9;
          border-left: 3px solid #C2335F;
          border-radius: 8px;
          padding: 16px 20px 16px 28px;
          font-weight: 500;

          &::before {
            content: '';
          }
        }
      }
    }
  }

  // Shopping Category (Tab 5: 추천 쇼핑 리스트)
  .shopping-category {
    margin-bottom: 48px;

    &:last-child {
      margin-bottom: 0;
    }

    .category-title {
      font-size: 22px;
      font-weight: 700;
      color: #333;
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 2px solid #C2335F;

      @media (min-width: 768px) {
        font-size: 26px;
      }
    }

    .product-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;

      @media (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .product-card {
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          border-color: #C2335F;
        }

        .product-name {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 16px 16px 8px;

          @media (min-width: 768px) {
            font-size: 17px;
          }
        }

        .product-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          margin: 0 16px 16px;

          @media (min-width: 768px) {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
