<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid nav-container">
      <a class="navbar-brand d-flex" href="#">
        <img src="@/assets/logo.png" alt="Logo" class="d-inline-block align-text-top logo-img">
      </a>
      <div class="d-flex align-items-center">
        <div class="mx-3 d-lg-none" @click="download">
          <img height="32" src="@/assets/img/download.svg">
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="green" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="green" to="/about">About Us</RouterLink>
          </li>
          <li class="nav-item ">
            <RouterLink class="nav-link" active-class="green" to="/what-we-do">What We Do</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="green" to="/contact">Contact Us</RouterLink>
          </li>
          <li class="nav-item d-none d-lg-flex align-items-center ">
            <button class="download-btn" @click="download">Download App</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.logo-img {
  height: 50px;
  margin-left: 10px;
}

.nav-container {
  max-width: 1200px;
}

.nav-item {
  margin: 0 15px;
}

.nav-link {
  font-size: 16px !important;
  color: #101010;
  font-weight: bold !important;
}

.download-btn {
  /* padding: 8px; */
  font-size: 12px;
  color: white;
  background-color: #09AD09;
  padding: 6px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
}

@media (min-width: 992px) {
  .navbar {
    height: 140px;
  }

  .navbar-brand {
    line-height: 140px;
    outline: 0;
  }

  .logo-img {
    height: 68px;
  }

  .navbar-nav .nav-link {
    line-height: 140px;
  }

  .navbar-collapse {
    /* flex: 0 !important */
  }
}
</style>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { downloadAndroid } from '@/api/api';
import { ref } from 'vue';
const downloadLink = ref('#');
downloadAndroid().then(res => {
  console.log(res.data);
  downloadLink.value = res.data
})

const download = () => {
  window.location.href = downloadLink.value;
}
</script>