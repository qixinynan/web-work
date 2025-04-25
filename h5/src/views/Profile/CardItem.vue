<template>
  <div class="card">
    <div class="cover-div" :class="templateStyle">
      <img v-if="item.picUrl1 || item.pictureList?.[0]" class="cover" :src="item.picUrl1 || item.pictureList?.[0]" />
      <div ref="textRef" v-if="text" class="text">{{ text }}</div>
      <img v-if="getImg()" class="icon" :src="getImg()"></img>
      <div class="price">¥{{ item.price?.toFixed(2) }}</div>
      <div class="corner" v-if="item.approvalStatus === '1'">审</div>
    </div>
    <div class="title">{{ item.title }}</div>
    <div class="author-row">
      <img class="author-avatar" :src="item.userPic || fallbackAvatar" />
      <div class="author-name">{{ props.nickName }}</div>
      <div>
        <div class="like"><img width="12px" style="  filter: invert(1);" src="@/assets/imgs/star.png"> {{ item.likeNum
          }}</div>
        <!-- <span>{{ item }}</span> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue';

const props = defineProps({
  item: Object,
  fallbackAvatar: String,
  nickName: String,
});

const templateStyle = ref("")
const text = ref("")
const textRef = ref(null)
const img = ref("")

import t1 from "@/assets/imgs/home/t1.png";
import t2 from "@/assets/imgs/home/t2.png";
import t3 from "@/assets/imgs/home/t3.png";

const imgMap = {
  "template-1": t1,
  "template-2": t2,
  "template-3": t3
};

const getImg = () => {
  return imgMap[templateStyle.value] || null;
};

if (!(props.item.picUrl1 || props.item.pictureList?.[0])) {
  nextTick(() => {
    const el = textRef.value
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight)
    const lines = Math.round(el.scrollHeight / lineHeight)
    console.log('当前显示了行数：', lines)
    if (lines == 1) templateStyle.value = "template-1"
    else if (lines == 2) templateStyle.value = "template-2"
    else templateStyle.value = "template-3"
  })
  text.value = props.item.content
}

function convertToChineseUnit(number) {
  const units = ["京", "兆", "亿", "万", ""]
  const bases = [1e16, 1e12, 1e8, 1e4, 1]

  for (let i = 0; i < units.length; i++) {
    if (Math.abs(number) >= bases[i]) {
      return formatNumber(number / bases[i]) + units[i]
    }
  }

  return number.toString()
}
</script>

<style scoped>
.text {
  color: black;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  overflow-wrap: break-word;
  margin: 0 30px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon {
  width: 40px;
  position: absolute;
}

.template-2 .text {
  font-size: 20px !important;
  bottom: 30%;
}

.template-3 .text {
  font-size: 20px !important;
  /* bottom: 30%; */
}

.card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}

.cover {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  position: relative;
}

.cover-div {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.corner {
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 4px;
}

.price {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.37);
  font-size: 11px;
  border-radius: 10px;
  padding: 2px 6px;
  left: 7px;
  bottom: 7px;
  color: white;
}

.title {
  font-weight: bold;
  padding: 4px 8px;
  font-size: 13px;
  line-height: 1.3;
}

.author-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px 8px;
  color: #888;
}

.author-avatar {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.author-name {
  flex: 1;
  margin: 0 6px;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.like {
  font-size: 10px;
}
</style>
