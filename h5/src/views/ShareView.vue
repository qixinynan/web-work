<template>
  <div class="share-container" @click="openHandler">
    <img :src="backgroundImage" alt="Share" class="share-image">
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import shareBlackImg from '../assets/share_black.png'
import shareWhiteImg from '../assets/share_white.png'
// import { openDownloadUrl } from '../utils/appRedirect'
const openHandler = () => {
  location.href = "http://testapk.singalariti.com/apk/metaverse_app_huawei_0.0.1.apk"
}

const route = useRoute()
const type = computed(() => route.query.type || '0')
const backgroundImage = computed(() => {
  return type.value === '1' ? shareWhiteImg : shareBlackImg
})
</script>

<style scoped>
.share-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  overflow: hidden;
  cursor: pointer;
}

.share-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* This will make the image cover the container */
  object-position: center;
  /* Center the image */
}
</style>