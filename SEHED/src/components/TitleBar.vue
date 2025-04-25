<template>
  <div class="title-bar">
    <h1 class="title">
      <slot></slot>
    </h1>
    <div class="tag">{{ tag }}</div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps(['tag'])
</script>
<style scoped>
.title-bar {
  height: 115px;
  background-color: #98938D;
  position: relative;
}

.title {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 25px;
}

.tag {
  position: absolute;
  background-color: #09AD09;
  color: white;
  padding: 9px 20px;
  border-radius: 4px;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  font-size: 12px;

}
</style>