<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from "@/components/Nav.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <Nav>

  </Nav>
  <!-- <RouterLink to="/about">About</RouterLink> -->
  <RouterView />
  <Footer></Footer>
</template>

<style scoped></style>
