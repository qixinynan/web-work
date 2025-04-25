<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterLink to="/detail?pid=02a7f4046823b4093b8c648fa9eb5826">detail</RouterLink>
    <RouterLink style="margin-left: 10px;" to="/profile?pid=d877cfd9e7d54fd8ba6712d34db5055b">profile</RouterLink>
    <RouterLink style="margin-left: 10px;" to="/share?type=0">share (black)</RouterLink>
    <RouterLink style="margin-left: 10px;" to="/share?type=1">share (white)</RouterLink>
  </main>
</template>
