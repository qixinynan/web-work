<script setup>
import TitleBar from '@/components/TitleBar.vue';
</script>
<template>
  <div>
    <TitleBar tag="What We Do">WHAT WE DO</TitleBar>
    <div>
      <p class="green fw-bold text-center mt-5 mb-2">What We Do</p>
      <p class="fs-4 fw-bold text-center">Involved financial services,development programs work in the bangladesh</p>
      <p class="fs-6 fw-bold text-center mt-5">Customised products designed to meet the needs of our diverse group of
        clients
      </p>
      <div class="img-list">
        <div class="img-item">
          <img src="@/assets/img/wwd-1.png">
          <p class="fw-bold text-center mt-1">Small Enterprise Loans</p>
        </div>
        <div class="img-item">
          <img src="@/assets/img/wwd-2.png">
          <p class="fw-bold text-center mt-1">Loans for Women</p>
        </div>
        <div class="img-item">
          <img src="@/assets/img/wwd-3.png">
          <p class="fw-bold text-center mt-1">BNPL</p>
        </div>
        <div class="img-item">
          <img src="@/assets/img/wwd-4.png">
          <p class="fw-bold text-center mt-1">Supplychain Support</p>
        </div>
        <div class="img-item">
          <img src="@/assets/img/wwd-5.png">
          <p class="fw-bold text-center mt-1">Savings</p>
        </div>
        <div class="img-item">
          <img src="@/assets/img/wwd-6.png">
          <p class="fw-bold text-center mt-1">Jobholder Loans</p>
        </div>
        <div class="img-item">
          <img src="@/assets/img/wwd-7.png">
          <p class="fw-bold text-center mt-1">Credit Card support</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.img-list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
  margin-bottom: 50px;
}

.img-item {
  width: 100%;
}

.img-item img {
  width: 100%;
  padding: 0px 30px;
}

@media (min-width: 992px) {
  .img-list {
    flex-direction: row;
    max-width: 1100px;
    margin: 0 auto;
    flex-wrap: wrap;
    /* gap: 20px; */
    gap: 30px 15px;
    margin-bottom: 50px;

  }

  .img-item {
    width: 260px;
  }

  .img-item img {
    width: 260px;
    padding: 0;
  }
}
</style>