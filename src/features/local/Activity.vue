<script setup>
import { ImageComponent } from '@/components/image';
import img1 from '@images/local/activity/activity-img1.jpg';
import img2 from '@images/local/activity/activity-img2.jpg';
import img3 from '@images/local/activity/activity-img3.webp';

</script>
<template>
  <div class="activity-container">
    <h2 class="section-title">액티비티</h2>

    <ImageComponent :src="img1" alt="" class="main-img mb20" />

    <div class="info-section">
      <h3 class="section-subtitle">시코츠코 관광</h3>
      <div class="section-details">
        일본 최북단의 얼지 않는 호수, 시코츠코.<br />
        일본 최북단의 얼음이 얼지 않는 부동호로 알려져 있습니다.<br />
        맑고 깊은 호수 풍경과 자연 속에 놓인 야마엔 철교,<br />
        그리고 시코츠코의 명물 에그포테이토까지.<br />
        자연의 고요함과 지역의 맛을 함께 즐기는 홋카이도의 특별한 힐링 여행지입니다.
      </div>
    </div>
    <div class="section-divider"></div>
    <ImageComponent :src="img2" alt="" class="main-img mb20" />
    <div class="info-section">
      <h3 class="section-subtitle">노보리베츠 관광</h3>
      <div class="section-details">
        노보리베츠는 일본 홋카이도에 위치한 해안마을로, <br />
        뜨거운 온천의 증기가 피어오르는 지옥계곡,<br />
        에도시대의 문화를 체험하는 지다이무라, <br />
        그리고 북해도 개척의 상징 홋츠지 가요 전망대까지.<br />
        자연의 신비와 역사, 문화가 어우러진<br />
        노보리베츠의 매력을 한 번에 만나는 특별한 여행지입니다.
      </div>
    </div>
    <div class="section-divider"></div>
    <ImageComponent :src="img3" alt="" class="main-img mb20" />
    <div class="info-section">
      <h3 class="section-subtitle">오타루 관광</h3>
      <div class="section-details">
        오타루는 일본의 홋카이도에 위치한 중요한 항구 도시로서,<br />
        낭만적인 풍경의 오타루 운하,<br />
        활기 넘치는 먹거리 거리 오르골당,<br />
        그리고 감각적인 상점들이 이어진 사포로 시내까지.<br />
        역사와 감성, 그리고 홋카이도의 분위기를 천천히 걸으며 즐기는 매력적인 도시, 오타루입니다.
      </div>
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