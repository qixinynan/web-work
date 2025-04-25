<template>
  <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active h-100">
        <img src="@/assets/img/contact-1.png" class="d-block img" alt="...">
      </div>
      <div class="carousel-item h-100">
        <img src="@/assets/img/contact-2.png" class="d-block img" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev " type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next " type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped>
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.carousel-inner {
  background-color: rgb(209, 209, 209);
  height: 100%;
  border-radius: 15px;
}
</style>