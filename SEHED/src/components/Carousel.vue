<template>
  <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/img/home1.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/home2.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/home3.png" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev d-lg-none" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next d-lg-none" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>