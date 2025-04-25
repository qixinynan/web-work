<template>
  <div class="user-bar">
    <div class="user-content">
      <img class="avatar" :src="props.head">
      <div class="username">{{ props.name }}</div>
    </div>
    <div class="subscribe">
      <img width="16px" src="@/assets/imgs/detail/关注.png">
      关注
    </div>
  </div>
</template>
<script setup>
// import { defineProps } from 'vue';
// const props = defineProps(['name'])
const props = defineProps(['name', 'head'])
</script>
<style scoped>
.user-bar {
  display: flex;
  margin-top: 10px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
}

.user-content {
  display: flex;
  align-items: center;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: solid 1px #db8aff;
  aspect-ratio: 1/1;
  padding: 2px;
}

.username {
  font-size: 16px;
  padding-left: 5px;
  font-weight: bold;
}

.subscribe {
  background-color: #f7f7f7;
  padding: 5px 10px;
  gap: 5px;
  border: solid 1.5px #9e75da;
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
</style>