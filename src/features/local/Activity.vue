<template>
  <div class="activity-container">
    <h2 class="section-title">액티비티</h2>

    <div class="tags-container">
      <span class="tag">#판랑 투어</span>
      <span class="tag">#호핑 투어</span>
      <span class="tag">#시내 관광</span>
    </div>

    <div class="info-section">
      <h3 class="info-title">판랑 사막 지프 투어</h3>

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
</template>
<style lang="scss" scoped>
// Activity Section (Tab 4: 액티비티)
.tags-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  .tag {
    display: inline-block;
    background: #e3f2fd;
    color: #1976d2;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 12px;
  }
}
</style>