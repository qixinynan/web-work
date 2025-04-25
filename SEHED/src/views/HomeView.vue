<script setup>
import TitleBar from '@/components/TitleBar.vue';
import Carousel from '@/components/Carousel.vue';
</script>

<template>
  <div class="content">
    <Carousel></Carousel>
    <div class="content-content">
      <h2 class="text-black text-center mt-5 fw-bold home-text-2">Welcome to Sehed</h2>
      <h2 class="text-black text-center fw-bold home-text-2">An inclusive financial service provider in Bangladesh
      </h2>
      <p class="text-black text-center home-text mt-4 mt-lg-5">Since 2006 from a village of Bhagirathpur to all
        Bangladesh,<br class="d-none d-lg-block">We firmly believe that equal access to financial services for
        all is the
        primary
        means of
        eradicating poverty.
      </p>
      <p class="text-black text-center home-text">
      </p>
    </div>
    <div class="value-list">
      <div class="value-item d-flex flex-column align-items-center">
        <img width="32" src="@/assets/img/home-icon-1.svg">
        <span class="text-black fw-bold py-3 vl-title">60+</span>
        <span class="text-black vl-desc">Branches</span>
      </div>
      <div class="value-item d-flex flex-column align-items-center">
        <img width="32" src="@/assets/img/home-icon-2.svg">
        <span class="text-black fw-bold py-3 vl-title">200K+</span>
        <span class="text-black vl-desc">People Reached</span>
      </div>
      <div class="value-item d-flex flex-column align-items-center">
        <img width="32" src="@/assets/img/home-icon-3.svg">
        <span class="text-black fw-bold py-3 vl-title">13M+</span>
        <span class="text-black vl-desc">Services Amount</span>
      </div>
      <div class="value-item d-flex flex-column align-items-center">
        <img width="32" src="@/assets/img/home-icon-4.svg">
        <span class="text-black fw-bold py-3 vl-title">2700</span>
        <span class="text-black vl-desc">Volunteers</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  max-width: 1200px;
}

.content-content {
  margin: 0 3px;
}

.value-list {
  display: flex;
  justify-content: space-around;
  background-color: rgba(63, 55, 55, 0.08);
  padding: 25px;
  max-width: 800px;
  margin: 40px 10px;
}

.home-text {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0px;
  padding-bottom: 5px;
}

.home-text-2 {
  font-size: 18px;
  margin: 0 5px;
}

.vl-title {
  font-size: 23px;
}

.vl-desc {
  text-align: center;
  font-size: 14px;
}

@media (min-width: 992px) {
  .home-text-2 {
    font-size: 25px !important;
  }

  .home-text {
    font-size: 16.8px;
  }

  .value-list {
    margin: 40px auto;
  }

  .vl-title {
    font-size: 30px;
  }

  .vl-desc {
    font-size: 16px;
  }
}
</style>
